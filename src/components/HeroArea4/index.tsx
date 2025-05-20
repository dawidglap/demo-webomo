"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";


const Hero4 = () => {
  const t = useTranslations("Hero3");

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    <div className="w-full overflow-x-hidden">
    
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
        <p className="md:mt-20 mt-10 text-3xl font-bold text-black dark:text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl 3xl:text-5xl">
          {t("mainText")}
        </p>
        <p className=" bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text p-2 text-center text-3xl font-bold leading-none text-transparent md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl 3xl:text-5xl">
          {t("subHeadline")}
        </p>
        <p className="md:text-md pb-0 text-xl text-black dark:text-white lg:text-lg xl:text-lg 2xl:text-2xl 3xl:mt-4 3xl:text-4xl">
          {t("subText")}
        </p>
        <div className="mt-2 inline-block rounded-full border-2 border-black px-4 py-1 text-sm font-semibold text-black dark:text-white dark:border-white">
  {t("badge")}
</div>

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
      {/* Social Icons */}
<motion.div
  className="mt-12 flex items-center justify-center gap-6"
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.8 }}
>
  <FaFacebook size={26} className="text-gray-700 dark:text-gray-300  " />
  <FaInstagram size={26} className="text-gray-700 dark:text-gray-300  " />
  <FaLinkedin size={26} className="text-gray-700 dark:text-gray-300  " />
  <FaTiktok size={26} className="text-gray-700 dark:text-gray-300   " />
  <FaYoutube size={26} className="text-gray-700 dark:text-gray-300  " />
</motion.div>

    </section>
    </div>
  );
};

export default Hero4;
