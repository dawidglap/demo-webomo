"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About3 = () => {
  const t = useTranslations("About3");

  const videoRef = useRef(null);
  const textRef = useRef(null);

  const [videoInView, setVideoInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    // Video Observer
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

    // Text Observer
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
    <motion.section id="about" className="relative mb-[100px] pt-[100px]">
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Section with Single Video */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={videoRef}
              className="relative mx-auto mb-14 max-h-[450px] w-full max-w-[470px] overflow-hidden rounded-[30px] shadow-xl lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={videoInView ? "visible" : "hidden"}
              variants={videoVariants}
            >
              <video
                playsInline
                src="/images/about/drone-video2.mp4"
                autoPlay
                muted
                loop
                className="w-full rounded-xl object-cover shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={textRef}
              className="lg:ml-auto lg:max-w-[510px]"
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                {t("title")}
              </h2>
              <p className="mb-[20px] text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                {t("description.part1")}
                <span className="font-bold"> {t("description.bold")}</span>
                {t("description.part2")}
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
      </div>
    </motion.section>
  );
};

export default About3;
