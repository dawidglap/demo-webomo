"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle } from "lucide-react";
import CalBtn from "../CalBtn";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="relative mb-10 mt-20 flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-24">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="text-center"
      >
        <h2 className="text-xs font-semibold uppercase tracking-wide text-indigo-500 md:text-sm">
          {t("headline")}
        </h2>
        <h1 className="mt-2 bg-gradient-to-r from-[#410cd9] to-[#f68efe] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          {t("bookCall.title")} {t("bookCall.title2")}
        </h1>
        <p className="mt-2 px-2 text-sm text-gray-700 dark:text-gray-300 sm:text-lg">
          {t("bookCall.subtitle")}
        </p>
      </motion.div>

      {/* Booking Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        className="mt-8 w-full max-w-xs rounded-2xl border border-gray-200 bg-white bg-opacity-90 p-6 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-slate-900 dark:bg-opacity-80 sm:max-w-sm md:max-w-md md:p-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 dark:bg-indigo-400/10">
            <CalendarCheck className="text-2xl text-indigo-500 dark:text-indigo-300" />
          </div>
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-300 sm:text-sm">
            100% {t("title")}
          </p>
          <h3 className="mt-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {t("bookCall.title2")}
          </h3>

          {/* Features */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            <li className="flex items-center gap-2">
              <CheckCircle
                className="text-purple-500 dark:text-purple-400"
                size={16}
              />
              Branding-Experten Gespräch
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle
                className="text-purple-500 dark:text-purple-400"
                size={16}
              />
              Bedürfnisanalyse & Strategie
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle
                className="text-purple-500 dark:text-purple-400"
                size={16}
              />
              Unverbindlich & kostenlos
            </li>
          </ul>

          {/* CTA Button */}
          <motion.div
            className="mt-5 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CalBtn />
          </motion.div>
        </div>
      </motion.div>

      {/* Thank You Message */}
      <p className="mt-4 max-w-xl px-2 text-center text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
        {t("bookCall.thankYou")}
      </p>
    </section>
  );
};

export default Contact;
