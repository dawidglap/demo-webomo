"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaCamera,
} from "react-icons/fa";

const Hiver6 = () => {
  const t = useTranslations("Hiver6");

  return (
    <section className="flex flex-col items-center overflow-hidden bg-[#F8FAFB] px-4 pb-10 pt-10 dark:bg-[#15182A] md:pb-20 md:pt-20">
      <motion.h2
        className="max-w-5xl bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl"
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

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 - Kunden gewinnen */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6  shadow-lg dark:bg-black  md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaHandshake className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("leftTitle1")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("left1")}
          </p>
        </motion.div>

        {/* Card 2 - Mehr Sichtbarkeit */}
        <motion.div
          className="-100 shadow-400 flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-black md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaChartLine className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("leftTitle2")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("left2")}
          </p>
        </motion.div>

        {/* Card 3 - Mitarbeiter finden */}
        <motion.div
          className="-100 flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-black md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaUsers className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("centerTitle1")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("center1")}
          </p>
        </motion.div>

        {/* Card 4 - Vertrauen stärken */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-black  md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaShieldAlt className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("centerTitle2")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("center2")}
          </p>
        </motion.div>

        {/* Card 5 - Markenbekanntheit */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-black md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaBullhorn className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("rightTitle1")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("right1")}
          </p>
        </motion.div>

        {/* Card 6 - Foto- & Videocontent */}
        <motion.div
          className="flex h-72 w-72 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg dark:bg-black md:w-80 md:bg-gradient-to-r"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 shadow-md dark:bg-slate-300">
            <FaCamera className="text-3xl text-white dark:text-indigo-600" />
          </div>
          <h3 className="text-center text-xl font-semibold text-black dark:text-white">
            {t("rightTitle2")}
          </h3>
          <p className="text-md pt-2 text-center text-gray-600 dark:text-gray-300">
            {t("right2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hiver6;
