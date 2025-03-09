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
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 dark:from-[#0D0D0D] dark:via-[#1a1a1a] dark:to-[#262626] md:h-[100vh] md:max-h-[1080px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.03),_transparent)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent)]"></div>

      <div className="container relative z-10 mx-auto flex flex-col-reverse items-center justify-between gap-10 px-0 lg:flex-row lg:gap-16">
        {/* Text Section */}
        <motion.div
          className=" w-full lg:w-1/2 "
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="mt-10 text-center text-4xl font-extrabold text-gray-900 dark:text-white md:text-left md:text-4xl lg:text-4xl">
            {t("title")}
          </h1>
          <motion.p
            className="mt-2 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text  pb-3 text-center text-4xl font-bold text-transparent dark:from-purple-400 dark:to-pink-500 md:text-left md:text-4xl lg:text-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            {t("subHeadline")}
          </motion.p>
          <p className="mt-4 px-4 text-lg text-gray-600 dark:text-gray-400">
            {t("mission")}
          </p>

          {/* <motion.div
            className="mt-8 inline-block"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <a
              href="/webomo-business"
              className="relative inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50 dark:from-purple-600 dark:to-pink-500 dark:hover:shadow-pink-500/50"
            >
              {t("cta")}
              <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-indigo-500/20 blur-lg dark:bg-pink-500/20"></span>
            </a>
          </motion.div> */}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Desktop Image (Horizontal) */}
          <div className="relative hidden overflow-hidden rounded-2xl shadow-lg lg:block">
            <Image
              src="/images/about/team.webp"
              alt="Team Photo"
              width={800}
              height={500}
              className="rounded-2xl transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-black/30"></div>
          </div>

          {/* Mobile Image (Vertical) */}
          <div className="relative block overflow-hidden rounded-2xl shadow-lg lg:hidden">
            <Image
              src="/images/about/team.webp"
              alt="Team Photo"
              width={400}
              height={600}
              className="rounded-2xl transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-black/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
