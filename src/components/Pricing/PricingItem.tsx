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
  let bgColor = "bg-gray-100 dark:bg-gray-800";
  if (price.nickname === "Basic") {
    bgColor = "bg-indigo-100 dark:bg-gray-800";
  } else if (price.nickname === "Unlimited") {
    bgColor = "bg-purple-200 dark:bg-slate-950";
  } else if (price.nickname === "Business") {
    bgColor = "bg-green-100 dark:bg-indigo-950";
  } else if (price.nickname === "Enterprise") {
    bgColor = "bg-gray-100 dark:bg-gray-800";
  }

  // Hardcoded features
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
        className="flex items-center justify-center font-bold  mt-6 text-lg text-black dark:text-body"
      >
        <span className="mr-2 text-lg  font-bold mb-10"></span> {feature}
      </p>
    ));
  };

  return (
    <div
    className={`w-full px-4 md:w-1/2 lg:w-1/3 mb-5 ${
      price.nickname === "Unlimited" ? "lg:mt-10" : "lg:mt-0"
    }`}
  >
    <h3
      className={`text-center text-3xl font-extrabold leading-tight text-black dark:text-white ${
        price.nickname === "Unlimited" ? "mt-0 mb-6" : "mt-6 mb-3"
      }`}
    >
      {price.nickname === "Enterprise"
        ? "LET'S TALK"
        : t(`plans.${price.nickname}.name`)}
    </h3>
  
    <div
      className={`text-center relative rounded-2xl px-6 py-10 shadow-2xl md:shadow-md ${bgColor} flex flex-col ${
        price.nickname === "Unlimited" ? "min-h-[580px]" : "min-h-[530px]"
      }`}
    >
      {price.nickname === "Unlimited" && (
        <span className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center text-center shadow-md dark:bg-white dark:text-black">
          {t("recommended")}
          <br />
          {t("recommended2")}
        </span>
      )}
  
      {/* Price */}
      {price.nickname !== "Enterprise" && (
        <>
          <p className="mb-2 text-2xl font-bold text-black dark:text-white">
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
        </>
      )}
  
      {/* Features */}
      <div
        className={`mt-6 ${
          price.nickname === "Business" ? "mb-2" : "mb-6"
        } space-y-2 text-sm text-black text-center dark:text-white`}
      >
        {getFeatures(price.nickname)}
      </div>
  
      {/* Booking Buttons */}
      <div className="mb-6 mt-auto">
        {/* Questo box cresce per spingere verso il basso il CTA */}
        {price.nickname === "Basic" && <CalBtnBasic />}
        {price.nickname === "Unlimited" && <CalBtnBusiness />}
        {price.nickname === "Business" && <CalBtnEnterprise />}
      </div>
  
      {/* CTA buttons */}
      {price.nickname === "Basic" && (
        <div className="mb-0">
          <Link
            href="https://buy.stripe.com/00gaIyfu79lbcsU000"
            className="block w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-center text-base font-medium text-white shadow-md transition-all duration-300 hover:shadow-[0_0_10px_5px_rgba(99,102,241,0.6)] dark:bg-indigo-500 dark:hover:shadow-[0_0_5px_5px_rgba(99,102,241,0.6)]"
          >
            {t("checkoutNow")}
          </Link>
        </div>
      )}
  
      {price.nickname === "Unlimited" && (
        <div className="mb-0">
          <Link
            href="https://buy.stripe.com/bIYeYO6XBfJzfF6bIJ"
            className="block w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-center text-base font-medium text-white shadow-md transition-all duration-300 hover:shadow-[0_0_5px_5px_rgba(99,102,241,0.6)] dark:bg-indigo-500 dark:hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.6)]"
          >
            {t("checkoutNow")}
          </Link>
        </div>
      )}
  
      {price.nickname === "Enterprise" && (
        <Link
          href="/kontakt"
          className="mt-auto block rounded-full bg-black px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          {t("contactUs")}
        </Link>
      )}
    </div>
  </div>
  
  
  );
};
