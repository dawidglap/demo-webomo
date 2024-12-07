"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Terms() {
  const t = useTranslations("terms");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background mx-auto my-4 mt-20 max-w-6xl px-4 py-8 text-body ">
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
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("introduction.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("introduction.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("userResponsibilities.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("userResponsibilities.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("intellectualProperty.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("intellectualProperty.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("limitationsLiability.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("limitationsLiability.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("modifications.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("modifications.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("governingLaw.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("governingLaw.description")}
          </p>
        </section>
      </motion.div>
    </div>
  );
}
