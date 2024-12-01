"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { pricingData } from "../../stripe/pricingData";
import { PricingItem } from "./PricingItem";

const Pricing = () => {
  const t = useTranslations("Pricing");

  return (
    <>
      <section id="pricing" className="relative z-10 mb-20 pt-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2>
            <p className="text-base text-body">{t("description")}</p>
          </div>
        </div>

        <div className="container max-w-[1120px] overflow-hidden">
          <div className="-mx-6 flex flex-wrap justify-center">
            {pricingData &&
              pricingData.map((price, key) => (
                <PricingItem price={price} key={key} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
