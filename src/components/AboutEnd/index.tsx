"use client";

import React, { useEffect, useRef, useState } from "react";
import Popcorn from "../../../public/images/about/popcorn.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AboutEnd = () => {
  const t = useTranslations("AboutEnd");

  const videoRef = useRef(null); // Ref for the video
  const frameRef = useRef(null); // Ref for the frame container
  const [isInView, setIsInView] = useState(false); // State to track if the video is in view
  const [videoLoaded, setVideoLoaded] = useState(false); // State to track if the video is loaded

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Mark as in view
          observer.disconnect(); // Disconnect observer after visibility is triggered
        }
      },
      { threshold: 0.6 },
    );

    if (frameRef.current) {
      observer.observe(frameRef.current);

      // Fallback: If the observer doesn't trigger within 1 second, set visibility
      setTimeout(() => {
        if (!isInView) setIsInView(true);
      }, 1000);
    }

    return () => {
      observer.disconnect();
    };
  }, [isInView]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true); // Mark video as loaded
  };

  const shouldDisplay = isInView || videoLoaded; // Ensure fallback for reliable display

  return (
    <section className="mb-0 flex flex-col items-center overflow-hidden bg-white px-4 py-20 dark:bg-[#15182A]">
      {/* Main Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:mb-16 md:text-4xl">
        {t("mainTitle")}
      </h2>

      {/* Main Container with Rounded Background */}
      <div className="relative flex w-full max-w-3xl flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[#ECE7FE] via-purple-200 to-[#B4A2E0] px-8 py-4 shadow-xl dark:from-slate-700 dark:to-black md:flex-row md:px-16 md:py-8">
        {/* Text and Call-to-Action */}
        <div className="text-center md:max-w-md md:text-left lg:max-w-sm">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            {t("title")}
          </h3>
          <p className="mb-6 text-base text-slate-600 dark:text-slate-300 md:text-xl">
            {t("description.part1")}{" "}
            <span className="font-bold">{t("description.bold")}</span>{" "}
            {t("description.part2")}
          </p>
          <Link
            href="/kontakt"
            className="rounded-full bg-black px-6 py-3 text-base text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 md:text-xl"
          >
            {t("cta")}
          </Link>
        </div>

        {/* iPhone Frame with Video - Positioned at the right side */}
        <div
          ref={frameRef}
          className={`relative hidden transition-opacity duration-500 md:block ${
            shouldDisplay ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative left-[100%] hidden h-[288px] w-[140px] overflow-hidden lg:block">
            <Image
              src="/images/screens/mobile-frame.png"
              alt={t("frameAlt")}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10 shadow-lg"
            />
            <video
              ref={videoRef}
              playsInline
              src={t("videoSrc")}
              autoPlay
              muted
              loop
              onLoadedData={handleVideoLoaded} // Trigger when the video is loaded
              className="absolute left-[0px] top-[0px] h-[284px] w-[136px] rounded-[22px] object-cover"
            />
          </div>
        </div>

        {/* Smartphone Image - Positioned at the bottom-right on desktop */}
        <div className="absolute bottom-[130px] right-10 hidden w-[250px] rotate-[0deg] md:block md:w-[225px] lg:w-[260px] xl:w-[300px]">
          <Image
            src={Popcorn}
            alt={t("popcornAlt")}
            className="rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEnd;
