"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");

  return (
    <footer className="rounded-[30px] bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-200 py-12 shadow-xl dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* Left Section: Company Description */}
          <div className="text-center md:w-1/3 md:text-left">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Webomo
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {t("companyDescription")}
            </p>
          </div>

          {/* Middle Section: Links (1 Column on Mobile, 3 Columns on Desktop) */}
          <div className="flex w-full flex-col space-y-6 md:w-2/3 md:flex-row md:justify-between md:space-y-0">
            {/* Column 1: Company */}
            <div className="w-full text-center md:w-1/3 md:text-left">
              <h4 className="font-semibold text-black dark:text-white">
                {t("company")}
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link
                    href={`/${locale}/uber-uns`}
                    className="hover:underline"
                  >
                    {t("aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/privacy-policy`}
                    className="hover:underline"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/imprint`} className="hover:underline">
                    {t("imprint")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms-and-conditions`}
                    className="hover:underline"
                  >
                    {t("termsAndConditions")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Webomo Business */}
            <div className="w-full text-center md:w-1/3 md:text-left">
              <h4 className="font-semibold text-black dark:text-white">
                {t("webomoBusiness")}
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link
                    href={`/${locale}/webomo-business`}
                    className="hover:underline"
                  >
                    {t("partnerProgram")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/webomo-business#faq-business`}
                    className="hover:underline"
                  >
                    {t("faqPartnerProgram")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Help */}
            <div className="w-full text-center md:w-1/3 md:text-left">
              <h4 className="font-semibold text-black dark:text-white">
                {t("help")}
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link
                    href={`/${locale}/price/#faq`}
                    className="hover:underline"
                  >
                    {t("faq")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/kontakt`} className="hover:underline">
                    {t("contactUs")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Webomo | {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
