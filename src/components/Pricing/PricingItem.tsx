"use client";

import React from "react";
import { useTranslations } from "next-intl";

export const PricingItem = ({ price }: any) => {
  const t = useTranslations("Pricing");

  // Define background color based on plan type
  let bgColor = "bg-gray-100 dark:bg-gray-800"; // Default color
  if (price.nickname === "Basic") {
    bgColor = "bg-indigo-100 dark:bg-gray-800";
  } else if (price.nickname === "Unlimited") {
    bgColor = "bg-purple-100 dark:bg-slate-900";
  } else if (price.nickname === "Business") {
    bgColor = "bg-green-100 dark:bg-[#000]";
  }

  // Hardcoded features for each plan
  const getFeatures = (nickname: string) => {
    switch (nickname) {
      case "Basic":
        return (
          <>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">1.</span>{" "}
              {t("plans.Basic.features.0")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">2.</span>{" "}
              {t("plans.Basic.features.1")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">3.</span>{" "}
              {t("plans.Basic.features.2")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">4.</span>{" "}
              {t("plans.Basic.features.3")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">5.</span>{" "}
              {t("plans.Basic.features.4")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">6.</span>{" "}
              {t("plans.Basic.features.5")}
            </p>
          </>
        );
      case "Unlimited":
        return (
          <>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">1.</span>{" "}
              {t("plans.Unlimited.features.0")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">2.</span>{" "}
              {t("plans.Unlimited.features.1")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">3.</span>{" "}
              {t("plans.Unlimited.features.2")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">4.</span>{" "}
              {t("plans.Unlimited.features.3")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">5.</span>{" "}
              {t("plans.Unlimited.features.4")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">6.</span>{" "}
              {t("plans.Unlimited.features.5")}
            </p>
          </>
        );
      case "Business":
        return (
          <>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">1.</span>{" "}
              {t("plans.Business.features.0")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">2.</span>{" "}
              {t("plans.Business.features.1")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">3.</span>{" "}
              {t("plans.Business.features.2")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">4.</span>{" "}
              {t("plans.Business.features.3")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">5.</span>{" "}
              {t("plans.Business.features.4")}
            </p>
            <p className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">6.</span>{" "}
              {t("plans.Business.features.5")}
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-6 pb-8 md:w-1/2 lg:w-1/3">
      <div
        className={`relative mb-10 rounded-xl px-9 py-10 shadow-2xl md:shadow-xl ${bgColor} flex h-full flex-col justify-between lg:mb-4 lg:px-7 xl:px-9`}
      >
        {/* Badge for Recommended Plan */}
        {price.nickname === "Unlimited" && (
          <span className="absolute right-5 top-5 rounded-full bg-black px-4 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
            {t("recommended")}
          </span>
        )}

        {/* Plan Title and Price */}
        <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
          {t(`plans.${price.nickname}.name`)}
        </h3>
        <p className="mb-2 text-4xl font-bold text-black dark:text-white">
          {t(`plans.${price.nickname}.price`)}.-{" "}
          <span className="text-lg">/ {t("month")}</span>
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {t("duration")}
        </p>

        {/* Features List */}
        <div className="space-y-4 pb-10 pt-6">
          {getFeatures(price.nickname)}
        </div>

        {/* Button */}
        <button
          aria-label={`Choose ${price.nickname}`}
          className="mt-4 block w-full rounded-2xl bg-black px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          {t("choosePlan")}
        </button>

        {/* Footer Text */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {t("footerText")}
        </p>
      </div>
    </div>
  );
};
