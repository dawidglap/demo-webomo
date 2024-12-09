"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const OurValues = () => {
  const t = useTranslations("OurValues");

  const valueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const data = [
    {
      title: t("candidFeedbackTitle"),
      description: t("candidFeedbackDescription"),
    },
    {
      title: t("shipFastTitle"),
      description: t("shipFastDescription"),
    },
    {
      title: t("buildItTitle"),
      description: t("buildItDescription"),
    },
    {
      title: t("stayOpenTitle"),
      description: t("stayOpenDescription"),
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-6 lg:flex-row">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center border-r-2 border-indigo-100  dark:border-indigo-900 lg:w-1/2"
        >
          <Image
            src="/images/about/values.webp" // Replace with your image path
            alt="Our Values"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="mb-8 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold text-transparent">
            {t("title")}
          </h2>
          <div className="space-y-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={valueVariants}
                custom={index}
                className="text-left"
              >
                <h3 className="mb-2 text-xl font-bold text-[#400CD8] dark:text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
