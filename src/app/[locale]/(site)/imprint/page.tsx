"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Impressum() {
  const t = useTranslations("impressum");

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
            {t("owner.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("owner.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("address.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("address.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("contact.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("contact.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("registry.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("registry.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("disclaimer.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("disclaimer.description")}
          </p>
        </section>
      </motion.div>
    </div>
  );
}
