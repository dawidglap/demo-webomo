"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutBusinessOne = () => {
  const t = useTranslations("AboutBusinessOne");

  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.disconnect();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
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

  return (
    <motion.section
      ref={sectionRef}
      id="leistungen"
      className="relative bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 py-[80px] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container lg:max-w-[1200px]">
        <h1 className="mb-20 text-center text-4xl font-semibold text-black dark:text-white">
          <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold leading-none text-transparent dark:from-purple-900 dark:to-pink-300">
            {t("subHeadline")}
          </span>
        </h1>
        <p className="mx-auto mb-12 mt-[-60px] max-w-[768px] text-center text-lg font-light leading-relaxed text-black dark:text-gray-300 md:text-2xl">
          {t("subHeadlinedescription")}
        </p>
        <div className="-mx-4 flex flex-wrap-reverse items-center justify-between">
          {/* Left Section with Single Image */}
          <div className="w-full px-4 py-8 xxs:block md:py-0 lg:w-1/2">
            <motion.div
              className="relative z-10 mx-auto mb-14 w-full max-w-[510px] rounded-[30px] shadow-2xl lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <Image
                src="/images/business/placeholderHero.webp"
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
              animate={sectionInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                {t("title")}
              </h2>
              <p className="mb-[20px] text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                {t("description")}
              </p>
              <Link
                href="#"
                className="mb-8 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:from-indigo-500 dark:to-purple-400 md:text-xl"
              >
                {t("learnMore")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutBusinessOne;
