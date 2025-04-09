"use client";

import React from "react";
import { useTranslations } from "next-intl";

const TitleAboutHiver = () => {
  const t = useTranslations("TitleAboutHiver");

  return (
    <>
    <div className="w-full overflow-x-hidden">

      <section id="pricing" className="relative z-10 mb-20 pt-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-5xl text-center"
            data-wow-delay=".2s"
          >
            {/* <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2> */}

            <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 pb-3 text-center text-4xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-7xl">
              {t("title")}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {t("description")}
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TitleAboutHiver;
