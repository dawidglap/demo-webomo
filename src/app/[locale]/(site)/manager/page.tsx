"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ManagerPackage = () => {
  const t = useTranslations("Pricing");

  return (
    <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-8 p-6 lg:flex-row">
      <div className="w-full lg:w-1/3">
        <div className="relative flex h-full flex-col justify-between rounded-xl bg-purple-100 p-6 shadow-2xl dark:bg-slate-900">
          <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Manager Package
          </h3>
          <p className="mb-2 text-4xl font-bold text-black dark:text-white">
            CHF 79.- <span className="text-lg font-medium">{t("month")}</span>
          </p>
          <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
            {t("duration")} - 12 {t("months")}
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Dashboard access with key metrics.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Weekly coaching sessions for 12 months.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Advertising content support.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Access to exclusive resources.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              24/7 support via chat and email.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Monthly performance reports.
            </li>
            <li className="flex items-center text-base text-black dark:text-gray-300">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Personalized marketing strategies.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full rounded-xl bg-gray-50 p-6 shadow-lg dark:bg-gray-800 lg:w-2/3">
        <form className="space-y-6">
          <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            {t("contactFormTitle")}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-[30px] border border-stroke bg-white px-4 py-3 text-base text-body shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Surname Input */}
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("surname")}
              </label>
              <input
                type="text"
                id="surname"
                className="mt-1 block w-full rounded-[30px] border border-stroke bg-white px-4 py-3 text-base text-body shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Birthday Input */}
          <div>
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("birthday")}
            </label>
            <input
              type="date"
              id="birthday"
              className="mt-1 block w-full rounded-[30px] border border-stroke bg-white px-4 py-3 text-base text-body shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-[30px] border border-stroke bg-white px-4 py-3 text-base text-body shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                {t("paymentMethod")}
              </h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                {t("paymentMethodSubtitle")}
              </p>
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full rounded-[30px] border border-gray-300 bg-white px-6 py-3 text-center text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  TWINT
                </button>
                <button
                  type="button"
                  className="w-full rounded-[30px] bg-black px-6 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Kreditkarte
                </button>
                <button
                  type="button"
                  className="w-full rounded-[30px] border border-gray-300 bg-white px-6 py-3 text-center text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  Direkt Überweisung
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerPackage;
