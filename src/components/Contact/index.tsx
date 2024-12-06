"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import CalendlyBtn from "../CalendlyBtn"; // Assuming you have this component

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <>
      <section id="support" className="pb-[110px] pt-[100px] md:pt-[150px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Contact Form */}
            <div
              className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 px-4 py-10 shadow-card dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8"
              data-wow-delay=".3s"
            >
              <h2 className="mb-6 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[36px] md:leading-tight">
                {t("form.title")}
              </h2>
              <form>
                <div className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("form.namePlaceholder")}
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      name="message"
                      id="message"
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full rounded-[30px] border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block rounded-[30px] bg-primary px-11 py-[14px] text-base font-medium text-white hover:bg-opacity-90"
                    >
                      {t("submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Booking Card */}
            <div
              className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-[30px] bg-gradient-to-b from-indigo-50  to-slate-100 px-4 py-10 text-center shadow-card dark:from-slate-900 dark:to-slate-800 dark:shadow-card-dark sm:px-10 md:px-8"
              data-wow-delay=".3s"
            >
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-[36px] md:leading-tight">
                {t("bookCall.title")}
              </h2>
              <p className="mb-6 text-lg text-body dark:text-gray-300">
                {t("bookCall.subtitle")}
              </p>
              <CalendlyBtn />

              {/* Additional Contact Options */}
              <div className="mt-8 space-y-4 text-center">
                <p className="flex items-center justify-center text-lg text-body dark:text-gray-300">
                  <AiOutlineMail className="mr-2 text-lg text-primary" />
                  <a
                    href="mailto:kontakt@webomo.ch"
                    className="underline hover:text-black hover:dark:text-neutral-400"
                  >
                    kontakt@webomo.ch
                  </a>
                </p>
                {/* <p className="flex items-center justify-center text-lg text-body dark:text-gray-300">
                  <BsWhatsapp className="mr-2 text-lg text-green-500" />
                  <a
                    href="https://wa.me/your-whatsapp-number"
                    className="underline hover:text-black hover:dark:text-neutral-400"
                  >
                    WhatsApp
                  </a>
                </p> */}
                {/* <p className="flex items-center justify-center text-lg text-body dark:text-gray-300">
                  <FiHelpCircle className="mr-2 text-lg text-yellow-400" />
                  <a
                    href="/faq"
                    className="underline hover:text-black hover:dark:text-neutral-400"
                  >
                    {t("bookCall.orFaq")}
                  </a>
                </p> */}
              </div>

              <p className="mt-8 text-xl text-black dark:text-gray-300">
                {t("bookCall.thankYou")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
