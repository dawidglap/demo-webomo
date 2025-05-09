"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutBusinessThree = () => {
  const t = useTranslations("AboutBusinessThree");

  const videoRef = useRef(null);
  const textRef = useRef(null);

  const [videoInView, setVideoInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVideoInView(true);
        }
      });
    }, observerOptions);

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextInView(true);
        }
      });
    }, observerOptions);

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      videoObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="relative bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 md:py-[80px] md:pb-[100px] pt-[100px] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="container lg:max-w-[1200px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Section with Single Video */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={videoRef}
              className="relative mx-auto mb-14 max-h-[450px] w-full max-w-[510px] overflow-hidden rounded-[30px] shadow-xl lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={videoInView ? "visible" : "hidden"}
              variants={videoVariants}
            >
              <Image
                src="/images/business/about-business2.webp"
                alt={t("imageAlt")}
                width={510}
                height={450}
                className="rounded-[30px] object-cover"
              />
            </motion.div>
          </div>

          {/* Right Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={textRef}
              className="lg:ml-auto lg:max-w-[550px]"
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
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
                className="mb-8 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400 md:text-xl"
              >
                {t("learnMore")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutBusinessThree;
