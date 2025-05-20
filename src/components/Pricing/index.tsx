"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { pricingData } from "../../stripe/pricingData";
import { PricingItem } from "./PricingItem";

const Pricing = () => {
  const t = useTranslations("Pricing");

  return (
    <>
      <section
        id="pricing"
        className=" relative  mb-[0px]   bg-gradient-to-t from-purple-100 via-gray-100 to-white pt-[110px] dark:from-purple-500 dark:via-slate-900 dark:to-black"
      >
        <div className="container">
          <div
            className="wow fadeInUp mx-auto md:mb-6 mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            {/* <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2> */}
            <p className="md:mt-4 mt-10 text-4xl font-bold text-black dark:text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl 3xl:text-6xl">
              {t("title")}
            </p>
            <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-center text-4xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-5xl">
              {t("subHeadline")}
            </p>
            <p className="text-base text-body">{t("description")}</p>
          </div>
        </div>

        <div className="container max-w-[1120px] overflow-hidden">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end ">
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
