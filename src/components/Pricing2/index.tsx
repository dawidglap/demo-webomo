"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Pricing2 = () => {
  const t = useTranslations("Pricing2");

  const plans = [
    {
      id: "basic",
      label: t("basic.title"),
      price: "799.-",
      duration: t("duration"),
      features: [
        t("basic.features.0"),
        t("basic.features.1"),
        t("basic.features.2"),
        t("basic.features.3"),
      ],
      button: t("cta"),
      bgColor: "bg-indigo-100",
    },
    {
      id: "pro",
      label: t("pro.title"),
      price: "899.-",
      duration: t("duration"),
      badge: t("pro.badge"),
      highlight: t("pro.features.0"),
      features: [
        t("pro.features.1"),
        t("pro.features.2"),
        t("pro.features.3"),
        t("pro.features.4"),
      ],
      button: t("cta"),
      bgColor: "bg-purple-200",
    },
    {
      id: "business",
      label: t("business.title"),
      price: t("business.price"),
      duration: t("duration"),
      highlight: t("business.features.0"),
      features: [
        t("business.features.1"),
        t("business.features.2"),
      ],
      button: t("cta"),
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 lg:flex-row lg:items-end">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative w-full px-4 md:w-1/2 lg:w-1/3 ${
            plan.id === "pro" ? "lg:-mt-10" : "lg:mt-0"
          }`}
        >
          <h3 className="text-center text-2xl font-extrabold text-black dark:text-white mb-4">
            {plan.label}
          </h3>

          <div
            className={`relative flex flex-col justify-between rounded-2xl ${plan.bgColor} px-6 py-8 shadow-xl text-center min-h-[600px]`}
          >
            {plan.badge && (
              <span className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center text-center shadow-md dark:bg-white dark:text-black">
                {plan.badge}
              </span>
            )}

            <p className="text-3xl font-bold text-black dark:text-white mb-1">
              {plan.price}
              {plan.id === "basic" || plan.id === "pro" ? (
                <span className="text-lg font-semibold"> / mtl</span>
              ) : null}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{plan.duration}</p>

            {plan.highlight && (
              <p className="mb-4 font-semibold text-purple-800 underline underline-offset-2">
                {plan.highlight}
              </p>
            )}

            <div className="space-y-2 text-sm font-medium text-gray-900 dark:text-white mb-6">
              {plan.features.map((f, i) => (
                <p key={i}>{f}</p>
              ))}
            </div>

            <button className="mt-auto w-full rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              {plan.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Pricing2;
