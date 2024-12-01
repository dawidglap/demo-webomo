"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CtaBusiness = () => {
  const t = useTranslations("CtaBusiness");

  return (
    <motion.section
      className="me-10 ms-10 flex h-[300px] items-center justify-center rounded-[30px] bg-gradient-to-r from-indigo-100 via-purple-50  to-cyan-100   dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center">
        {/* Headline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
            <span className="text-indigo-700 dark:text-indigo-300">
              {t("headlineHighlight")}
              <br />
            </span>{" "}
            {t("headline")}
          </h2>
        </div>

        {/* Button */}
        <Link
          href="#"
          className="inline-block rounded-full bg-black px-8 py-[12px] text-base font-medium text-white transition hover:bg-opacity-80 dark:bg-white dark:text-black dark:hover:bg-indigo-300 md:text-xl"
        >
          {t("buttonText")}
        </Link>
      </div>
    </motion.section>
  );
};

export default CtaBusiness;
