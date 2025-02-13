"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import standOut from "../../../public/images/business/growth1.webp";
import salary from "../../../public/images/business/investment.webp";
import freedom from "../../../public/images/business/freedom2.webp";

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
        {/* <span className="text-sm font-semibold uppercase text-indigo-500">
          {t("highlight")}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-black dark:text-white md:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-300 md:text-xl">
          {t("subtitle")}
        </p> */}
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
          className=" flex flex-col items-center rounded-2xl bg-indigo-50 p-6 shadow-lg dark:bg-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-52 w-full">
            <Image
              src={standOut}
              alt={t("card1.alt")}
              layout="fill"
              className="rounded-lg bg-indigo-100 object-cover p-0 shadow-lg dark:bg-slate-950"
            />
          </div>
          <h3 className="mt-6 text-center text-lg font-bold text-black dark:text-white">
            {t("card1.title")}
          </h3>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card1.description")}
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center rounded-2xl bg-indigo-50 p-6 shadow-lg dark:bg-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-52 w-full">
            <Image
              src={salary}
              alt={t("card2.alt")}
              layout="fill"
              className="rounded-lg bg-indigo-100 object-cover p-0 shadow-lg dark:bg-slate-950"
            />
          </div>
          <h3 className="mt-6 text-center text-lg font-bold text-black dark:text-white">
            {t("card2.title")}
          </h3>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card2.description")}
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center rounded-2xl bg-indigo-50 p-6 shadow-lg dark:bg-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-52 w-full">
            <Image
              src={freedom}
              alt={t("card3.alt")}
              layout="fill"
              className="rounded-lg bg-indigo-100 object-cover p-0 shadow-lg dark:bg-slate-950"
            />
          </div>
          <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
            {t("card3.title")}
          </h3>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300">
            {t("card3.description")}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardsBusiness;
