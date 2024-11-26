"use client";

import React, { useState } from "react";
import Graphics from "@/components/Faq/Graphics";
import faqData from "./faqData";
import FAQItem from "./FAQItem";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaqToggle = (index: number) => {
    activeFaq === index ? setActiveFaq(0) : setActiveFaq(index);
  };

  return (
    <>
      <section
        id="faq-business"
        className="relative z-10  bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 py-[110px] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
      >
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
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
        <div className="mt-10 text-center">
          <p className="mx-auto max-w-lg text-base text-gray-700 dark:text-gray-300">
            Wenn Sie keine Antwort auf Ihre Frage gefunden haben, können Sie uns
            gerne{" "}
            <a
              href="/kontakt"
              className="text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400"
            >
              kontaktieren
            </a>{" "}
            oder uns eine E-Mail senden an{" "}
            <a
              href="mailto:kontakt@webomo.ch"
              className="text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400"
            >
              kontakt@webomo.ch
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Faq;
