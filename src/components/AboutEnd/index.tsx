"use client";
import React from "react";
import Popcorn from "../../../public/images/about/popcorn.png";
import Image from "next/image";

const AboutEnd = () => {
  return (
    <section className="mb-0 flex flex-col items-center overflow-hidden bg-white px-4 py-20 dark:bg-[#15182A]">
      {/* Main Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:mb-16 md:text-4xl">
        Ein Ziel dein Erfolg
      </h2>

      {/* Main Container with Rounded Background */}
      <div className="relative flex w-full max-w-3xl flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[#ECE7FE] via-purple-200 to-[#B4A2E0] px-8 py-4 shadow-xl dark:from-slate-700 dark:to-black md:flex-row md:px-16 md:py-8">
        {/* Text and Call-to-Action */}
        <div className="text-center md:max-w-md md:text-left lg:max-w-sm">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Mehr erreichen mit webomo
          </h3>
          <p className="mb-6 text-base text-slate-600 dark:text-slate-300 md:text-xl ">
            Wir steigern Emotionen bei deiner Zielgruppe.Deine Inhalte wie
            Bilder,Videos und Content werden in{" "}
            <span className="font-bold">Hollywood-Kinoqualität</span> erstellt.
            Die Kampagnen deiner Produkte & Dienstleistungen sind auf einem
            anderen Niveau.
          </p>
          <button className="hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full bg-black px-6 py-3 text-base text-white dark:bg-white dark:text-black md:text-xl">
            Loslegen
          </button>
        </div>

        {/* iPhone Frame with Video - Positioned at the right side */}
        <div className="relative hidden md:block">
          <div className=" relative  left-[100%] hidden h-[288px] w-[140px] overflow-hidden lg:block">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10 shadow-lg"
            />
            <video
              playsInline
              src="/images/about/about-end.mp4" // replace with actual video path
              autoPlay
              muted
              loop
              className="absolute left-[0px] top-[0px]   h-[284px] w-[136px] rounded-[22px] object-cover"
            />
          </div>
        </div>

        {/* Smartphone Image - Positioned at the bottom-right on desktop */}
        <div className="absolute bottom-[130px] right-10 hidden w-[250px] rotate-[0deg] md:block md:w-[225px] lg:w-[260px] xl:w-[300px]">
          <Image
            src={Popcorn}
            alt="Popcorn"
            className="rounded-md "
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEnd;
