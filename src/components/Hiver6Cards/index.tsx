"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaCamera,
} from "react-icons/fa";

const cardsData = [
  { icon: FaHandshake, titleKey: "leftTitle1", textKey: "left1" },
  { icon: FaChartLine, titleKey: "leftTitle2", textKey: "left2" },
  { icon: FaUsers, titleKey: "centerTitle1", textKey: "center1" },
  { icon: FaShieldAlt, titleKey: "centerTitle2", textKey: "center2" },
  { icon: FaBullhorn, titleKey: "rightTitle1", textKey: "right1" },
  { icon: FaCamera, titleKey: "rightTitle2", textKey: "right2" },
];

const Hiver6 = () => {
  const t = useTranslations("Hiver6");

  return (
    <section className="flex flex-col items-center overflow-hidden bg-[#F8FAFB] px-4 py-16 dark:bg-[#15182A]">
      {/* Title */}
      <motion.h2
        className="max-w-5xl bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>

      <motion.p
        className="mt-6 max-w-4xl text-center text-lg text-gray-700 dark:text-gray-300 md:text-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t("description")}
      </motion.p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cardsData.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="via pink-600 to purple-700 relative flex h-80 w-72 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-pink-300 to-purple-300 p-6 shadow-xl transition-transform dark:from-indigo-700 md:w-80"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Animated Gradient Ring */}
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-xl">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                  <Icon className="text-3xl text-indigo-500 dark:text-indigo-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-xl font-bold text-black dark:text-white">
                {t(card.titleKey)}
              </h3>
              {/* Description */}
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
                {t(card.textKey)}
              </p>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-indigo-400/20 opacity-0 blur-3xl transition-opacity duration-300"
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hiver6;
