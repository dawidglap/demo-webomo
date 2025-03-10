"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import shooting from "../../../public/images/about/shooting.webp";

const About2Hiver = () => {
  const t = useTranslations("About2Hiver");

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section id="about" className="relative pt-[150px]">
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-col-reverse flex-wrap items-center justify-between lg:flex-row">
          {/* Left Section (Text Section) */}
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
                {t("description")}
              </p>
              <Link
                href="/kontakt"
                className="inline-block rounded-full bg-black px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:text-xl"
              >
                {t("learnMore")}
              </Link>
            </motion.div>
          </div>

          {/* Right Section (Image Card with Gradient Background) */}
          <div className="w-full px-4 blur-xl lg:w-1/2">
            <motion.div
              ref={cardRef}
              className="relative z-10 mx-auto mb-14 w-full max-w-[470px] rounded-[30px] bg-gradient-to-r from-[#FEFBEB] to-green-300 p-6 shadow-xl dark:from-indigo-800 md:min-h-[450px] lg:mx-0 lg:mb-0 lg:ml-auto"
              initial="hidden"
              animate={cardInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  {t("cardTitle")}
                </h2>
                <p className="pt-1 text-lg text-slate-600 dark:text-slate-300 md:text-xl">
                  {t("cardSubtitle")}
                </p>
              </div>
              <motion.div
                className="overflow-hidden rounded-xl"
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Image
                  src={shooting}
                  alt={t("imageAlt")}
                  layout="responsive"
                  className="rounded-[18px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About2Hiver;
