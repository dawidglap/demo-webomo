"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Megaphone, TrendingUp, TreePalm } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconWrapper =
  "flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 shadow-lg bg-gradient-to-br from-indigo-200 to-indigo-400 dark:from-gray-800 dark:to-gray-700";

const CardsBusiness = () => {
  const t = useTranslations("CardsBusiness");

  return (
    <div className="container mx-auto py-12 md:px-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="mb-10 pb-16 text-center"
      >
        <div className="">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            <span className="text-indigo-700 dark:text-indigo-300">
              {t("headlineHighlight")}
              <br />
            </span>{" "}
            {t("headline")}
          </h2>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="relative flex flex-col items-center rounded-2xl border border-gray-300 p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
        >
          {/* Icon */}
          <div className={iconWrapper}>
            <Megaphone className="h-8 w-8 text-black dark:text-white" />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-center text-lg font-bold text-black dark:text-white">
            {t("card1.title")}
          </h3>

          {/* Description */}
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card1.description")}
          </p>

          {/* Decorative Border Effect */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-300 to-indigo-500 opacity-10 blur-lg dark:from-gray-700 dark:to-gray-900"></div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="relative flex flex-col items-center rounded-2xl border border-gray-300 p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
        >
          {/* Icon */}
          <div className={iconWrapper}>
            <TrendingUp className="h-8 w-8 text-black dark:text-white" />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-center text-lg font-bold text-black dark:text-white">
            {t("card2.title")}
          </h3>

          {/* Description */}
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card2.description")}
          </p>

          {/* Decorative Border Effect */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-300 to-indigo-500 opacity-10 blur-lg dark:from-gray-700 dark:to-gray-900"></div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="relative flex flex-col items-center rounded-2xl border border-gray-300 p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
        >
          {/* Icon */}
          <div className={iconWrapper}>
            <TreePalm className="h-8 w-8 text-black dark:text-white" />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
            {t("card3.title")}
          </h3>

          {/* Description */}
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card3.description")}
          </p>

          {/* Decorative Border Effect */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-300 to-indigo-500 opacity-10 blur-lg dark:from-gray-700 dark:to-gray-900"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardsBusiness;
