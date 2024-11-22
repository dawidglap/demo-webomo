"use client";
import React, { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import AboutEnd from "@/components/AboutEnd";
import Screens from "@/components/Screens";
import { CompareDemo } from "@/components/Compare";

const Designs = () => {
  const containerRef = useRef(null); // Ref for the ContainerScroll
  const [containerInView, setContainerInView] = useState(false); // Track visibility
  const [videoError, setVideoError] = useState(false); // Track video load errors

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6, // Trigger when 60% of the element is visible
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
      <div className="flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-50 via-purple-50 to-white dark:from-slate-900  dark:via-gray-900  dark:to-black">
        <div ref={containerRef}>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="mb-20 mt-[-3em] text-4xl font-semibold text-black dark:text-white">
                  Passend für jede <br />
                  <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold leading-none text-transparent dark:from-purple-300 dark:to-pink-300 md:text-[6rem]">
                    Branche
                  </span>
                </h1>
                <p className="mx-auto mb-12 mt-[-60px] max-w-[768px] text-lg font-light leading-relaxed text-black dark:text-gray-300 md:text-2xl">
                  Du wählst das Design aus und wir kümmern uns um die Umsetzung
                  und Planung deiner Inhalte.
                </p>
              </>
            }
          >
            {containerInView ? ( // Lazy-load video only when in view
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
                Video konnte nicht geladen werden. Bitte überprüfe das Format.
              </div>
            )}
          </ContainerScroll>
        </div>
        <Link
          href="#"
          className="mb-20 mt-[-200px] inline-flex h-[60px] cursor-pointer items-center rounded-full bg-[#000] px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-[#ffffff] dark:text-[#000] dark:hover:bg-[#afafaf]"
        >
          Jetzt starten
        </Link>
      </div>
      <Screens />

      <div className="container mt-20">
        <div
          className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Vorher & Nachher
          </h2>
          <p className="mb-10 text-base text-body dark:text-slate-400">
            Der Unterschied, den wir machen, ist deutlich spürbar, denn unsere
            Arbeit zeichnet sich durch herausragende Qualität, Präzision und
            Hingabe aus. Überzeug dich selbst mit Vorher und Nachher Funktion.
          </p>

          <CompareDemo />
        </div>
      </div>
      <AboutEnd />
    </>
  );
};

export default Designs;
