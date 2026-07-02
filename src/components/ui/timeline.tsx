"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Recompute on any layout change (breakpoint switch, font swap,
    // content reflow) instead of once on mount — a stale/zero height
    // here is what made the animated spine invisible on mobile.
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-10"
          >
            {/* Sticky left: dot + title */}
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#e7e9e3] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#bddbd1] border-2 border-[#2f3e3c]" />
              </div>
              {/* Year / label */}
              <h3 className="hidden md:block font-display text-3xl md:text-4xl md:pl-20 font-medium text-[#2f3e3c]">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block font-display text-xl mb-2 text-left font-medium text-[#2f3e3c]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Scroll-fill spine */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] md:w-[2px] bg-gradient-to-b from-transparent from-[0%] via-[#2f3e3c]/25 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#bddbd1] via-[#2f3e3c] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
