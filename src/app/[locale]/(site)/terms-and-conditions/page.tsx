"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Terms() {
  const t = useTranslations("terms");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Define the sections based on the terms object in the de.json
  const termsSections = [
    "agreement",
    "contractConditions",
    "writtenForm",
    "services",
    "loyaltyAndConfidentiality",
    "copyright",
    "usageRights",
    "illegalUse",
    "warrantyAndDefectClaims",
    "liabilityDisclaimer",
    "orderReductionOrCancellation",
    "paymentTerms",
    "thirdPartyCosts",
    "subcontractors",
    "privacyAndDataProtection",
    "acceptanceOfServices",
    "contractDuration",
    "termination",
    "services2",
    "governingLawAndJurisdiction",
    "finalProvisions",
  ];

  return (
    <div className="bg-background mx-auto my-4 mt-20 max-w-6xl px-4 py-8 text-body">
      <motion.div
        className="border-accent mx-auto max-w-3xl rounded-2xl border border-dotted px-4 py-8 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          {t("title")}
        </h1>

        {termsSections.map((section, index) => {
          return (
            <section key={index} className="mt-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {t(`${section}.title`)}
              </h3>
              <p className="text-text-secondary mt-2 text-sm">
                {t(`${section}.description`)}
              </p>
            </section>
          );
        })}
      </motion.div>
    </div>
  );
}
