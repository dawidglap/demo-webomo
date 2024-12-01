"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Mission");

  return (
    <section className="bg-gradient-to-tr px-6 pt-20 text-center md:pt-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

export default Mission;
