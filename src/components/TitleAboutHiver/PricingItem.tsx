"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CalBtnBasic from "../CalBtnBasic";
import CalBtnBusiness from "../CalBtnBusiness";
import CalBtnEnterprise from "../CalBtnEnterprise";

export const PricingItem = ({ price, stripeLink }: any) => {
  const t = useTranslations("Pricing");

  // Define background color based on plan type
  let bgColor = "bg-gray-100 dark:bg-gray-800"; // Default color
  if (price.nickname === "Basic") {
    bgColor = "bg-indigo-100 dark:bg-gray-800";
  } else if (price.nickname === "Unlimited") {
    bgColor = "bg-purple-100 dark:bg-slate-900";
  } else if (price.nickname === "Business") {
    bgColor = "bg-green-100 dark:bg-[#000]";
  } else if (price.nickname === "Enterprise") {
    bgColor = "bg-gray-100 dark:bg-gray-800";
  }

  // Hardcoded features for each plan
  const getFeatures = (nickname: string) => {
    const features = {
      Basic: [
        t("plans.Basic.features.0"),
        t("plans.Basic.features.1"),
        t("plans.Basic.features.2"),
        t("plans.Basic.features.3"),
      ],
      Unlimited: [
        t("plans.Unlimited.features.0"),
        t("plans.Unlimited.features.1"),
        t("plans.Unlimited.features.2"),
        t("plans.Unlimited.features.3"),
      ],
      Business: [
        t("plans.Business.features.0"),
        t("plans.Business.features.1"),
        t("plans.Business.features.2"),
        t("plans.Business.features.3"),
      ],
      Enterprise: [
        t("plans.Enterprise.features.0"),
        t("plans.Enterprise.features.1"),
        t("plans.Enterprise.features.2"),
        t("plans.Enterprise.features.3"),
      ],
    };

    return features[nickname].map((feature, index) => (
      <p
        key={index}
        className="flex items-center text-base text-black dark:text-body"
      >
        <span className="mr-2 text-lg font-semibold">✔</span> {feature}
      </p>
    ));
  };

  return (
    <div className="w-full px-6 pb-8 md:w-1/2 lg:w-1/3">
      <div
        className={`relative mb-10 rounded-2xl px-9 py-10 shadow-2xl md:shadow-xl ${bgColor} flex h-full flex-col justify-between lg:mb-4 lg:px-7 xl:px-9`}
      >
        {/* Badge for Recommended Plan */}
        {price.nickname === "Unlimited" && (
          <span className="absolute right-5 top-5 rounded-full bg-black px-4 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
            {t("recommended")}
          </span>
        )}

        {/* Plan Title and Price */}
        <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
          {price.nickname === "Enterprise"
            ? "LET'S TALK"
            : t(`plans.${price.nickname}.name`)}
        </h3>
        {price.nickname !== "Enterprise" && (
          <>
            <p className="mb-2 text-4xl font-bold text-black dark:text-white">
              {t(`plans.${price.nickname}.price`)}
              {price.nickname !== "Business" && (
                <>
                  .- <span className="text-lg">/ {t("month")}</span>
                </>
              )}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {t("duration")}
            </p>
            {/* Contact Button */}
            {price.nickname === "Enterprise" && (
              <Link
                href="/kontakt"
                aria-label="Contact us for Enterprise plan"
                className="block w-full rounded-full  bg-black px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {t("contactUs")}
              </Link>
            )}
            {price.nickname === "Basic" && <CalBtnBasic />}
            {price.nickname === "Unlimited" && <CalBtnBusiness />}
            {price.nickname === "Business" && <CalBtnEnterprise />}
          </>
        )}

        {/* Features List */}
        <div className="mb-auto flex-1 space-y-4 pb-10 pt-6">
          {getFeatures(price.nickname)}
        </div>

        {/* Stripe Checkout Button */}
        {price.nickname === "Basic" && (
          <div className="mb-4 mt-auto">
            <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
              {t("payLaterDescription")}
            </p>
            <Link
              href="https://buy.stripe.com/00gaIyfu79lbcsU000"
              aria-label="Pay for Basic"
              className=" block w-full rounded-full bg-neutral-50 px-8 py-3 text-center text-base font-medium text-black hover:bg-neutral-300 dark:bg-black dark:text-white hover:dark:bg-gray-700"
            >
              {t("checkoutNow")}
            </Link>
          </div>
        )}

        {price.nickname === "Unlimited" && (
          <div className="mb-4 mt-auto">
            <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
              {t("payLaterDescription")}
            </p>
            <Link
              href="https://buy.stripe.com/bIYeYO6XBfJzfF6bIJ"
              aria-label="Pay for Unlimited"
              className=" block w-full rounded-full bg-neutral-50 px-8 py-3 text-center text-base font-medium text-black hover:bg-neutral-300 dark:bg-black dark:text-white hover:dark:bg-gray-700"
            >
              {t("checkoutNow")}
            </Link>
          </div>
        )}

        {/* Footer Text */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {t("footerText")}
        </p>
      </div>
    </div>
  );
};
