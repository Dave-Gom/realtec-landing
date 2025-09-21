import { Property } from "csstype";
import { HTMLAttributes, useRef } from "react";

type CarouselProps<T extends object> = {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  continuousScroll?: boolean;
  fullViewItem?: boolean;
  itemsPerView?: number;
  gap?: Property.Gap;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  showContentIndicators?: boolean;
};

const Carousel = <T extends object>({
  data,
  renderItem,
  autoPlay,
  autoPlayInterval,
  continuousScroll,
  fullViewItem,
  itemsPerView,
  gap,
  className,
  containerProps,
  showContentIndicators,
}: CarouselProps<T>) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full overflow-hidden relative bg-red-500 flex justify-center align-middle">
      <div
        ref={scrollableRef}
        className="overflow-x-auto grid grid-flow-col auto-cols-max scrollbar-hide"
        style={{
          gap,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE y Edge antiguo
        }}
      >
        {data.map(renderItem)}
      </div>
    </div>
  );
};

export default Carousel;
