"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const HeroArea = () => {
  const [toggler, setToggler] = useState(false);

  // Controls for fade-out animation
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger fade-out as soon as 20% of the Hero section is out of view
    triggerOnce: false,
  });

  // Update animation based on visibility
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants for staggered effect
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <motion.section
      id="home"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="dark:via-gray-900 flex h-[100vh] items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-white pt-[165px] dark:from-slate-900 dark:to-black"
    >
      <div className="container lg:max-w-[1305px] lg:px-10">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div className="hidden w-1/4 px-4 lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                width={361}
                height={546}
                src={"/images/hero/hero-light.png"}
                alt="hero image"
                className="mx-auto max-w-full"
              />
            </motion.div>
          </div>

          {/* Staggered animation for title, subtitle, and button */}
          <motion.div
            className="w-full px-4 text-center lg:w-1/2"
            variants={containerVariants} // Apply stagger effect to children
          >
            <motion.h1
              className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-7xl"
              variants={itemVariants} // Staggered item
            >
              Your Social Media
              <span className="inline bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-transparent dark:from-purple-300 dark:to-pink-300">
                {" "}
                Expert{" "}
              </span>
            </motion.h1>
            <motion.p
              className="dark:text-gray-300 mx-auto mb-6 max-w-[475px] text-lg font-light leading-relaxed text-body md:text-2xl"
              variants={itemVariants} // Staggered item
            >
              Unlock powerful social media strategies designed to grow your
              online presence.
            </motion.p>

            <motion.div variants={itemVariants} whileHover={buttonHover}>
              <Link
                href="#"
                className="inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
              >
                Kostenlose Beratung
              </Link>
            </motion.div>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/watch?v=HXHphpDJ9T0&pp=ygULaW50cm8gdmlkZW8%3D",
              ]}
            />
          </motion.div>

          <div className="hidden w-1/4 px-4 lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                width={361}
                height={546}
                src={"/images/hero/hero-light-2.png"}
                alt="hero image"
                className="mx-auto max-w-full"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-6 block w-full px-4 lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              width={361}
              height={546}
              src={"/images/hero/hero-light.png"}
              alt="hero image"
              className="mx-auto max-w-full p-16"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroArea;
