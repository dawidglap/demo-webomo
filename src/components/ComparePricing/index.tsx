"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle, MinusCircle, Info } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { truncate } from "fs";

const ComparePricing = () => {
  const t = useTranslations("Pricing");

  // Tooltip state
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  // Funzione per mostrare tooltip e nasconderlo dopo 3 secondi
  const handleTooltip = (index: number) => {
    setActiveTooltip(index);
    setTimeout(() => {
      if (activeTooltip === index) {
        setActiveTooltip(null);
      }
    }, 3000);
  };

  // Lista delle feature con indicazione di quali piani le supportano
  const features = [
    {
      name: t("plans1.Basic.features.0"),
      shortName: "Projektleitung",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plans1.Basic.features.1"),
      shortName: "Produktion",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plans1.Basic.features.2"),
      shortName: "Veröffentlichung",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plans1.Basic.features.3"),
      shortName: "Kanäle",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plans1.Unlimited.features.3"),
      shortName: "Fotoshooting",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plans1.Business.features.0"),
      shortName: "Affiliate Marketing",
      basic: false,
      pro: true,
      enterprise: true,
    },

    {
      name: "Fotoshooting: 1x Firma / Büro / Mitarbeiter / Kunden / Showroom / Gebäude / Produkt (Dauer 30 - 60 Sekunden)",
      shortName: "Fotoshooting",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Werbefilm: 1x Firma / Büro / Mitarbeiter / Kunden / Showroom / Gebäude / Produkt (Dauer 30 - 60 Sekunden)",
      shortName: "Videoshooting",
      basic: false,
      pro: true,
      enterprise: true,
    },
  
    {
      name: "Branding",
      shortName: "Kanäle",
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "Webentwicklung",
      shortName: "SM Kampagnen",
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      name: t("plans1.Business.features.1"),
      shortName: "Social Media Kampagnen",
      basic: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 via-gray-100 to-white pt-[110px] dark:from-purple-500 dark:via-slate-900 dark:to-black">
      <section className="container relative mx-auto  mb-10 mt-[-3rem] rounded-2xl bg-white px-4 dark:bg-slate-950 md:p-10">
        {/* Titolo */}
        {/* <h2 className="mb-6 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
        {t("titleCompare")}{" "}
      </h2> */}

        {/* Legenda sopra la tabella */}
        <div className="grid grid-cols-12 items-center border-b border-gray-200 py-4 dark:border-gray-700">
  <div className="col-span-3 md:col-span-6"></div>

  {/* Basic */}
  <div className="col-span-3 flex flex-col items-center justify-center md:col-span-2">
   
    <div className="flex items-center justify-center">
      <span className="mr-2 h-2 w-2 rounded-full bg-gray-500 md:h-3 md:w-3"></span>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
        {t("plans1.Basic.name")}
      </span>
    </div>
    <div className="mt-2 flex gap-2 mb-1 text-neutral-500 dark:text-white">
      <FaInstagram size={20} />
    </div>
  </div>

  {/* Unlimited */}
  <div className="col-span-3 flex flex-col items-center justify-center md:col-span-2">
   
    <div className="flex items-center justify-center">
      <span className="mr-2 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 md:h-3 md:w-3"></span>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300  md:text-xl">
        {t("plans1.Unlimited.name")}
      </span>
    </div>
    <div className="mt-2 flex gap-2 mb-1 text-neutral-500 dark:text-white">
      <FaInstagram size={20} />
      <FaFacebookF size={20} />
    </div>
  </div>

  {/* Business */}
  <div className="col-span-3 flex flex-col items-center justify-center md:col-span-2">
   
    <div className="flex items-center justify-center">
      <span className="mr-2 h-2 w-2 rounded-full bg-green-600 dark:bg-green-400 md:h-3 md:w-3"></span>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
        {t("plans1.Business.name")}
      </span>
    </div>
    <div className="mt-2 flex gap-2 mb-1 text-neutral-500 dark:text-white">
      <FaInstagram size={20} />
      <FaFacebookF size={20} />
      <FaLinkedinIn size={20} />
    </div>
  </div>
</div>


        {/* Lista delle features */}
        <div className="w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center border-b border-gray-200 py-4 dark:border-gray-700"
            >
              {/* Feature Name con Tooltip su mobile */}
              <div className="relative  col-span-9 flex items-center gap-2 text-left text-gray-700 dark:text-gray-300 md:col-span-6">
                <span className="hidden sm:inline">{feature.name}</span>
                <span
                  className="flex cursor-pointer items-center gap-1 sm:hidden"
                  onClick={() => handleTooltip(index)}
                >
                  {feature.shortName}
                  <Info className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </span>

                {/* Tooltip */}
                {activeTooltip === index && (
                  <div className="absolute left-0 z-50 mt-2 w-56 rounded-2xl border border-gray-300 bg-white p-2 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    {feature.name}
                  </div>
                )}
              </div>

              {/* Basic Plan */}
              <div className="col-span-1 flex justify-center text-center md:col-span-2">
                {feature.basic ? (
                  <CheckCircle className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                ) : (
                  <MinusCircle className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                )}
              </div>

              {/* Pro Plan */}
              <div className="col-span-1 flex justify-center text-center md:col-span-2">
                {feature.pro ? (
                  <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <MinusCircle className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                )}
              </div>

              {/* Enterprise Plan */}
              <div className="col-span-1 flex justify-center text-center md:col-span-2">
                {feature.enterprise ? (
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                ) : (
                  <MinusCircle className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComparePricing;
