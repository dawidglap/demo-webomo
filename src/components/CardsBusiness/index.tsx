"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CardsBusiness = () => {
  const t = useTranslations("CardsBusiness");

  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-100px 0px", // entra prima
    amount: 0.3, // 30% visibile
    once: false, // visibile sia andata che ritorno
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
      }}
      className="container mx-auto py-12 md:px-12"
    >
      {/* Section Title */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="mb-10 pb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
          <span className="text-indigo-700 dark:text-indigo-300">
            {t("headlineHighlight")}
            <br />
          </span>
          {t("headline")}
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#3F2D7F] p-6 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:bg-[#3F2D7F]"
        >
          <Image
            src="/images/icons/money.webp"
            alt="Icon"
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-white font-light dark:text-white">
            <h3 className="text-lg font-bold">{t("card1.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card1.description")}</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#D4C4F4] p-6 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:bg-[#D4C4F4]"
        >
          <Image
            src="/images/icons/moremoney.webp"
            alt="Icon"
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-white font-light dark:text-white">
            <h3 className="text-lg font-bold">{t("card2.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card2.description")}</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#EECAC1] p-6 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:bg-[#EECAC1]"
        >
          <Image
            src="/images/icons/palm.webp"
            alt="Icon"
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-white font-light dark:text-white">
            <h3 className="text-lg font-bold">{t("card3.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card3.description")}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardsBusiness;
