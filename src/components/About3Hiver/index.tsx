"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CompareDemo } from "@/components/CompareDiamond";


const About3Hiver = () => {
  const t = useTranslations("About3Hiver");

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.disconnect();
        }
      });
    }, observerOptions);

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => sectionObserver.disconnect();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative mb-[100px] pt-[150px]"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container lg:max-w-[1120px]">
        <div className="md:-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Section (Image) */}
          <motion.div
  className="mb-10 w-full px-4 xxs:block lg:mb-0 lg:w-1/2"
  initial="hidden"
  animate={sectionInView ? "visible" : "hidden"}
  variants={sectionVariants}
>
  <div className="relative mx-auto h-auto w-full max-w-[470px] overflow-hidden rounded-[30px] shadow-2xl lg:mx-0">
    <CompareDemo />
  </div>
</motion.div>


          {/* Right Section (Text) */}
          <motion.div
            ref={textRef}
            className="w-full px-4 lg:ml-auto lg:w-1/2 lg:max-w-[510px]"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2>
            <p className="mb-[20px] text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              {t("description")}
            </p>
            <a
              href="/kontakt"
              className="inline-block rounded-full bg-black px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:text-xl"
            >
              {t("learnMore")}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About3Hiver;
