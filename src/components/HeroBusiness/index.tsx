"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const HeroBusiness = () => {
  const t = useTranslations("HeroBusiness");

  const { ref: smartphoneRef, inView: smartphoneInView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex h-[75vh] max-h-[1080px] flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 md:h-screen">
      {/* Subtitle Image with Motion */}
      <motion.div
        className="mb-2 pt-0"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero/wilkommen.png"
          alt={t("subtitleAlt")}
          width={400}
          height={100}
          className="mt-40 "
        />
      </motion.div>

      {/* Center Text */}
      <motion.p
        className="text-4xl font-bold text-black dark:text-white md:text-7xl"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        {t("mainText")}
        <span className="font-normal">{t("mainTextSpan")}</span>
      </motion.p>
      <motion.p
        className="pb-0 text-2xl font-light text-black dark:text-white"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        {t("subText")}
      </motion.p>

      {/* Single Smartphone Frame */}
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          width={756}
          height={396}
          src="/images/business/hero-business.webp"
          alt={t("smartphoneAlt")}
          objectFit="cover"
          className="p-20"
        />
      </div>
    </section>
  );
};

export default HeroBusiness;
