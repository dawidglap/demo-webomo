"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const smartphoneRefs = useRef([]); // Array of refs for each smartphone
  const [isInView, setIsInView] = useState(Array(5).fill(true)); // Default to true as a fallback
  const [mediaLoaded, setMediaLoaded] = useState(Array(5).fill(true)); // Default to true as a fallback

  useEffect(() => {
    const observers = smartphoneRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView((prev) => {
              const updated = [...prev];
              updated[index] = true; // Mark the current smartphone as in view
              return updated;
            });
            observer.disconnect(); // Disconnect the observer
          }
        },
        { threshold: 0.6 },
      );

      observer.observe(ref);

      // Fallback to ensure visibility if the observer doesn't trigger
      setTimeout(() => {
        setIsInView((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, 1000); // 1 second fallback

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleMediaLoaded = (index) => {
    setMediaLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });

    // Fallback to ensure media is marked as loaded
    setTimeout(() => {
      setMediaLoaded((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, 1500); // 1.5 seconds fallback
  };

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
        delay: index * 0.4, // Add delay based on index
        ease: "easeOut",
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const smartphones = [
    {
      src: "/images/webomo-videos/video-left.mp4",
      zIndex: "z-10",
      mt: "mt-24",
      hideOnMobile: true, // Hide on mobile
      hideOnXXS: true, // Hide on xxs
    },
    {
      src: "/images/webomo-videos/video-center-left.mp4",
      zIndex: "z-30",
      mt: "mt-12",
      hideOnMobile: false,
      hideOnXXS: true, // Hide on xxs
    },
    {
      src: "/images/webomo-videos/video-center.mp4",
      zIndex: "z-[31]",
      mt: "mt-0",
      hideOnMobile: false,
      hideOnXXS: false, // Show only this one on xxs
    },
    {
      src: "/images/webomo-videos/video-center-right.mp4",
      zIndex: "z-20",
      mt: "mt-12",
      hideOnMobile: false,
      hideOnXXS: true, // Hide on xxs
    },
    {
      src: "/images/webomo-videos/video-right.mp4",
      zIndex: "z-10",
      mt: "mt-24",
      hideOnMobile: true, // Hide on mobile
      hideOnXXS: true, // Hide on xxs
    },
  ];

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
        {smartphones.map((item, index) => (
          <motion.div
            ref={(el) => (smartphoneRefs.current[index] = el)}
            key={index}
            className={`relative ${item.zIndex} ${item.mt} ${
              item.hideOnXXS
                ? "hidden xs:flex"
                : item.hideOnMobile
                  ? "hidden lg:flex"
                  : "flex"
            } h-[240px] w-[112px] overflow-hidden rounded-2xl sm:h-[256px] sm:w-[117px] md:h-[300px] md:w-[140px] lg:h-[374px] lg:w-[176px]`}
            initial="hidden"
            animate={
              isInView[index] && mediaLoaded[index] ? "visible" : "hidden"
            }
            variants={smartphoneVariants}
            custom={index}
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
                src={item.src}
                autoPlay
                muted
                loop
                className="absolute right-[0%] top-[0%] h-[100%] w-[100%] rounded-[21px] object-cover md:top-[2%] lg:h-[97%] lg:w-[97%]"
                onLoadedData={() => handleMediaLoaded(index)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
