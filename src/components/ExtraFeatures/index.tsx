"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const ExtraFeatures = () => {
  const t = useTranslations("ExtraFeatures");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  const [thirdStat, setThirdStat] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });

      const delayTimeout = setTimeout(() => {
        const firstInterval = setInterval(() => {
          setFirstStat((prev) => (prev < 25 ? prev + 1 : 25));
        }, 50);

        const secondInterval = setInterval(() => {
          setSecondStat((prev) => (prev < 900 ? prev + 20 : 900));
        }, 20);

        const thirdInterval = setInterval(() => {
          setThirdStat((prev) => (prev < 75 ? prev + 1 : 75));
        }, 30);

        return () => {
          clearInterval(firstInterval);
          clearInterval(secondInterval);
          clearInterval(thirdInterval);
        };
      }, 750);

      return () => clearTimeout(delayTimeout);
    }
  }, [inView, controls]);

  return (
    <>
      {/* Features Section */}
      <motion.section
        ref={ref}
        className="bg-base-100 dark:bg-base-300 nord:bg-nord-700 py-12 sm:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          {/* Counter Section */}
          <motion.section
            className="bg-base-100 dark:bg-base-300 nord:bg-nord-700 py-12 sm:py-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto text-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
                {/* Stat 1 */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-neutral text-7xl font-extrabold dark:text-neutral-100">
                    {firstStat}+
                  </span>
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                    {t("stat1")}
                  </p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-neutral text-7xl font-extrabold dark:text-neutral-100">
                    {secondStat}+
                  </span>
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                    {t("stat2")}
                  </p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-neutral text-7xl font-extrabold dark:text-neutral-100">
                    {thirdStat}%
                  </span>
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                    {t("stat3")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          {/* Title */}
          <motion.h2
            className="nord:text-nord-content mx-auto mt-10 max-w-md pb-10 text-2xl font-bold dark:text-neutral-100 sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h2>
          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="h-20 w-20">
                <Image
                  src="/images/extra/graph.png"
                  alt={t("feature1")}
                  width={80}
                  height={80}
                  className="dark:invert"
                />
              </div>
              <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                {t("feature1")}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="h-20 w-20">
                <Image
                  src="/images/extra/docs.png"
                  alt={t("feature2")}
                  width={80}
                  height={80}
                  className="dark:invert"
                />
              </div>
              <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                {t("feature2")}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="h-20 w-20">
                <Image
                  src="/images/extra/audio.png"
                  alt={t("feature3")}
                  width={80}
                  height={80}
                  className="dark:invert"
                />
              </div>
              <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-light text-primary">
                {t("feature3")}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ExtraFeatures;
