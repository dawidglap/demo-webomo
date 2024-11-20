"use client";
import axios from "axios";
import React from "react";

export const PricingItem = ({ price, planType }: any) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  // Define background color based on plan type
  let bgColor = "bg-gray-100 dark:bg-gray-800"; // Default color
  if (price.nickname === "Basic" || price.nickname === "Basic") {
    bgColor = "bg-indigo-50 dark:bg-gray-800";
  } else if (price.nickname === "Pro" || price.nickname === "Unlimited") {
    bgColor = "bg-purple-50 dark:bg-slate-900";
  } else if (price.nickname === "Business") {
    bgColor = "bg-green-50 dark:bg-[#000]";
  }

  // Define price and feature details based on plan name
  const priceDetails = {
    Basic: {
      price: "499",
      features: [
        "Projektleitung: Content Beratung & Administration",
        "Produktion: Inhalte 106 (Storys und Posts)",
        "Veröffentlichung: 1x pro Woche durch Webomo",
        "Kanäle: Instagram / Facebook / LinkedIn / YouTube",
        "Fotoshooting: Inklusive",
        "Video: -",
        "Social Media Kampagnen: -",
      ],
    },
    Unlimited: {
      price: "599",
      features: [
        "Projektleitung: Content Beratung & Administration",
        "Produktion: Inhalte 106 (Storys und Posts)",
        "Veröffentlichung: 1x pro Woche durch Webomo",
        "Kanäle: Instagram / Facebook / LinkedIn / YouTube",
        "Fotoshooting: Inklusive",
        "Video: -",
        "Social Media Kampagnen: -",
      ],
    },
    Business: {
      price: "799",
      features: [
        "Projektleitung: Content Beratung & Administration",
        "Produktion: Inhalte 106 (Storys und Posts)",
        "Veröffentlichung: 1x pro Woche durch Webomo",
        "Kanäle: Instagram / Facebook / LinkedIn / YouTube",
        "Fotoshooting: Inklusive",
        "Video: 2 Werbefilme",
        "Social Media Kampagnen: Inklusive",
      ],
    },
  };

  const currentPlan = priceDetails[price.nickname] || priceDetails["Basic"];

  return (
    <div className="w-full  px-6 pb-8 md:w-1/2 lg:w-1/3">
      <div
        className={` relative mb-10  rounded-xl px-9 py-10 shadow-2xl md:shadow-xl ${bgColor} flex h-full flex-col justify-between lg:mb-4 lg:px-7 xl:px-9`}
      >
        {/* Badge for Recommended Plan */}
        {price.nickname === "Unlimited" && (
          <span className="absolute right-5 top-5 rounded-full bg-black px-4 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
            Empfohlen
          </span>
        )}

        {/* Plan Title and Price */}
        <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
          {price.nickname}
        </h3>
        <p className="mb-2 text-4xl font-bold text-black dark:text-white">
          {currentPlan.price}.- <span className="text-lg">/ Monat</span>
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          12 Monate Betreuung
        </p>

        {/* Features List */}
        <div className="space-y-4 pb-10 pt-6">
          {currentPlan.features.map((feature, index) => (
            <p key={index} className="flex text-base text-black dark:text-body">
              <span className="mr-2 font-semibold">{index + 1}.</span> {feature}
            </p>
          ))}
        </div>

        {/* Button */}
        <button
          aria-label="purchase this plan"
          onClick={handleSubscription}
          className="block w-full rounded-2xl bg-black px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          wählen
        </button>

        {/* Footer Text */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Inkl. Dashboard & <span className="underline">Reporting</span>
        </p>
      </div>
    </div>
  );
};
