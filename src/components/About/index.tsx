"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import screen2 from "../../../public/images/about/autumn-post.png";

const About = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the entire section
  const [sectionInView, setSectionInView] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.disconnect(); // Disconnect after triggering once
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Fallback: Ensure mediaLoaded is true for all media if not loaded within 2 seconds
    const fallbackTimeout = setTimeout(() => {
      setMediaLoaded({ 0: true, 1: true, 2: true });
    }, 2000);

    return () => {
      sectionObserver.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  const handleMediaLoaded = (index) => {
    setMediaLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const allMediaLoaded = Object.values(mediaLoaded).every((loaded) => loaded);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const smartphoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      id="leistungen"
      className="relative pt-[150px]"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container lg:max-w-[1120px]">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Section with Smartphones */}
          <div className="hidden w-full px-4 xxs:block lg:w-1/2">
            <motion.div
              className="relative z-10 mx-auto mb-14 w-full max-w-[470px] rounded-[30px] bg-gradient-to-r from-indigo-200 to-purple-300 p-6 pb-10 shadow-2xl dark:from-sky-900 md:min-h-[450px] lg:mx-0 lg:mb-0"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-8 pt-2 text-center text-3xl font-bold text-black dark:text-white md:pt-4">
                Wöchentlich
              </h2>
              <div className="mt-10 flex items-center justify-between gap-4">
                {[
                  {
                    type: "video",
                    src: "/images/about/night-video.mp4",
                    label: "Reels",
                  },
                  { type: "image", src: screen2, label: "Posts" },
                  {
                    type: "video",
                    src: "/images/about/termin-video.mp4",
                    label: "Stories",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex h-[208px] w-[96px] flex-col items-center overflow-hidden sm:h-[260px] sm:w-[120px]"
                    custom={index}
                    initial="hidden"
                    animate={
                      sectionInView && mediaLoaded[index] ? "visible" : "hidden"
                    }
                    variants={smartphoneVariants}
                  >
                    <p className="mb-2 text-center text-lg text-slate-600 dark:text-slate-300 md:text-xl">
                      {item.label}
                    </p>
                    <div className="relative h-[180px] w-[80px] overflow-hidden sm:h-[234px] sm:w-[108px]">
                      <Image
                        src="/images/screens/mobile-frame.png"
                        alt="mobile frame"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-10"
                      />
                      {item.type === "video" ? (
                        <video
                          playsInline
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          className="absolute left-[0px] top-[0px] h-[172px] w-[80px] rounded-[18px] object-cover sm:h-[220px] sm:w-[107px]"
                          onLoadedData={() => handleMediaLoaded(index)}
                        />
                      ) : (
                        <Image
                          src={item.src}
                          alt="content image"
                          layout="fill"
                          className="absolute left-[0px] top-[0px] h-[140px] w-[60px] rounded-[18px] object-cover sm:h-[230px] sm:w-[107px]"
                          onLoad={() => handleMediaLoaded(index)}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              ref={textRef}
              className="lg:ml-auto lg:max-w-[510px]"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                Stories & Posts
              </h2>
              <p className="mb-[20px] text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
                Wir erstellen packende Stories und Beiträge auf Kino- und
                Hollywood-Niveau, die Ihre Marke perfekt in Szene setzen. Webomo
                übernimmt die komplette Content-Erstellung und Veröffentlichung
                auf Ihren Social-Media-Kanälen – und das wöchentlich für die
                kommenden
                <span className="font-bold"> 12 Monate</span>.
              </p>
              <Link
                href="#"
                className="inline-block rounded-full bg-black px-8 py-[10px] text-base font-medium text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-indigo-200 md:text-xl"
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

export default About;
