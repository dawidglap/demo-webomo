"use client";

import React, { useState } from "react";
import faqData from "./faqData";
import FAQItem from "./FAQItem";
import { useTranslations } from "next-intl";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const t = useTranslations("FAQ");

  const handleFaqToggle = (index: number) => {
    activeFaq === index ? setActiveFaq(0) : setActiveFaq(index);
  };

  return (
    <>
      <section
        id="faq"
        className="relative z-10 bg-[#F8FAFB] py-[110px] dark:bg-[#15182B]"
      >
        <div className="container">
          {/* FAQ Header */}
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("heading")}
            </h2>
            <p className="text-base text-body">{t("description")}</p>
          </div>

          {/* FAQ Items */}
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

export default Faq;
