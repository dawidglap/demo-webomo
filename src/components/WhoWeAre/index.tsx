"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const t = useTranslations("WhoWeAre");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const data = [
    {
      title: t("smallTeamTitle"),
      description: t("smallTeamDescription"),
      image: "/images/about/dalle1.webp",
      bgColor: "bg-[#d4dafe] dark:bg-[#2d2f5b]",
      gradient:
        "bg-[linear-gradient(to_bottom,transparent_20%,#e0e7ff_80%,#d4dafe)] dark:bg-[linear-gradient(to_bottom,transparent_20%,#3a3b6f_80%,#2d2f5b)]",
    },
    {
      title: t("growthTitle"),
      description: t("growthDescription"),
      image: "/images/about/dalle2.webp",
      bgColor: "bg-[#fbc4c9] dark:bg-[#5b2d2f]",
      gradient:
        "bg-[linear-gradient(to_bottom,transparent_20%,#fde2e4_80%,#fbc4c9)] dark:bg-[linear-gradient(to_bottom,transparent_20%,#6f3b3a_80%,#5b2d2f)]",
    },
    {
      title: t("trustedTitle"),
      description: t("trustedDescription"),
      image: "/images/about/dalle3.webp",
      bgColor: "bg-[#aad8f0] dark:bg-[#2d5b5b]",
      gradient:
        "bg-[linear-gradient(to_bottom,transparent_20%,#cce7f6_80%,#aad8f0)] dark:bg-[linear-gradient(to_bottom,transparent_20%,#3a6f6f_80%,#2d5b5b)]",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12 text-4xl font-bold text-black dark:text-white">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-3xl shadow-lg ${item.bgColor}`}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={index}
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${item.gradient}`}></div>
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-[#400CD8] dark:text-purple-400">
                  {item.title}
                </h3>
                <p className="text-left text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
