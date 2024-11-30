"use client";

import React from "react";
import Image from "next/image";

const HeroBusiness = () => {
  return (
    <section className="relative h-screen max-h-[1080px] bg-gradient-to-r from-indigo-100 via-purple-50 to-cyan-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto flex h-full flex-col items-center gap-10 px-6 py-12 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="mt-20 max-w-xl text-center md:mt-0 lg:text-left">
          <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl">
            Webomo-Partner werden
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Verdiene eine Provision, wenn du Webomo Produkte verkaufst oder dein
            Webomo-Team aufbaust.
          </p>
          <div className="mt-6">
            <button className="rounded-full bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
              Jetzt starten
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" w-full max-w-lg p-5 lg:max-w-md xl:max-w-lg">
          <Image
            src="/images/business/placeholderHero.webp" // Placeholder image path
            alt="Placeholder"
            width={510}
            height={450}
            className="rounded-[30px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBusiness;
