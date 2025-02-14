"use client";

import React, { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import AboutEnd from "@/components/AboutEnd";
import Screens from "@/components/Screens";
import { CompareDemo } from "@/components/Compare";
import ScreensAvantico from "@/components/ScreensAvantico";
import { useTranslations } from "next-intl";

const Designs = () => {
  const t = useTranslations("Designs");

  const containerRef = useRef(null); // Ref for the ContainerScroll
  const [containerInView, setContainerInView] = useState(false); // Track visibility
  const [videoError, setVideoError] = useState(false); // Track video load errors

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 60% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContainerInView(true); // Mark as in view
          observer.disconnect(); // Disconnect to avoid multiple triggers
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-50 via-purple-50 to-white dark:from-slate-900 dark:via-gray-900 dark:to-black">
        <div ref={containerRef}>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="mb-20 mt-[-3em] text-4xl font-semibold text-black dark:text-white">
                  {t("headline")} <br />
                  <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold leading-none text-transparent dark:from-purple-300 dark:to-pink-300 md:text-[6rem]">
                    {t("subHeadline")}
                  </span>
                </h1>
                <p className="mx-auto mb-12 mt-[-60px] max-w-[768px] text-lg font-light leading-relaxed text-black dark:text-gray-300 md:text-2xl">
                  {t("description")}
                </p>
              </>
            }
          >
            {containerInView ? (
              <video
                src="/images/webomo-videos/webomo-demo2.mp4" // Replace with actual video path
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto h-full rounded-2xl object-cover object-left-top"
                draggable={false}
                onError={() => setVideoError(true)}
              ></video>
            ) : (
              <div className="h-[300px] w-full rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
            )}
            {videoError && (
              <div className="mt-4 text-center text-red-600">
                {t("videoError")}
              </div>
            )}
          </ContainerScroll>
        </div>
        <Link
          href="/kontakt"
          className="z-[1] mb-20 mt-[-200px] inline-flex h-[60px] cursor-pointer items-center rounded-full bg-[#000] px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-[#ffffff] dark:text-[#000] dark:hover:bg-[#afafaf]"
        >
          {t("cta")}
        </Link>
      </div>
      <Screens />

      <div className="container mt-20">
        <div
          className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            {t("compareHeadline")}
          </h2>
          <p className="mb-10 text-base text-body dark:text-slate-400">
            {t("compareDescription")}
          </p>

          <CompareDemo />
        </div>
        <ScreensAvantico />
      </div>
      <AboutEnd />
    </>
  );
};

export default Designs;
