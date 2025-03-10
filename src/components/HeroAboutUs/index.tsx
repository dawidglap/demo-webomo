"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroAboutUs = () => {
  const t = useTranslations("HeroAboutUs");
  const controls = useAnimation();

  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect on scroll
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 py-32 dark:from-[#0D0D0D] dark:via-[#1a1a1a] dark:to-[#262626] md:h-[100vh] md:max-h-[1080px]"
      style={{
        transform: `translateY(${offsetY * 0.1}px)`, // Parallax effect
      }}
    >
      {/* Moving Light Beam */}
      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulsing Radial Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.03),_transparent)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent)]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col-reverse items-center px-2 text-center md:px-4">
        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full"
        >
          <h1 className="relative mt-10 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            {t("title")}

            {/* Animated Glow */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
          </h1>

          {/* Subheadline with gradient and soft glow */}
          <motion.p
            className="relative mt-4 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text pb-3 text-4xl font-bold text-transparent dark:from-purple-400 dark:to-pink-500 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            }}
          >
            {t("subHeadline")}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-6 px-6 text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 1 } }}
          >
            {t("mission")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
