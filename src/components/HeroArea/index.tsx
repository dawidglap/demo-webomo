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

  const smartphoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 relative flex h-screen max-h-[1080px] flex-col items-center justify-center">
      {/* Title and Subtitle */}
      <h2 className="mb-2 pt-10 text-4xl font-semibold text-purple-700 dark:text-purple-300">
        Immer und überall
      </h2>
      <p className="text-5xl font-bold text-black dark:text-white">präsent</p>

      {/* Smartphone Frames */}
      <div className="relative mt-10 flex items-center justify-center">
        {/* Far Left Smartphone - Visible on screens larger than 768px */}
        <motion.div
          className="relative z-10 -mr-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
              src="/images/about/night-video.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[2%] h-[97%] w-[97%] rounded-[21px] object-cover"
            />
          </div>
        </motion.div>

        {/* Left Smartphone */}
        <motion.div
          className="xxs:flex relative z-30 -mr-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
              src="/images/about/night-video.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[2%] h-[97%] w-[97%] rounded-[21px] object-cover"
            />
          </div>
        </motion.div>

        {/* Center Smartphone */}
        <motion.div
          ref={smartphoneRef}
          className="relative z-[31] h-[240px] w-[112px] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
              src="/images/about/night-video.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[2%] h-[97%] w-[97%] rounded-[21px] object-cover"
            />
          </div>
        </motion.div>

        {/* Right Smartphone */}
        <motion.div
          className="xxs:flex relative z-20 -ml-[10px] mt-12 hidden h-[240px] w-[112px] translate-y-[10%] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
              src="/images/about/night-video.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[2%] h-[97%] w-[97%] rounded-[21px] object-cover"
            />
          </div>
        </motion.div>

        {/* Far Right Smartphone - Visible on screens larger than 768px */}
        <motion.div
          className="relative z-10 -ml-[10px] mt-24 hidden h-[240px] w-[112px] translate-y-[20%] overflow-hidden rounded-2xl sm:flex sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]"
          initial="hidden"
          animate={smartphoneInView ? "visible" : "hidden"}
          variants={smartphoneVariants}
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
              src="/images/about/night-video.mp4"
              autoPlay
              muted
              loop
              className="absolute right-[0%] top-[2%] h-[97%] w-[97%] rounded-[21px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
