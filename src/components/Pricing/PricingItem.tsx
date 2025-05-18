"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CalBtnBasic from "../CalBtnBasic";
import CalBtnBusiness from "../CalBtnBusiness";
import CalBtnEnterprise from "../CalBtnEnterprise";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";


export const PricingItem = ({ price }: any) => {
  const t = useTranslations("Pricing");

  let bgColor = "";
  if (price.nickname === "Basic") {
    bgColor =
      "bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900";
  } else if (price.nickname === "Unlimited") {
    bgColor =
      "bg-gradient-to-br from-indigo-300 to-purple-300 dark:from-indigo-900 dark:to-purple-900";
  } else if (price.nickname === "Business") {
    bgColor =
      "bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900";
  }
  
  

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
        // t("plans.Business.features.1"),
        t("plans.Business.features.2"),
      ],
      Enterprise: [
        t("plans.Enterprise.features.0"),
        t("plans.Enterprise.features.1"),
        t("plans.Enterprise.features.2"),
        t("plans.Enterprise.features.3"),
      ],
    };
  
    return features[nickname].map((feature, index) => {
      const isCircleBadge =
        (nickname === "Unlimited" && index === 0) ||
        (nickname === "Business" && index === 0);
    
      const isPlainText = nickname === "Business" && index === 1;
    
      if (isPlainText) {
        return (
          <p
            key={index}
            className="text-lg  font-medium text-purple-500 pt-4 dark:text-white mt-6"
          >
            {feature}
          </p>
        );
      }
    
      return (
        <div
          key={index}
          className={
            isCircleBadge
              ? "mx-auto mb-4 flex h-24 w-24 border-2 border-white items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-purple-500 text-center text-md font-bold text-white shadow-lg p-4"
              : "rounded-full bg-gradient-to-r border-2 md:text-lg border-white from-indigo-600 to-purple-500 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400"
          }
        >
          {feature}
        </div>
      );
    });
    
    
  };
  

  return (
    <div className="flex flex-col items-center w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
      {/* Card */}
      <div className="w-full">
        <h3
          className={`text-center text-4xl font-extrabold leading-tight text-black dark:text-white ${
            price.nickname === "Unlimited" ? "mt-0 mb-6" : "mt-6 mb-3"
          }`}
        >
          {price.nickname === "Enterprise"
            ? "LET'S TALK"
            : t(`plans.${price.nickname}.name`)}
        </h3>

        <div
          className={`text-center relative rounded-2xl px-6 pb-10 pt-10 shadow-2xl md:shadow-md ${bgColor} flex flex-col ${
            price.nickname === "Unlimited" ? "md:min-h-[400px]" : "md:min-h-[370px]"
          }`}
        >
          {/* Badge */}
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
              <p className="mb-2 text-3xl font-bold text-black dark:text-white">
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

          {/* Social Icons */}
{/* Social Icons */}
<div className="flex justify-center gap-4 mt-6 mb-4">
  {/* Instagram - always visible */}
  <span className="text-black dark:text-white">
    <FaInstagram size={26} />
  </span>

  {/* Facebook - visible for Pro and Business */}
  {(price.nickname === "Unlimited" || price.nickname === "Business") && (
    <span className="text-black dark:text-white">
      <FaFacebookF size={26} />
    </span>
  )}

  {/* LinkedIn - only for Business */}
  {price.nickname === "Business" && (
    <span className="text-black dark:text-white">
      <FaLinkedinIn size={26} />
    </span>
    
    
  )}
    {price.nickname === "Business" && (
    <span className="text-black dark:text-white">
      <FaTiktok size={26} />
    </span>
    
    
  )}
    {price.nickname === "Business" && (
    <span className="text-black dark:text-white">
      <FaYoutube size={26} />
    </span>
    
    
  )}
</div>



          {/* Enterprise Button */}
          {price.nickname === "Enterprise" ? (
            <Link
              href="/kontakt"
              className=" block rounded-full bg-black px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t("contactUs")}
            </Link>
          ) : (
            // Invisible placeholder to preserve layout
            <div className="mt-[-100px] mb-6">
              <div className="h-[44px] w-full invisible"></div>
            </div>
          )}
        </div>
      </div>

      {/* External Buttons (for non-Enterprise) */}
      {price.nickname !== "Enterprise" && (
        <div className="mt-6 flex flex-col items-center gap-3 w-full max-w-[250px]">
          {price.nickname === "Basic" && <CalBtnBasic />}
          {price.nickname === "Unlimited" && <CalBtnBusiness />}
          {price.nickname === "Business" && <CalBtnEnterprise />}

          {(price.nickname === "Basic" || price.nickname === "Unlimited") ? (
  <Link
    href={
      price.nickname === "Basic"
        ? "https://buy.stripe.com/00gaIyfu79lbcsU000"
        : "https://buy.stripe.com/bIYeYO6XBfJzfF6bIJ"
    }
    className="block w-full rounded-full border border-black bg-white px-8 py-3 text-center text-base font-medium text-black transition-all hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:text-white"
  >
    {t("checkoutNow")}
  </Link>
) : (
  <div className="h-[44px] mt-[7px] w-full invisible"></div> // placeholder visivo per Business
)}

        </div>
      )}
    </div>
  );
};
