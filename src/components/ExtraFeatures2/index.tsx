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
          setFirstStat((prev) => (prev < 125 ? prev + 1 : 125));
        }, 10);

        const secondInterval = setInterval(() => {
          setSecondStat((prev) => (prev < 1900 ? prev + 20 : 1900));
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
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-extrabold text-primary">
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
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-extrabold text-primary">
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
                  <p className="dark:text-primary-content nord:text-nord-content mt-4 text-lg font-extrabold text-primary">
                    {t("stat3")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </>
  );
};

export default ExtraFeatures;
