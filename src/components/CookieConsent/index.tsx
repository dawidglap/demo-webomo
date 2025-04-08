"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const CookieConsent = () => {
  const t = useTranslations("CookieConsent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("webomo_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("webomo_cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-xl border border-gray-300 bg-white p-4 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-snug">
          {t("message")}{" "}
          <a href="/privacy-policy" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">
            {t("learnMore")}
          </a>
        </p>
        <button
          onClick={acceptCookies}
          className="mt-2 rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:mt-0"
        >
          {t("accept")}
        </button>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
