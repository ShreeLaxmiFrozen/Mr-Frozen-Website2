import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroller({
  children,
  className = "",
  itemClassName = "",
  gap = "gap-8",
}) {
  const containerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const didDrag = useRef(false);
  const dragDistance = useRef(0);

  const updateButtons = useCallback(() => {
    const el = containerRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 5);

    setCanScrollRight(
      el.scrollLeft <
        el.scrollWidth - el.clientWidth - 5
    );
  }, []);
    useLayoutEffect(() => {
    updateButtons();

    const el = containerRef.current;

    if (!el) return;

    el.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener(
        "resize",
        updateButtons
      );
    };
  }, [updateButtons]);
    const scroll = (direction) => {
    const el = containerRef.current;

    if (!el) return;

    const amount = Math.min(
      el.clientWidth * 0.85,
      450
    );

    el.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };
    const handleWheel = (e) => {
    const el = containerRef.current;

    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();

      el.scrollBy({
        left: e.deltaY,
      });
    }
  };
    const handleMouseDown = (e) => {
        const el = containerRef.current;

        if (!el) return;

        didDrag.current = false;
        dragDistance.current = 0;

        isDragging.current = true;

        startX.current = e.pageX;

        scrollLeft.current = el.scrollLeft;

        document.body.style.cursor = "grabbing";

        el.classList.add("cursor-grabbing");
    };
    const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    document.body.style.cursor = "grabbing";

    const el = containerRef.current;

    if (!el) return;

    const walk = (e.pageX - startX.current);
    
    dragDistance.current = Math.abs(walk);

    if (dragDistance.current > 6) {
        didDrag.current = true;
    }

    el.scrollLeft = scrollLeft.current - walk;
  };
    const stopDragging = () => {
    isDragging.current = false;
    document.body.style.cursor = "";

    containerRef.current?.classList.remove(
      "cursor-grabbing"
    );
  };
    const handleClickCapture = (e) => {
        if (!didDrag.current) return;

        e.preventDefault();
        e.stopPropagation();

        didDrag.current = false;
    };

    const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      scroll(1);
    }

    if (e.key === "ArrowLeft") {
      scroll(-1);
    }
  };

  useEffect(() => {
  const el = containerRef.current;

  if (!el) return;

  const preventImageDrag = (e) => e.preventDefault();

  const imgs = el.querySelectorAll("img");

  imgs.forEach((img) =>
    img.addEventListener("dragstart", preventImageDrag)
  );

  return () => {
    imgs.forEach((img) =>
      img.removeEventListener("dragstart", preventImageDrag)
    );
  };
}, [children]);

    return (
  <div className={`relative ${className}`}>
    {canScrollLeft && (
      <button
        type="button"
        aria-label="Scroll Left"
        onClick={() => scroll(-1)}
        className="
          absolute
          left-2
          top-1/2
          -translate-y-1/2
          z-20
          rounded-full
          bg-white/95
          backdrop-blur
          shadow-lg
          p-2
          transition
          duration-300
          hover:scale-105
          hover:shadow-xl
        "
      >
        <ChevronLeft size={22} />
      </button>
    )}

    <div
      onClickCapture={handleClickCapture}
      ref={containerRef}
      tabIndex={0}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      className={`
        flex
        items-stretch
        ${gap}
        overflow-x-auto
        scroll-smooth
        snap-x
        snap-mandatory
        cursor-grab
        select-none
        touch-pan-x
        no-scrollbar
        pb-4
        pl-2 pr-0
        ${itemClassName}
      `}
    >
      {children}
    </div>

    {canScrollRight && (
      <button
        type="button"
        aria-label="Scroll Right"
        onClick={() => scroll(1)}
        className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          z-20
          rounded-full
          bg-white/90
          backdrop-blur
          shadow-lg
          p-2
          transition
          duration-300
          hover:scale-105
          hover:shadow-xl
        "
      >
        <ChevronRight size={22} />
      </button>
    )}
  </div>
);
}