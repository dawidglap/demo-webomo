"use client";

import React, { useState } from "react";
import faqData from "./faqData";
import FAQItem from "./FAQItem";
import { useTranslations } from "next-intl";

const FaqBusiness = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const t = useTranslations("FaqBusiness");

  const handleFaqToggle = (index: number) => {
    activeFaq === index ? setActiveFaq(0) : setActiveFaq(index);
  };

  return (
    <>
      <section
        id="faq-business"
        className="relative z-10 bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 py-[110px] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
      >
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("heading")}
            </h2>
            <p className="text-base text-body">{t("description")}</p>
          </div>

          <div
            className="faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-[30px] bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark"
            data-wow-delay=".3s"
          >
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faqData={{ ...faq, activeFaq, handleFaqToggle }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqBusiness;
