"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: smartphoneRef, inView: smartphoneInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.4, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative flex h-screen max-h-[1080px] flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-100 to-purple-300 dark:from-slate-900 dark:to-slate-800">
      {/* Subtitle Image with Motion */}
      <motion.div
        className="mb-2 pt-10"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero/subtitle.png"
          alt="Immer und überall"
          width={400}
          height={100}
          className="dark:invert"
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
        präsent
      </motion.p>

      {/* Smartphone Frames */}
      <div className="relative mt-10 flex items-center justify-center">
        {/* Far Left Smartphone - Visible on screens larger than 768px */}
        <motion.div
          className="relative z-10 -mr-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          custom={0}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
          whileHover="hover"
        >
          <div className="relative h-full w-full ">
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
          className="xxs:flex relative z-30 -mr-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          custom={1}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
          ref={smartphoneRef}
          className="relative z-[31] h-[240px] w-[112px] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          custom={2}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
          className="xxs:flex relative z-20 -ml-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          custom={3}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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

        {/* Far Right Smartphone - Visible on screens larger than 768px */}
        <motion.div
          className="relative z-10 -ml-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          custom={4}
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
