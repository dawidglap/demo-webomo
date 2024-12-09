"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroAboutUs = () => {
  const t = useTranslations("HeroAboutUs");

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex h-[100vh] max-h-[1080px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 py-20 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 px-6 lg:flex-row lg:gap-16">
        {/* Text Section */}
        <motion.div
          className="w-full text-center lg:w-1/2 lg:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="mt-20 text-4xl font-bold text-black dark:text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl 3xl:text-7xl">
            {t("title")}
          </h1>
          <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text py-2 text-4xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-7xl">
            {t("subHeadline")}
          </p>
          <p className="font-base mt-2 text-black dark:text-white">
            {t("mission")}
          </p>
          <motion.div
            className="mt-6"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <a
              href="/webomo-business"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400"
            >
              {t("cta")}
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Image
            src="/images/about/team.webp"
            alt="Team Photo"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
