"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");

  return (
    <>
      <footer>
        <div className="pb-[46px] pt-[95px]">
          <div className="container max-w-[1390px] rounded-[30px] bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-200 p-8 shadow-xl dark:from-slate-900 dark:to-slate-800">
            {/* Social Media Section */}
            <div className="flex flex-wrap items-center justify-between border-b border-primary px-4 pb-4 dark:border-gray-700">
              <h3 className="text-[22px] font-bold text-black dark:text-white">
                {t("followUs")}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  #
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  @
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-xl text-black hover:text-primary dark:text-white"
                >
                  f
                </a>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="flex flex-wrap justify-between pt-8 text-left md:text-left">
              {/* Company Section */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  {t("company")}
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href={`/${locale}/uber-uns`}>{t("aboutUs")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/privacy-policy`}>
                      {t("privacyPolicy")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/imprint`}>{t("imprint")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/terms-and-conditions`}>
                      {t("termsAndConditions")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Webomo-Business Section */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  {t("webomoBusiness")}
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href={`/${locale}/webomo-business`}>
                      {t("partnerProgram")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/webomo-business#faq-business`}>
                      {t("faqPartnerProgram")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Help Section */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  {t("help")}
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    <Link href={`/${locale}/price/#faq`}>{t("faq")}</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="mb-8 w-full px-4 md:w-1/4">
                <h3 className="mb-4 text-[22px] font-bold text-black dark:text-white">
                  {t("contact")}
                </h3>
                <ul className="space-y-2 text-base text-body dark:text-white">
                  <li>
                    {t("email")}:{" "}
                    <a
                      href="mailto:kontakt@webomo.ch"
                      className="hover:text-primary"
                    >
                      kontakt@webomo.ch
                    </a>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/kontakt`}
                      className="hover:text-primary"
                    >
                      {t("contactUs")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="py-4 text-center text-black dark:text-white">
          <p className="text-sm">
            {t("copyright")} <br />
            {t("allRightsReserved")}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
