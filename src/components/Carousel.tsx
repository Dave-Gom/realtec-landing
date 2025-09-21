import { Property } from "csstype";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";

type CarouselProps<T extends object> = {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  continuousScroll?: boolean;
  fullViewItem?: boolean;
  gap?: Property.Gap;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  showContentIndicators?: boolean;
};

const Carousel = <T extends object>({
  data,
  renderItem,
  continuousScroll,
  gap,
}: CarouselProps<T>) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const [scrollValues, setScrollValues] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  });

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
  }, []);

  const showLeftButton = useMemo(() => {
    return data.length > 1 && !continuousScroll && scrollValues.scrollLeft > 0;
  }, [data.length, continuousScroll, scrollValues]);

  const showRightButton = useMemo(() => {
    return (
      data.length > 1 &&
      !continuousScroll &&
      scrollValues.scrollWidth > scrollValues.clientWidth &&
      !(
        scrollValues.scrollLeft + scrollValues.clientWidth >=
        scrollValues.scrollWidth
      )
    );
  }, [data.length, continuousScroll, scrollValues]);

  const goNext = () => {
    if (scrollableRef.current) {
      const scrollAmount = scrollableRef.current.clientWidth;
      scrollableRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const goPrev = () => {
    if (scrollableRef.current) {
      const scrollAmount = scrollableRef.current.clientWidth;
      scrollableRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`w-full overflow-hidden relative flex justify-center align-middle`}
    >
      <div
        ref={scrollableRef}
        className="overflow-x-auto grid grid-flow-col auto-cols-max scrollbar-hide"
        style={{
          gap,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE y Edge antiguo
          pointerEvents: continuousScroll ? "auto" : "none",
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
