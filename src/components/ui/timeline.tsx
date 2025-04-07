"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const t = useTranslations("Timeline"); // Use translations for "Timeline"

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 30%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="font-sans w-full md:px-10" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-8 lg:px-10">
        <h2 className="mb-4 md:mt-10 max-w-4xl bg-gradient-to-r from-[#410cd9] to-[#f68efe] bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto max-w-sm text-center text-sm text-neutral-700 dark:text-neutral-300 md:text-xl">
          {t("subtitle")}
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20 lg:pb-36">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-6 md:pt-20"
          >
            {/* STEP NUMBER - Reduced width */}
            <div className="sticky top-40 z-40 flex w-16 flex-col items-center self-start md:w-24">
              <div className="absolute left-1 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-1">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-indigo-700 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="ms-12 hidden text-xl font-extrabold text-black dark:text-neutral-500 md:block md:text-4xl">
                {item.title}
              </h3>
            </div>

            {/* TEXT CONTENT - More Space */}
            <div className="relative flex-1 pl-6 md:pl-10">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-6 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] rounded-full bg-gradient-to-t from-indigo-500 from-[0%] to-purple-500 to-[10%] "
          />
        </div>
      </div>
    </div>
  );
};
