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
            {/* <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2> */}
            <p className="mt-10 text-4xl font-bold text-black dark:text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl 3xl:text-7xl">
              {t("title")}
            </p>
            <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-center text-4xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-7xl">
              {t("subHeadline")}
            </p>
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
