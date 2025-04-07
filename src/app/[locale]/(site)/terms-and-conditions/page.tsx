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
    <div className="bg-background mx-auto my-4 mt-20 max-w-6xl px-4 py-8 text-body">
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
            {t("agreement.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("agreement.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("contractConditions.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("contractConditions.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("writtenForm.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("writtenForm.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("services.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("services.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("loyaltyAndConfidentiality.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("loyaltyAndConfidentiality.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("copyright.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("copyright.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("usageRights.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("usageRights.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("illegalUse.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("illegalUse.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("warrantyAndDefectClaims.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("warrantyAndDefectClaims.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("liabilityDisclaimer.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("liabilityDisclaimer.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("orderReductionOrCancellation.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("orderReductionOrCancellation.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("paymentTerms.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("paymentTerms.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("thirdPartyCosts.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("thirdPartyCosts.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("subcontractors.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("subcontractors.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("privacyAndDataProtection.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("privacyAndDataProtection.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("acceptanceOfServices.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("acceptanceOfServices.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("contractDuration.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("contractDuration.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("termination.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("termination.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("governingLawAndJurisdiction.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("governingLawAndJurisdiction.description")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {t("finalProvisions.title")}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            {t("finalProvisions.description")}
          </p>
        </section>
      </motion.div>
    </div>
  );
}
