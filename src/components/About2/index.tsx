"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import shooting from "../../../public/images/about/shooting.png";

const About2 = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section id="about" className="relative pt-[150px]">
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={textRef}
              className="lg:ml-auto lg:max-w-[510px]"
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                Shooting
              </h2>
              <p className="mb-[20px] text-base leading-relaxed text-body dark:text-slate-400">
                Wir erstellen für Sie in einem{" "}
                <span className="font-bold"> ganztägigen</span> Fotoshooting
                eine umfassende Auswahl an Motiven für Ihre Social Media Kanäle.
                Egal, ob für Dienstleistungen, Produkte, Objekte oder vieles
                mehr. Wir stellen sicher, dass Ihre Marke wirkungsvoll und
                zielgerichtet präsentiert wird.
              </p>
              <Link
                href="#"
                className="inline-block rounded-full bg-primary px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90"
              >
                Know More
              </Link>
            </motion.div>
          </div>
          {/* Right Section with Gradient Card and Image */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={cardRef}
              className="relative z-10 mx-auto mb-14 w-full max-w-[470px] rounded-xl bg-gradient-to-r from-[#FEFBEB] to-purple-300 p-6 shadow-xl dark:from-indigo-800 lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={cardInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Showroom
                </h2>
                <p className="text-body dark:text-slate-400">
                  Individueller Shooting bei Ihnen vor Ort.
                </p>
              </div>
              <motion.div
                className="overflow-hidden rounded-xl"
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Image
                  src={shooting}
                  alt="Shooting image"
                  layout="responsive"
                  className="rounded-[18px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About2;