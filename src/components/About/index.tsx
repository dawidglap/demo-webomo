"use client";
import React from "react";
import Image from "next/image";
import Graphics from "@/components/About/Graphics";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Soglia per l'immagine
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.8, // Soglia per il testo
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section id="about" className="relative pt-[150px]">
        <div className="container lg:max-w-[1120px]">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                ref={imageRef}
                className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                variants={sectionVariants}
              >
                <Image
                  width={294}
                  height={594}
                  src={"/images/about/about-1-light.png"}
                  alt="about image"
                  className="mx-auto max-w-full"
                />
                {/* SVG and Background Elements */}
                <div className="absolute right-5 top-0 -z-10">
                  {/* SVG code here */}
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                ref={textRef}
                className="lg:ml-auto lg:max-w-[510px]"
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={sectionVariants}
              >
                <span className="mb-4 block text-lg font-medium text-primary md:text-[16px]">
                  Track Audience Activities
                </span>
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                  Storys & Posts
                </h2>
                <p className="mb-[30px] text-base leading-relaxed text-body">
                  Schedule your posts for times when your audience is most
                  active. Choose from our best-time predictions, or create your
                  own publishing schedule.
                </p>
                <Link
                  href="#"
                  className="mt-8 inline-block rounded-2xl bg-primary px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Additional Content */}
          <Graphics />
        </div>
      </motion.section>
    </>
  );
};

export default About;
