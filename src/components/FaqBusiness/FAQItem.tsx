"use client";

import React from "react";
import { useTranslations } from "next-intl";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  titleKey: string;
  detailsKey: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, titleKey, detailsKey } = faqData;
  const t = useTranslations("FaqBusiness");

  return (
    <>
      <div className="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark">
        <button
          onClick={() => handleFaqToggle(id)}
          className="faq-btn relative flex w-full items-center justify-between px-[18px] py-6 text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg"
        >
          {t(titleKey)}
          {activeFaq === id ? (
            <svg
              className="fill-current"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.167 12.833H5.833v2.333h16.334v-2.333z" />
            </svg>
          ) : (
            <svg
              className="fill-current"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.833 5.833h2.333v16.334h-2.333V5.833zm9.333 6v2.334H5.833v-2.334h16.333z" />
            </svg>
          )}
        </button>
        <div
          className={`faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px] ${
            activeFaq === id
              ? "max-h-fit py-[30px] opacity-100"
              : "max-h-0 py-0 opacity-0 transition-all duration-100 ease-in-out"
          }`}
        >
          <p className="text-base text-body">{t(detailsKey)}</p>
        </div>
      </div>
    </>
  );
};

export default FAQItem;
