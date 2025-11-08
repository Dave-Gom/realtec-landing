import { Property } from "csstype";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";

type CarouselProps<T extends object> = {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  continuousScroll?: boolean;
  gap?: Property.Gap;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  contentContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contenContainerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Carousel = <T extends object>({
  data,
  renderItem,
  continuousScroll,
  gap,
  className,
  containerProps,
  contenContainerProps,
  contentContainerClassName,
}: CarouselProps<T>) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const [scrollValues, setScrollValues] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  });
  const [showRightButton, setShowRightButton] = useState(false)

  const handleWindowResize = () => {
   const width = window.innerWidth;
   setShowRightButton(data.length > 2 && width <1200)
  }

  useEffect(() => {
    const scrollable = scrollableRef.current;
    if (!scrollable) return;

    // Calcula inmediatamente después del montaje
    const updateScrollValues = () => {
      setScrollValues({
        clientWidth: scrollable.clientWidth,
        scrollLeft: scrollable.scrollLeft,
        scrollWidth: scrollable.scrollWidth,
      });
    };
    updateScrollValues();

    scrollableRef.current?.addEventListener("scroll", updateScrollValues);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      scrollableRef.current?.removeEventListener("scroll", updateScrollValues);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const showLeftButton = useMemo(() => {
    return data.length > 1 && !continuousScroll && scrollValues.scrollLeft > 0;
  }, [data.length, continuousScroll, scrollValues]);

  useEffect(() => {
    setShowRightButton(
      data.length > 1 &&
      !continuousScroll &&
      scrollValues.scrollWidth > scrollValues.clientWidth &&
      !(
        scrollValues.scrollLeft + scrollValues.clientWidth >=
        scrollValues.scrollWidth
      )
    );
  }, [data.length, continuousScroll, scrollValues]);

  // ...existing code...
  const getItemScrollAmount = () => {
    const container = scrollableRef.current;
    if (!container) return 0;

    // Si todos los ítems tienen el mismo ancho, opción rápida:
    // return container.scrollWidth / data.length;

    // Para mayor precisión (ítems uniformes pero con gap):
    const first = container.firstElementChild as HTMLElement | null;
    if (!first) return container.clientWidth;

    const itemWidth = first.getBoundingClientRect().width;
    // Obtener gap real aplicado (columnGap en grid-flow-col)
    const styles = getComputedStyle(container);
    const gapX = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    return itemWidth + gapX;
  };

  const goNext = () => {
    const container = scrollableRef.current;
    if (!container) return;

    const scrollAmount = getItemScrollAmount();

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const goPrev = () => {
    const container = scrollableRef.current;
    if (!container) return;

    const scrollAmount = getItemScrollAmount();

    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };
  // ...existing code...

  return (
    <div
      {...containerProps}
      className={`w-full overflow-hidden relative flex justify-center align-middle ${
        className ?? ""
      }`}
    >
      <div
        ref={scrollableRef}
        {...contenContainerProps}
        className={`overflow-x-auto grid grid-flow-col auto-cols-max scrollbar-hide ${contentContainerClassName}`}
        style={{
          gap,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE y Edge antiguo
          pointerEvents:
            continuousScroll && !showRightButton && !showLeftButton
              ? "auto"
              : "none",
        }}
      >
        {data.map(renderItem)}
      </div>

      {showLeftButton && (
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={90} color="#22AF52" />
        </button>
      )}

      {/* Botón Siguiente - Hidden in continuous scroll mode */}
      {showRightButton && (
        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={90} color="#22AF52" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
