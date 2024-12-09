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
      image: "/images/about/rb-team.webp", // Replace with your image path
      bgColor: "bg-indigo-100 dark:bg-gray-800",
    },
    {
      title: t("growthTitle"),
      description: t("growthDescription"),
      image: "/images/about/rb-growth.webp", // Replace with your image path
      bgColor: "bg-purple-100 dark:bg-slate-900",
    },
    {
      title: t("trustedTitle"),
      description: t("trustedDescription"),
      image: "/images/about/rb-trust.webp", // Replace with your image path
      bgColor: "bg-green-100 dark:bg-blue-950",
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
              className={`rounded-lg p-6 shadow-lg  ${item.bgColor}`}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={index}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={item.image}
                  alt="Placeholder"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-left text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
