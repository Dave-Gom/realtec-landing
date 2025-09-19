"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type CarouselProps<T extends object> = {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Carousel = <T extends object>({
  data,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 3000,
  className,
  style,
  containerProps,
}: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for cloned first item
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create extended data with clones for infinite scrolling
  const extendedData =
    data.length > 1 ? [data[data.length - 1], ...data, data[0]] : data;

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const goPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because we have a cloned item at the beginning
  };

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

  // Manejo de autoplay
  useEffect(() => {
    if (!autoPlay || data.length <= 1) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(goNext, autoPlayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, autoPlayInterval, data.length]);

  if (!data || data.length === 0) {
    return null; // No renderiza nada si no hay datos
  }

  // Get the actual index for indicators (accounting for cloned items)
  const actualIndex =
    data.length > 1 ? (currentIndex - 1 + data.length) % data.length : 0;

  return (
    <div
      className={`relative overflow-hidden w-full ${className || ""}`}
      style={style}
      {...containerProps}
    >
      {/* Contenedor de slides */}
      <div
        ref={carouselRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (100 / extendedData.length)
          }%)`,
          width: `${extendedData.length * 100}%`,
        }}
      >
        {extendedData.map((item, i) => {
          // For cloned items, we need to get the original item data
          const originalIndex =
            data.length > 1 && i === 0
              ? data.length - 1
              : data.length > 1 && i === extendedData.length - 1
              ? 0
              : data.length > 1
              ? i - 1
              : i;

          return (
            <div
              key={`slide-${i}`}
              className="w-full flex-shrink-0 flex justify-center items-center"
              style={{ width: `${100 / extendedData.length}%` }}
            >
              {renderItem(item, originalIndex)}
            </div>
          );
        })}
      </div>

      {/* Botón Anterior */}
      {data.length > 1 && (
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
        >
          ‹
        </button>
      )}

      {/* Botón Siguiente */}
      {data.length > 1 && (
        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
        >
          ›
        </button>
      )}

      {/* Indicadores */}
      {data.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                i === actualIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
