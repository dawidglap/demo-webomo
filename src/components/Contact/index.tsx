"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CalBtnContact from "../CalBtnContact";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="relative mb-10 mt-20 flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-24">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="max-w-3xl text-center"
      >
        <h2 className=" text-sm font-semibold uppercase tracking-wide text-[#f68efe] md:text-base">
          {t("headline")}
        </h2>
        <h1 className="mt-4 bg-gradient-to-r from-[#410cd9] to-[#f68efe] bg-clip-text pb-3 text-3xl font-extrabold leading-tight text-transparent sm:text-4xl md:text-5xl">
          {t("bookCall.title")} {t("bookCall.title2")}
        </h1>
        <p className="mt-4 px-4 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
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
        className="mt-12 w-full max-w-xs rounded-3xl border border-gray-200 bg-white bg-opacity-90 p-6 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-slate-900 dark:bg-opacity-80 sm:max-w-sm md:max-w-sm md:px-10 md:py-10"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Simple label */}
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
            100% {t("title")}
          </p>

          {/* Main Title */}
          <h3 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
            {t("bookCall.title2")}
          </h3>

          {/* Divider line */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Features */}
          <ul className="mx-auto w-full max-w-xs space-y-3 text-left text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            <li className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className="mt-0.5 text-purple-500 dark:text-purple-400"
              />
              Sprich mit einem Branding-Experten
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className="mt-0.5 text-purple-500 dark:text-purple-400"
              />
              Bedürfnisanalyse
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className="mt-0.5 text-purple-500 dark:text-purple-400"
              />
              Erhalte eine individuelle Strategie
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className="mt-0.5 text-purple-500 dark:text-purple-400"
              />
              Unverbindlich für dich
            </li>
          </ul>

          {/* CTA Button */}
          <motion.div
            className="mt-6 w-full"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <CalBtnContact />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
