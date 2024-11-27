"use client";

import React from "react";
import Image from "next/image";

const WebomoBusinessOnboarding = () => {
  return (
    <section className="flex h-screen bg-gradient-to-r from-slate-900 from-50% to-white to-50% px-4 dark:bg-gray-900 sm:px-8 lg:px-16">
      <div className=" lg:gap16 gap- container mx-auto flex flex-wrap items-center lg:flex-nowrap">
        {/* Left Section */}
        <div className="flex h-screen flex-col justify-center bg-gradient-to-r from-slate-900  to-slate-600 lg:w-1/2">
          {/* Logo */}
          <div className="mb-8 text-center lg:text-left">
            {/* <Image
              src="/images/webomo-logo.png"
              alt="Webomo Logo"
              width={200}
              height={50}
              className="mx-auto lg:mx-0"
            /> */}
            <span className="ms:0 relative text-4xl font-bold tracking-wider text-white transition-all duration-300 md:ms-10 md:text-[48px]">
              Webomo
            </span>
          </div>

          {/* Card */}
          <div className="m-0 rounded-xl bg-cyan-100 p-8 shadow-lg dark:bg-gray-800 md:m-10">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Affiliate Package
            </h3>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Discover the exclusive benefits included in your Webomo Affiliate
              Package:
            </p>

            {/* Features List */}
            <ul className="mb-6 space-y-4">
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                Dedicated dashboard for tracking
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                Weekly reports and insights
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                Personalized affiliate marketing support
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                Access to premium resources
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-green-500"></span>
                24/7 support from our team
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          {/* Thank You Message */}
          <div className="  p-8 ">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Grazie per aver partecipato al meeting onboarding!
            </h3>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Ti ringraziamo per la fiducia e ti congratuliamo per entrare a far
              parte della famiglia Webomo. Siamo entusiasti di supportarti nel
              tuo percorso e di aiutarti a ottenere il massimo dal tuo programma
              Affiliate.
            </p>

            {/* CTA Button */}
            <button
              aria-label="Start now"
              className="block w-full rounded-xl bg-black px-6 py-3 text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              INIZIA ORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebomoBusinessOnboarding;
