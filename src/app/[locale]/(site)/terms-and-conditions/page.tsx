"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Terms() {
  const t = useTranslations("privacy");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Adjust this number according to how many entries you have
  const termsSectionsCount = 70;

  return (
    <div className="bg-background mx-auto my-4 mt-20 max-w-6xl px-4 py-8 text-body">
      <motion.div
        className="border-accent mx-auto max-w-xl rounded-2xl border border-dotted px-4 py-8 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          {t("title")}
        </h1>

        {[...Array(termsSectionsCount)].map((_, i) => {
          const index = i + 1;
          return (
            <section key={index} className="mt-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {t(`title${index}`)}
              </h3>
              <p className="text-text-secondary mt-2 text-sm">
                {t(`description${index}`)}
              </p>
            </section>
          );
        })}
      </motion.div>
    </div>
  );
}
