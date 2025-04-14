"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutHiver = () => {
  const t = useTranslations("AboutHiver");
  const textRef = useRef(null);
  const sectionRef = useRef(null);
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
    <div className="w-full overflow-x-hidden">

    <motion.section
      ref={sectionRef}
      id="leistungen"
      className="relative pt-[-20px] md:pt-[15px]"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between md:pb-8 ">
          {/* IMAGE PART */}
          <motion.div
            className="mb-10 w-full px-4 xxs:block lg:mb-0 lg:w-1/2"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="relative mx-auto h-auto w-full max-w-[470px] overflow-hidden rounded-[30px] shadow-xl lg:mx-0">
              {/* Light mode */}
              <Image
                src="/images/hiver/light_chf.webp"
                alt="Hiver Card Light"
                width={470}
                height={450}
                className="h-auto w-full object-cover dark:hidden"
                priority
              />
              {/* Dark mode */}
              <Image
                src="/images/hiver/dark_chf.webp"
                alt="Hiver Card Dark"
                width={470}
                height={450}
                className="hidden h-auto w-full object-cover dark:block"
                priority
              />
            </div>
          </motion.div>

          {/* TEXT PART */}
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
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-black px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:text-xl"
            >
              {t("learnMore")}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default AboutHiver;
