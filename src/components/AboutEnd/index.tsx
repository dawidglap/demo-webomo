"use client";
import React from "react";
import Popcorn from "../../../public/images/about/popcorn.png";
import Image from "next/image";

const AboutEnd = () => {
  return (
    <section className="mb-0 flex flex-col items-center overflow-hidden bg-white px-4 py-28 dark:bg-[#15182A]">
      {/* Main Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
        Ein Ziel dein Erfolg
      </h2>

      {/* Main Container with Rounded Background */}
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[#ECE7FE] via-purple-200 to-[#B4A2E0] p-8 dark:from-slate-700 dark:to-black md:flex-row md:p-16">
        {/* Text and Call-to-Action */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Mehr erreichen mit webomo
          </h3>
          <p className="mb-6 text-black dark:text-white">
            Wir steigern Emotionen bei deiner Zielgruppe.Deine Inhalte wie
            Bilder,Videos und Content werden in{" "}
            <span className="font-bold">Hollywood-Kinoqualität</span> erstellt.
            Die Kampagnen deiner Produkte & Dienstleistungen sind auf einem
            anderen Niveau.
          </p>
          <button className="hover:bg-gray-800 dark:hover:bg-gray-200 rounded-2xl bg-black px-6 py-3 text-white dark:bg-white dark:text-black">
            Loslegen
          </button>
        </div>

        {/* iPhone Frame with Video - Positioned at the right side */}
        <div className="relative hidden md:block">
          {/* <div className="relative  h-[234px] w-[108px] overflow-hidden">
            <Image
              src="/images/screens/mobile-frame.png"
              alt="mobile frame"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-10"
            />
            <video
              src="/images/about/night-video.mp4" // replace with actual video path
              autoPlay
              muted
              loop
              className="absolute left-[1px] top-[0px] z-20  h-[231px] w-[106px] rounded-[18px] object-cover"
            />
          </div> */}
        </div>

        {/* Smartphone Image - Positioned at the bottom-right on desktop */}
        <div className="absolute bottom-[-10px] right-10 hidden w-[250px] rotate-[0deg] md:block md:w-[200px] lg:w-[260px] xl:w-[300px]">
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
