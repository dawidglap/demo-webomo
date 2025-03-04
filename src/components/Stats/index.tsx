"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Stats = () => {
  const t = useTranslations("Stats"); // Translation hook
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const leftControls = useAnimation();
  const centerControls = useAnimation();
  const rightControls = useAnimation();
  const [leftStat, setLeftStat] = useState(0);
  const [centerStat, setCenterStat] = useState(0);
  const [rightStat, setRightStat] = useState(0);

  useEffect(() => {
    if (inView) {
      leftControls.start({ opacity: 1, x: 0 });
      centerControls.start({ opacity: 1, y: 0 });
      rightControls.start({ opacity: 1, x: 0 });

      const delayTimeout = setTimeout(() => {
        const leftInterval = setInterval(() => {
          setLeftStat((prev) => (prev < 37 ? prev + 1 : 37));
        }, 46);

        const centerInterval = setInterval(() => {
          setCenterStat((prev) => (prev < 75 ? prev + 1 : 75));
        }, 20);

        const rightInterval = setInterval(() => {
          setRightStat((prev) => (prev < 57 ? prev + 1 : 57));
        }, 30);

        return () => {
          clearInterval(leftInterval);
          clearInterval(centerInterval);
          clearInterval(rightInterval);
        };
      }, 750);

      return () => clearTimeout(delayTimeout);
    }
  }, [inView, leftControls, centerControls, rightControls]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center overflow-hidden bg-[#F8FAFB] px-4 pb-20 pt-20 dark:bg-[#15182A]"
    >
      <motion.h2
        className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>

      <motion.p
        className="container mt-4 max-w-[690px] text-center text-[#79808a] dark:text-[#79808a]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("description")}
      </motion.p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 md:flex-nowrap md:gap-8">
        <motion.div
          className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 p-4  text-white shadow-lg  dark:bg-[#33334D] md:h-60 md:w-60"
          initial={{ opacity: 0, x: -100 }}
          animate={leftControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 text-4xl font-bold text-white dark:text-black md:text-5xl">
            {leftStat}%
          </span>
          <p className="min-h-[3rem] text-center text-white dark:text-black md:text-lg">
            {t("stats.left")}
          </p>
        </motion.div>

        <motion.div
          className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 p-4  text-white shadow-lg  dark:bg-[#33334D] md:h-60 md:w-60"
          initial={{ opacity: 0, y: 50 }}
          animate={centerControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 text-4xl font-bold text-white dark:text-black md:text-5xl">
            {centerStat}%
          </span>
          <p className="min-h-[3rem] text-center text-white dark:text-black md:text-lg">
            {t("stats.center")}
          </p>
        </motion.div>

        <motion.div
          className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 p-4  text-white shadow-lg  dark:bg-[#33334D] md:h-60 md:w-60"
          initial={{ opacity: 0, x: 100 }}
          animate={rightControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 text-4xl font-bold text-white dark:text-black md:text-5xl">
            {rightStat}%
          </span>
          <p className="min-h-[3rem] text-center text-white dark:text-black md:text-lg">
            {t("stats.right")}
          </p>
        </motion.div>
      </div>

      <Link
        href="/kontakt"
        className=" mt-10 inline-block rounded-full bg-black px-8 py-[10px] text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:text-xl"
      >
        {t("cta")}
      </Link>
    </section>
  );
};

export default Stats;
