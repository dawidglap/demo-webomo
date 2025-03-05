"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaEye, FaUsers, FaDollarSign } from "react-icons/fa"; // Icone pertinenti

const Hiver3 = () => {
  const t = useTranslations("Hiver3");

  return (
    <section className="flex flex-col items-center overflow-hidden bg-[#F8FAFB] px-4 pb-10 pt-10 dark:bg-[#15182A] md:pb-20 md:pt-20">
      <motion.h2
        className="max-w-5xl text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>
      <motion.p
        className="mb-4 mt-8 max-w-5xl text-center text-lg text-gray-700 dark:text-gray-300 md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("description")}
      </motion.p>

      <div className="mt-8 flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-12">
        {/* Card 1 - Brand Awareness */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white to-indigo-100 p-6 text-white shadow-lg dark:from-indigo-600   dark:to-indigo-500 md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaEye className="mb-4 text-5xl text-indigo-500 dark:text-slate-300" />
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("hiver.leftTitle")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600  dark:text-gray-300">
            {t("hiver.left")}
          </p>
        </motion.div>

        {/* Card 2 - Attracting the Right Audience */}
        <motion.div
          className="from-indigo-00 flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-indigo-100 to-purple-100 p-6 text-white shadow-lg dark:from-indigo-500 dark:to-purple-400 md:w-80  md:bg-gradient-to-r"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaUsers className="mb-4 text-5xl text-indigo-400 dark:text-slate-300" />
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("hiver.centerTitle")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600  dark:text-gray-300">
            {t("hiver.center")}
          </p>
        </motion.div>

        {/* Card 3 - Higher Prices */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-purple-100 to-pink-100 p-6 text-white shadow-lg dark:from-purple-400 dark:to-purple-500 md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaDollarSign className="mb-4 text-5xl text-indigo-400 dark:text-slate-300" />
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("hiver.rightTitle")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600  dark:text-gray-300">
            {t("hiver.right")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hiver3;
