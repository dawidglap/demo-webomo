"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About3 = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section id="about" className="relative  mb-[100px] pt-[100px]">
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Section with Single Video */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={videoRef}
              className="relative mx-auto mb-14 w-full max-w-[500px] rounded-xl  shadow-xl lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={videoInView ? "visible" : "hidden"}
              variants={videoVariants}
            >
              <video
                src="/images/about/drone-video1.mp4"
                autoPlay
                muted
                loop
                className="w-full rounded-xl object-cover shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={textRef}
              className="lg:ml-auto lg:max-w-[510px]"
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                Videos
              </h2>
              <p className="mb-[20px] text-base leading-relaxed text-body dark:text-slate-400">
                Einen ganztägigen Videodreh, bei dem wir Filmmaterial Ihrer
                Firma - Räumlichkeiten - Interviews - Kunden Feedbacks und
                vieles mehr aufnehmen und erstellen. Wir liefern Ihnen Aufnahmen
                in <span className="font-bold"> Kinoqualität</span>
                die Ihre Marke authentisch und eindrucksvoll präsentieren.
              </p>
              <Link
                href="#"
                className="inline-block rounded-full bg-primary px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90"
              >
                Know More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About3;
