"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const Hero4 = () => {
  const t = useTranslations("Hero3");

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex h-screen max-h-[1080px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 dark:from-slate-900 dark:to-slate-800">
      {/* Subtitle Image with Motion */}
      {/* <motion.div
        className="mb-2 mt-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero/wilkommen.png"
          alt={t("subtitleAlt")}
          width={360} // Reduced width by 10%
          height={90} // Reduced height by 10%
          className="pt-10 2xl:pt-16"
        />
      </motion.div> */}

      {/* Center Text */}
      <motion.div
        className="text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <p className="mt-10 text-4xl font-bold text-black dark:text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl 3xl:text-7xl">
          {t("mainText")}
        </p>
        <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-center text-4xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-7xl">
          {t("subHeadline")}
        </p>
        <p className="md:text-md pb-0 text-2xl text-black dark:text-white lg:text-lg xl:text-lg 2xl:text-2xl 3xl:mt-4 3xl:text-4xl">
          {t("subText")}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        ref={imageRef}
        className="mt-8 flex justify-center"
        variants={imageVariants}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
      >
        <Image
          src="/images/hero/PostReels.webp"
          alt="Hero Image"
          width={800}
          height={800}
          className="w-full max-w-sm rounded-md border-b-8 border-black px-10  sm:max-w-md md:max-w-xl lg:max-w-xl xl:max-w-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero4;