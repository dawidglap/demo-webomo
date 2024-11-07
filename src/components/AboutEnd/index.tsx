"use client";
import React from "react";
import AboutSmartphone from "../../../public/images/about/about-smartphone.png";
import Mac from "../../../public/images/about/mac.png";
import Image from "next/image";

const AboutEnd = () => {
  return (
    <section className="mb-10 flex flex-col items-center overflow-hidden bg-white px-4 py-28 dark:bg-[#15182A]">
      {/* Main Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
        Ein Ziel dein Erfolg
      </h2>

      {/* Main Container with Rounded Background */}
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-between rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-8 dark:from-slate-700 dark:to-black md:flex-row md:p-16">
        {/* Text and Call-to-Action */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Storys & Posts
          </h3>
          <p className="mb-6 text-black dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
          </p>
          <button className="hover:bg-gray-800 dark:hover:bg-gray-200 rounded-2xl bg-black px-6 py-3 text-white dark:bg-white dark:text-black">
            Kostenlose Beratung
          </button>
        </div>

        {/* Device Image Placeholders */}
        <div className="relative w-full md:w-auto">
          {/* Laptop Image - Positioned in the top-right on desktop */}
          <div className="hidden w-[250px] sm:w-[200px] md:absolute md:right-28 md:top-[-0%] md:block md:w-[240px] lg:w-[260px] xl:w-[460px]">
            <Image
              src={Mac}
              alt="Placeholder Laptop"
              className="relative z-10 mx-auto mt-8 rounded-md  md:mt-0"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Smartphone Image - Positioned at the bottom-right on desktop */}
          <div className="absolute bottom-[-140px] right-10 hidden w-[250px] rotate-[15deg] md:block lg:w-[150px] xl:w-[260px]">
            <Image
              src={AboutSmartphone}
              alt="Smartphone Image"
              className="rounded-md "
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Smartphone Image for Mobile - Positioned below the container */}
      <div className="z-50 mt-[-6em] w-[250px] rotate-[25deg] sm:w-[200px] md:hidden">
        <Image
          src={AboutSmartphone}
          alt="Smartphone Image for Mobile"
          className="mx-auto rounded-md"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default AboutEnd;
