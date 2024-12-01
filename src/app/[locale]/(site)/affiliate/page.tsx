"use client";

import React from "react";
import { useTranslations } from "next-intl";

const WebomoBusinessOnboarding = () => {
  const t = useTranslations("WebomoBusinessOnboarding");

  return (
    <section className="flex h-screen bg-gradient-to-r from-slate-900 from-50% to-white to-50% px-4 dark:bg-gray-900 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-wrap items-center lg:flex-nowrap lg:gap-16">
        {/* Left Section */}
        <div className="flex h-screen flex-col justify-center bg-gradient-to-r from-slate-900 to-slate-600 lg:w-1/2">
          {/* Logo */}
          <div className="mb-8 text-center lg:text-left">
            <span className="ms:0 relative text-4xl font-bold tracking-wider text-white transition-all duration-300 md:ms-10 md:text-[48px]">
              Webomo
            </span>
          </div>

          {/* Card */}
          <div className="m-0 rounded-xl bg-cyan-100 p-8 shadow-lg dark:bg-gray-800 md:m-10">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {t("affiliatePackageTitle")}
            </h3>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              {t("affiliatePackageDescription")}
            </p>

            {/* Features List */}
            <ul className="mb-6 space-y-4">
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                {t("features.0")}
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                {t("features.1")}
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                {t("features.2")}
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                {t("features.3")}
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                {t("features.4")}
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          {/* Thank You Message */}
          <div className="p-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {t("thankYouTitle")}
            </h3>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              {t("thankYouDescription")}
            </p>

            {/* CTA Button */}
            <button
              aria-label={t("startNowAriaLabel")}
              className="block w-full rounded-xl bg-black px-6 py-3 text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t("startNowButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebomoBusinessOnboarding;
