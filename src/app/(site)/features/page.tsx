"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";
import About2 from "@/components/About2";
import AboutEnd from "@/components/AboutEnd";
// import videoDemo from "../../../../public/images/webomo-videos/webomo-demo.mp4";

const Features = () => {
  return (
    <>
      <div className="dark:via-gray-900 flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-50 via-purple-50 to-white  dark:from-slate-900  dark:to-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="mb-20 mt-[-3em] text-4xl font-semibold text-black dark:text-white">
                Unsere Leistungen für Ihren <br />
                <span className="mt-1 bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-4xl font-bold leading-none text-transparent dark:from-purple-300 dark:to-pink-300 md:text-[6rem]">
                  digitalen Erfolg
                </span>
              </h1>
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
          className="mb-20 mt-[-200px] inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
        >
          Kostenlose Beratung
        </Link>
      </div>
      <About />
      <About2 />
      <AboutEnd />
    </>
  );
};

export default Features;
