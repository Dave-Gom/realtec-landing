"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CarouselProps<T extends object> = {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  continuousScroll?: boolean;
  fullViewItem?: boolean;
  itemsPerView?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Carousel = <T extends object>({
  data,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 3000,
  continuousScroll = false,
  fullViewItem = true,
  itemsPerView = 0,
  gap = 1,
  className,
  style,
  containerProps,
}: CarouselProps<T>) => {
  // State management
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Refs
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Memoized data calculations
  const extendedData = useMemo(() => {
    if (continuousScroll) {
      return [...data, ...data, ...data, ...data]; // Multiple copies for smooth infinite scrolling
    }
    if (fullViewItem && data.length > 1) {
      return [data[data.length - 1], ...data, data[0]]; // Traditional single-item cloning
    }
    return data; // No cloning needed for FlatList-style non-continuous scrolling
  }, [data, continuousScroll, fullViewItem]);

  // Memoized style calculations
  const containerStyles = useMemo(() => {
    const baseTransform = continuousScroll
      ? `translateX(-${translateX}%)`
      : fullViewItem
      ? `translateX(-${currentIndex * (100 / extendedData.length)}%)`
      : `translateX(-${currentIndex * (100 / itemsPerView)}%)`;

    const containerWidth = continuousScroll
      ? fullViewItem
        ? `${extendedData.length * 100}%`
        : `${(extendedData.length * 100) / itemsPerView}%`
      : fullViewItem
      ? `${extendedData.length * 100}%`
      : `${data.length * 100}%`;

    return {
      gap: continuousScroll && !fullViewItem ? `${gap}rem` : undefined,
      transform: baseTransform,
      width: containerWidth,
      userSelect: continuousScroll ? ("none" as const) : ("auto" as const),
    };
  }, [
    continuousScroll,
    translateX,
    fullViewItem,
    currentIndex,
    extendedData.length,
    itemsPerView,
    data.length,
    gap,
  ]);

  // Memoized CSS classes
  const containerClasses = useMemo(() => {
    const classes = ["flex"];

    if (!continuousScroll && isTransitioning) {
      classes.push("transition-transform", "duration-500", "ease-in-out");
    }

    if (continuousScroll) {
      classes.push("cursor-grab", "active:cursor-grabbing");
    }

    return classes.join(" ");
  }, [continuousScroll, isTransitioning]);

  // Memoized item calculations
  const getItemStyles = useMemo(() => {
    return () => {
      const itemWidth = continuousScroll
        ? fullViewItem
          ? "100%"
          : `calc(${100 / itemsPerView}% - ${gap}rem)`
        : fullViewItem
        ? `${100 / extendedData.length}%`
        : `${100 / itemsPerView}%`;

      return { width: itemWidth };
    };
  }, [continuousScroll, fullViewItem, itemsPerView, gap, extendedData.length]);

  // Memoized item classes
  const getItemClasses = useMemo(() => {
    return () => {
      const classes = [
        "flex-shrink-0",
        "flex",
        "justify-center",
        "items-center",
      ];

      if (continuousScroll && !fullViewItem) {
        classes.push("px-2");
      }

      if (!continuousScroll && fullViewItem) {
        classes.push("w-full");
      }

      return classes.join(" ");
    };
  }, [continuousScroll, fullViewItem]);

  // Memoized scroll boundaries
  const scrollBoundaries = useMemo(() => {
    const maxScroll = fullViewItem
      ? ((extendedData.length - 1) * 100) / extendedData.length
      : ((extendedData.length - itemsPerView) * 100) / itemsPerView;

    return { maxScroll };
  }, [fullViewItem, extendedData.length, itemsPerView]);

  const goNext = useCallback(() => {
    if (continuousScroll || isTransitioning) return;
    setIsTransitioning(true);

    if (fullViewItem) {
      // Traditional single item navigation
      setCurrentIndex((prev) => prev + 1);
    } else {
      // FlatList-style: scroll by container width
      setCurrentIndex((prev) =>
        Math.min(prev + itemsPerView, data.length - itemsPerView)
      );
    }
  }, [
    isTransitioning,
    continuousScroll,
    fullViewItem,
    itemsPerView,
    data.length,
  ]);

  const goPrev = () => {
    if (continuousScroll || isTransitioning) return;
    setIsTransitioning(true);

    if (fullViewItem) {
      // Traditional single item navigation
      setCurrentIndex((prev) => prev - 1);
    } else {
      // FlatList-style: scroll by container width
      setCurrentIndex((prev) => Math.max(prev - itemsPerView, 0));
    }
  };

  const goToSlide = (index: number) => {
    if (continuousScroll || isTransitioning) return;
    setIsTransitioning(true);

    if (fullViewItem) {
      // Traditional navigation to specific slide
      setCurrentIndex(index + 1); // +1 because we have a cloned item at the beginning
    } else {
      // FlatList-style: go to specific index
      setCurrentIndex(index);
    }
  };

  // Mouse/Touch drag handlers for continuous scroll mode
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!continuousScroll) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(translateX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!continuousScroll || !isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 0.15; // Reduced sensitivity for smoother experience
    const newTranslateX = scrollLeft - walk;

    // Ensure we stay within bounds and handle infinite scrolling
    const { maxScroll } = scrollBoundaries;

    if (newTranslateX < 0) {
      setTranslateX(maxScroll + newTranslateX);
    } else if (newTranslateX > maxScroll) {
      setTranslateX(newTranslateX - maxScroll);
    } else {
      setTranslateX(newTranslateX);
    }
  };

  const handleMouseUp = () => {
    if (!continuousScroll) return;
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!continuousScroll) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(translateX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!continuousScroll || !isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 0.15; // Reduced sensitivity for smoother touch experience
    const newTranslateX = scrollLeft - walk;

    const { maxScroll } = scrollBoundaries;

    if (newTranslateX < 0) {
      setTranslateX(maxScroll + newTranslateX);
    } else if (newTranslateX > maxScroll) {
      setTranslateX(newTranslateX - maxScroll);
    } else {
      setTranslateX(newTranslateX);
    }
  };

  const handleTouchEnd = () => {
    if (!continuousScroll) return;
    setIsDragging(false);
  };

  // Initialize translateX for continuous scroll mode and currentIndex for discrete mode
  useEffect(() => {
    if (continuousScroll) {
      // Start at the beginning for continuous scrolling
      setTranslateX(0);
    } else {
      // Initialize currentIndex based on fullViewItem
      setCurrentIndex(fullViewItem ? 1 : 0); // 1 for cloned item, 0 for FlatList style
    }
  }, [continuousScroll, fullViewItem]);

  // Continuous scrolling animation - removed since we want manual control like ScrollView
  // Only keep discrete autoplay
  useEffect(() => {
    if (!autoPlay || data.length <= 1 || continuousScroll) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(goNext, autoPlayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    currentIndex,
    autoPlay,
    autoPlayInterval,
    data.length,
    continuousScroll,
    goNext,
  ]);

  // Handle discrete scrolling transitions
  useEffect(() => {
    if (!isTransitioning || continuousScroll) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (fullViewItem) {
        // Handle wrap around - jump to the real first/last item without animation
        if (currentIndex === 0) {
          setCurrentIndex(data.length);
        } else if (currentIndex === extendedData.length - 1) {
          setCurrentIndex(1);
        }
      }
      // For FlatList-style (fullViewItem=false), no wrap around needed
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        carousel.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [
    isTransitioning,
    currentIndex,
    data.length,
    extendedData.length,
    continuousScroll,
    fullViewItem,
  ]);

  // Handle infinite scrolling transitions
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Handle wrap around - jump to the real first/last item without animation
      if (currentIndex === 0) {
        setCurrentIndex(data.length);
      } else if (currentIndex === extendedData.length - 1) {
        setCurrentIndex(1);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        carousel.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [isTransitioning, currentIndex, data.length, extendedData.length]);

  // Manejo de autoplay discreto
  useEffect(() => {
    if (!autoPlay || data.length <= 1 || continuousScroll) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(goNext, autoPlayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    currentIndex,
    autoPlay,
    autoPlayInterval,
    data.length,
    continuousScroll,
    goNext,
  ]);

  if (!data || data.length === 0) {
    return null; // No renderiza nada si no hay datos
  }

  // Get the actual index for indicators (accounting for cloned items)
  const actualIndex = continuousScroll
    ? fullViewItem
      ? Math.floor(translateX / (100 / extendedData.length)) % data.length
      : Math.floor(translateX / (100 / itemsPerView)) % data.length
    : fullViewItem && data.length > 1
    ? (currentIndex - 1 + data.length) % data.length
    : Math.floor(currentIndex / itemsPerView) %
      Math.ceil(data.length / itemsPerView);

  return (
    <div
      className={`relative overflow-hidden ${className || ""}`}
      style={style}
      {...containerProps}
    >
      {/* Contenedor de slides */}
      <div
        ref={carouselRef}
        className={containerClasses}
        style={containerStyles}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {extendedData.map((item, i) => {
          // For cloned items, we need to get the original item data
          const originalIndex = continuousScroll
            ? i % data.length
            : fullViewItem && data.length > 1 && i === 0
            ? data.length - 1
            : fullViewItem && data.length > 1 && i === extendedData.length - 1
            ? 0
            : fullViewItem && data.length > 1
            ? i - 1
            : i;

          return (
            <div
              key={`slide-${i}`}
              className={getItemClasses()}
              style={getItemStyles()}
            >
              {renderItem(item, originalIndex)}
            </div>
          );
        })}
      </div>

      {/* Botón Anterior - Hidden in continuous scroll mode */}
      {data.length > 1 && !continuousScroll && (
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
      )}

      {/* Botón Siguiente - Hidden in continuous scroll mode */}
      {data.length > 1 && !continuousScroll && (
        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      )}

      {/* Indicadores - Hidden in continuous scroll mode */}
      {data.length > 1 && !continuousScroll && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                i === actualIndex ? "bg-white" : "bg-white/50"
              } cursor-pointer`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
