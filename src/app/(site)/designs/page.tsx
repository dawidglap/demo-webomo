"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";
import About2 from "@/components/About2";
import AboutEnd from "@/components/AboutEnd";
import Screens from "@/components/Screens";
import { Compare } from "@/components/ui/compare";
import { CompareDemo } from "@/components/Compare";
// import videoDemo from "../../../../public/images/webomo-videos/webomo-demo.mp4";

const Designs = () => {
  return (
    <>
      <div className="dark:via-gray-900 flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-50 via-purple-50 to-white  dark:from-slate-900  dark:to-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="mb-20 mt-[-3em] text-4xl font-semibold text-black dark:text-white">
                Passend für jede <br />
                <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold leading-none text-transparent dark:from-purple-300 dark:to-pink-300 md:text-[6rem]">
                  Branche
                </span>
              </h1>
              <p className="dark:text-gray-300 mx-auto mb-12 mt-[-60px] max-w-[768px] text-lg font-light leading-relaxed text-black md:text-2xl">
                Du wählst das Design aus und wir kümmern uns um die Umsetzung
                und Planung deiner Inhalte.
              </p>
            </>
          }
        >
          <video
            src="/images/webomo-videos/webomo-demo2.mp4" // Sostituisci con il percorso del tuo video
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          ></video>
        </ContainerScroll>
        <Link
          href="#"
          className="mb-20 mt-[-200px] inline-flex h-[60px] cursor-pointer items-center rounded-2xl bg-[#000] px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-[#ffffff] dark:text-[#000] dark:hover:bg-[#afafaf]"
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
