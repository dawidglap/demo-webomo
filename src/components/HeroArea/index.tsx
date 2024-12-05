"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const smartphoneRefs = useRef([]); // Array di ref per ogni smartphone
  const [isInView, setIsInView] = useState([]); // Stato per ogni telefono

  useEffect(() => {
    const observers = smartphoneRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView((prev) => {
              const updated = [...prev];
              updated[index] = true; // Attiva la visibilità per il telefono corrente
              return updated;
            });
            observer.disconnect(); // Disconnette l'observer
          }
        },
        { threshold: 0.6 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const smartphoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.4, // Aggiunge ritardo in base all'indice
        ease: "easeOut",
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative flex h-screen max-h-[1080px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 dark:from-slate-900 dark:to-slate-800">
      {/* Subtitle Image with Motion */}
      <motion.div
        className="mb-2 pt-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero/subtitle.png"
          alt="Immer und überall"
          width={400}
          height={100}
        />
      </motion.div>

      {/* Center Text */}
      <motion.p
        className="text-5xl font-bold text-black dark:text-white"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        {t("centerText")}
      </motion.p>

      {/* Smartphone Frames */}
      <div className="relative mt-10 flex items-center justify-center">
        {/* Far Left Smartphone */}
        <motion.div
          ref={(el) => (smartphoneRefs.current[0] = el)}
          className="relative z-10 -mr-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[310px] lg:w-[150px]"
          initial="hidden"
          animate={isInView[0] ? "visible" : "hidden"}
          variants={smartphoneVariants}
          custom={0}
          whileHover="hover"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              playsInline
              src="/images/webomo-videos/video-left.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
            />
          </div>
        </motion.div>

        {/* Left Smartphone */}
        <motion.div
          ref={(el) => (smartphoneRefs.current[1] = el)}
          className="relative z-30 -mr-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl xxs:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[310px] lg:w-[150px]"
          initial="hidden"
          animate={isInView[1] ? "visible" : "hidden"}
          variants={smartphoneVariants}
          custom={1}
          whileHover="hover"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              playsInline
              src="/images/webomo-videos/video-center-left.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
            />
          </div>
        </motion.div>

        {/* Center Smartphone */}
        <motion.div
          ref={(el) => (smartphoneRefs.current[2] = el)}
          className="relative z-[31] h-[240px] w-[112px] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[310px] lg:w-[150px]"
          initial="hidden"
          animate={isInView[2] ? "visible" : "hidden"}
          variants={smartphoneVariants}
          custom={2}
          whileHover="hover"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              playsInline
              src="/images/webomo-videos/video-center.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
            />
          </div>
        </motion.div>

        {/* Right Smartphone */}
        <motion.div
          ref={(el) => (smartphoneRefs.current[3] = el)}
          className="relative z-20 -ml-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl xxs:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[310px] lg:w-[150px]"
          initial="hidden"
          animate={isInView[3] ? "visible" : "hidden"}
          variants={smartphoneVariants}
          custom={3}
          whileHover="hover"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              playsInline
              src="/images/webomo-videos/video-center-right.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
            />
          </div>
        </motion.div>

        {/* Far Right Smartphone */}
        <motion.div
          ref={(el) => (smartphoneRefs.current[4] = el)}
          className="relative z-10 -ml-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[310px] lg:w-[150px]"
          initial="hidden"
          animate={isInView[4] ? "visible" : "hidden"}
          variants={smartphoneVariants}
          custom={4}
          whileHover="hover"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              playsInline
              src="/images/webomo-videos/video-right.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
