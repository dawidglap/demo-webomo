"use client";
import React from "react";

const Stats = () => {
  return (
    <section className="flex flex-col items-center bg-white px-4 pb-10 pt-20 dark:bg-[#15182A]">
      {/* Main Title */}
      <h2 className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
        Werbung für dein Unternehmen
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-md text-center text-[#79808a] dark:text-[#79808a]">
        Erreiche mehr potenzielle Kunden und stärke deinen Wiedererkennungswert
        deiner Marke mit hochwertigen Marketing- Bild- und Videomaterialien.
      </p>

      {/* Stats Container */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
        {/* Stat Card 1 */}
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-indigo-100 p-4 shadow-lg dark:bg-[#33334D] md:h-60 md:w-60">
          <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 md:text-5xl">
            +37%
          </span>
          <p className="text-gray-700 mt-2 text-center dark:text-white md:text-lg">
            höhere Sichtbarkeit
          </p>
        </div>

        {/* Stat Card 2 */}
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-indigo-100 p-4 shadow-lg dark:bg-[#33334D] md:h-60 md:w-60">
          <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 md:text-5xl">
            +57%
          </span>
          <p className="text-gray-700 mt-2 text-center dark:text-white md:text-lg">
            geringere Marketingkosten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
