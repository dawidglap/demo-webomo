"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const Hero3 = () => {
  const t = useTranslations("Hero3");

  const { ref: smartphoneRef, inView: smartphoneInView } = useInView({
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

  const smartphoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.4, ease: "easeOut" },
    }),
    hover: { scale: 1.0, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative flex h-[70vh] max-h-[900px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 dark:from-slate-900 dark:to-slate-800 md:h-screen">
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
          className="mt-20 pt-10 2xl:pt-8"
        />
      </motion.div>

      {/* Center Text */}
      <motion.p
        className=" text-4xl font-bold text-black dark:text-white md:text-7xl"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        {t("mainText")}
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
      <span className="mt-4 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-4xl font-bold leading-none text-transparent dark:from-purple-900 dark:to-pink-300 ">
        {t("subHeadline")}
      </span>

      {/* Smartphone Frames */}
      <div className="relative flex h-full w-full items-end justify-center ">
        {/* Left Smartphone */}
        <motion.div
          className="absolute bottom-0 left-[15%]  h-[110px] w-[92px] overflow-hidden border-b-4 border-black xxs:left-[16%] xxs:flex 
         xxs:h-[122px]  xxs:w-[102px] xs:left-[15%] 
         xs:h-[153px] xs:w-[128px] sm:left-[14%] 
         sm:h-[204px] sm:w-[170px] md:-left-[-18%] 
         md:h-[255px] md:w-[213px] lg:left-[22%] lg:h-[306px] lg:w-[255px] xl:left-[25%] 2xl:left-[28%] 3xl:left-[30%]"
          custom={1}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
          whileHover="hover"
        >
          <Image
            src="/images/hero/hero-left.webp"
            alt={t("leftMobileAlt")}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Center Smartphone */}
        <motion.div
          ref={smartphoneRef}
          className="relative z-[31] h-[166px] w-[119px] overflow-hidden border-b-4 border-black xxs:h-[185px] xxs:w-[132px] 
         xs:h-[231px] xs:w-[165px] 
         sm:h-[308px] sm:w-[220px] 
         md:h-[385px] md:w-[275px] 
         lg:h-[393px] lg:w-[281px]"
          custom={2}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
          whileHover="hover"
        >
          <Image
            src="/images/hero/hero-middle.webp"
            alt={t("centerMobileAlt")}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-10"
          />
        </motion.div>

        {/* Right Smartphone */}
        <motion.div
          className="absolute bottom-0 right-[15%]  h-[110px] w-[92px] overflow-hidden border-b-4 border-black xxs:right-[16%] xxs:flex 
        xxs:h-[122px]  xxs:w-[102px] xs:right-[15%] 
        xs:h-[153px] xs:w-[128px] sm:right-[14%] 
        sm:h-[204px] sm:w-[170px] md:-right-[-18%] 
        md:h-[255px] md:w-[213px] lg:right-[22%] lg:h-[306px] lg:w-[255px] xl:right-[25%] 2xl:right-[28%] 3xl:right-[30%]"
          custom={3}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
          whileHover="hover"
        >
          <Image
            src="/images/hero/hero-right.webp"
            alt={t("rightMobileAlt")}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3;
