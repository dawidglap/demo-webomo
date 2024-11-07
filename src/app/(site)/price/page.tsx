import React from "react";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

const Price = () => {
  return (
    <>
      <div className="relative flex  h-[40rem] min-h-[100vh] w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-indigo-50 via-purple-50 to-white  antialiased dark:from-slate-900 dark:to-black">
        <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 ">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-indigo-500 to-slate-950  bg-clip-text pb-2 text-center text-4xl font-bold text-transparent dark:to-white md:pb-8 md:text-7xl">
            Finde das perfekte Abo für deinen Erfolg.
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mx-auto mt-4 max-w-lg text-center text-lg font-normal">
            Wir bieten Dir drei Pakte zur Auswahl an. Mit unserem Service
            kümmern wir uns 12 Monate lang, rund um die Uhr, um die Erstellung
            und Pflege deiner Social Media Kanäle. Wähle das Paket aus, das
            deinen individuellen Bedürfnissen am besten entspricht.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center space-x-4">
            <Link
              href="#"
              className="inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
            >
              Zu unseren Angeboten
            </Link>
          </div>
        </div>
      </div>
      <Pricing />
      <Stats />
    </>
  );
};

export default Price;
