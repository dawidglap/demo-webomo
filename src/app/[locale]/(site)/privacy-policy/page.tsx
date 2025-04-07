"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Privacy() {
  const t = useTranslations("privacy");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background mx-auto my-4 mt-20   max-w-6xl px-4 py-8 text-body ">
      <motion.div
        className="border-accent mx-auto max-w-xl rounded-2xl border border-dotted px-4 py-8 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white">
          {t("title")}
        </h1>
        <section className="mt-6">
          {/* <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("introduction.title")}
          </h2> */}
          <p className="text-text-secondary mt-2 text-sm">
            {t("introduction.description")}
          </p>
          <p className="text-text-secondary mt-2 text-sm">
            {t("introduction.description2")}
          </p>
          <p className="text-text-secondary mt-2 text-sm">
            {t("introduction.description3")}
          </p>
        </section>

        {/* <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("dataCollection.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("dataCollection.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("dataUse.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("dataUse.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("dataSharing.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("dataSharing.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("userRights.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("userRights.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("cookiesPolicy.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("cookiesPolicy.description")}
          </p>
        </section> */}
      </motion.div>
    </div>
  );
}
