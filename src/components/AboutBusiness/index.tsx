"use client";

import React from "react";
import Image from "next/image";

const AboutBusiness = () => {
  return (
    <section className="relative bg-white px-6 py-12 dark:bg-black sm:py-16 lg:py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Images */}
        <div className="relative flex-shrink-0 lg:order-1 lg:w-1/2">
          {/* Large Image (Quadrata) */}
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg shadow-lg sm:h-[400px] sm:w-[400px]">
            <Image
              src="/images/placeholder-image.png" // Placeholder immagine grande
              alt="Placeholder 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Small Image (Rettangolare) */}
          <div className="relative left-[200px] top-[-80px] h-[150px] w-[200px] overflow-hidden rounded-lg border-4 border-white shadow-lg dark:border-slate-900 sm:h-[180px] sm:w-[250px]">
            <Image
              src="/images/placeholder-image.png" // Placeholder immagine piccola
              alt="Placeholder 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl text-center lg:w-1/2 lg:text-left">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
            Schließe dich unserer Community an.
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Egal ob Content-Creator, Coaches oder ein einfacher Instagram
            Benutzer. Wir von Webomo bieten jedem die Chance, erfolgreich zu
            werden und Geld zu verdienen. Positioniere dich jetzt in unserer
            Community und verdiene Provisionen und erlebe die Flexibilität des
            Future-Works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBusiness;
