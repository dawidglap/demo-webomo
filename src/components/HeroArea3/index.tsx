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
    <section className="relative  flex h-screen max-h-[1080px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 dark:from-slate-900 dark:to-slate-800">
      {/* Wrapper to evenly distribute content */}
      <div className="flex h-full w-full flex-col items-center justify-evenly">
        {/* Subtitle Image with Motion */}
        <motion.div
          className="mb-2 "
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/hero/wilkommen.png"
            alt={t("subtitleAlt")}
            width={360} // Reduced width by 10%
            height={90} // Reduced height by 10%
            className=" pt-10 2xl:pt-16"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          {/* Adjust text sizes responsively */}
          <p className="text-2xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl">
            {t("mainText")}
          </p>
          <p className="pb-0 text-lg font-light text-black dark:text-white md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl">
            {t("subText")}
          </p>
          <span className="mt-4 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-center text-2xl font-bold leading-none text-transparent md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-3xl">
            {t("subHeadline")}
          </span>
        </motion.div>

        {/* Smartphone Frames */}
        <div className="relative flex h-auto w-full items-end justify-center">
          {/* Left Smartphone */}
          <motion.div
            className="absolute bottom-0 left-[15%] h-[99px] w-[82px] overflow-hidden border-b-8 border-black pl-10 xxs:left-[16%] xxs:flex 
             xxs:h-[110px]  xxs:w-[91px] xs:left-[15%] 
             xs:h-[138px] xs:w-[115px] sm:left-[14%] 
             sm:h-[184px] sm:w-[153px] md:-left-[-18%] 
             md:h-[229px] md:w-[192px] lg:left-[22%] lg:h-[284px] lg:w-[229px] xl:left-[25%] 2xl:left-[27%] 3xl:left-[28%] 3xl:h-[327px] 3xl:w-[264px]"
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
              className="absolute inset-0 z-10 ml-2 md:ml-8"
            />
          </motion.div>

          {/* Center Smartphone */}
          <motion.div
            ref={smartphoneRef}
            className="relative z-[31] h-[149px] w-[107px] overflow-hidden border-b-8 border-black xxs:h-[166px] xxs:w-[119px] 
             xs:h-[208px] xs:w-[148px] 
             sm:h-[277px] sm:w-[198px] 
             md:h-[346px] md:w-[248px] 
             lg:h-[358px] lg:w-[253px]
             3xl:h-[393px] 3xl:w-[278px]"
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
            className="absolute  bottom-0 right-[15%] h-[99px]  w-[82px] overflow-hidden border-b-8 border-black 
            xxs:right-[16%]  xxs:flex xxs:h-[110px] 
            xxs:w-[91px] xs:right-[15%] xs:h-[138px] 
            xs:w-[115px] sm:right-[14%] sm:h-[184px] 
            sm:w-[153px] md:-right-[-18%] md:h-[229px] md:w-[192px] lg:right-[22%] lg:h-[284px] lg:w-[229px] xl:right-[25%] 2xl:right-[27%]  3xl:right-[28%] 3xl:h-[327px] 3xl:w-[264px]"
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
              className="absolute inset-0 z-10  -ml-2 md:-ml-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
