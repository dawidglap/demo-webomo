"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [leftStat, setLeftStat] = useState(0);
  const [rightStat, setRightStat] = useState(0);

  useEffect(() => {
    if (inView) {
      leftControls.start({ opacity: 1, x: 0 });
      rightControls.start({ opacity: 1, x: 0 });

      const delayTimeout = setTimeout(() => {
        const leftInterval = setInterval(() => {
          setLeftStat((prev) => (prev < 37 ? prev + 1 : 37));
        }, 46);

        const rightInterval = setInterval(() => {
          setRightStat((prev) => (prev < 57 ? prev + 1 : 57));
        }, 30);

        return () => {
          clearInterval(leftInterval);
          clearInterval(rightInterval);
        };
      }, 750);

      return () => clearTimeout(delayTimeout);
    }
  }, [inView, leftControls, rightControls]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center overflow-hidden bg-[#F8FAFB] px-4 pb-20 pt-20 dark:bg-[#15182A]"
    >
      {/* Main Title with Animation */}
      <motion.h2
        className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Werbung für dein Unternehmen
      </motion.h2>

      {/* Subtitle with Animation */}
      <motion.p
        className="mt-4 max-w-md text-center text-[#79808a] dark:text-[#79808a]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Erreiche mehr potenzielle Kunden und stärke deinen Wiedererkennungswert
        deiner Marke mit hochwertigen Marketing- Bild- und Videomaterialien.
      </motion.p>

      {/* Stats Container */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
        {/* Stat Card 1 - Appears from the left */}
        <motion.div
          className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-indigo-100 p-4 shadow-lg dark:bg-[#33334D] md:h-60 md:w-60"
          initial={{ opacity: 0, x: -100 }}
          animate={leftControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 text-4xl font-bold text-indigo-600 dark:text-indigo-400 md:text-5xl">
            {leftStat}%
          </span>
          <p className="text-gray-700 min-h-[3rem] text-center dark:text-white md:text-lg">
            höhere Sichtbarkeit
          </p>
        </motion.div>

        {/* Stat Card 2 - Appears from the right */}
        <motion.div
          className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-indigo-100 p-4 shadow-lg dark:bg-[#33334D] md:h-60 md:w-60"
          initial={{ opacity: 0, x: 100 }}
          animate={rightControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 text-4xl font-bold text-indigo-600 dark:text-indigo-400 md:text-5xl">
            {rightStat}%
          </span>
          <p className="text-gray-700 min-h-[3rem] text-center dark:text-white md:text-lg">
            geringere Marketingkosten
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;