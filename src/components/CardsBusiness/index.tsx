"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="relative flex h-[320px] w-full flex-col justify-end overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hiver/magnet-light.webp"
              alt="Card Background"
              className="h-full w-full object-cover dark:hidden"
            />
            <img
              src="/images/hiver/magnet-dark.webp"
              alt="Card Background Dark"
              className="hidden h-full w-full object-cover dark:block"
            />
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 text-center">
            <h3 className="text-lg font-bold text-black dark:text-white">
              {t("card1.title")}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {t("card1.description")}
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="relative flex h-[320px] w-full flex-col justify-end overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hiver/bg-2.webp"
              alt="Card Background"
              className="h-full w-full object-cover dark:hidden"
            />
            <img
              src="/images/hiver/bg-2-dark.webp"
              alt="Card Background Dark"
              className="hidden h-full w-full object-cover dark:block"
            />

            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 my-auto p-6 text-center">
            <h3 className="text-lg font-bold text-black dark:text-white">
              {t("card2.title")}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {t("card2.description")}
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="relative flex h-[320px] w-full flex-col justify-end overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hiver/bg-3.webp"
              alt="Card Background"
              className="h-full w-full object-cover dark:hidden"
            />
            <img
              src="/images/hiver/bg-3-dark.webp"
              alt="Card Background Dark"
              className="hidden h-full w-full object-cover dark:block"
            />
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 my-auto p-6 text-center">
            <h3 className="text-lg font-bold text-black dark:text-white">
              {t("card3.title")}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {t("card3.description")}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardsBusiness;
