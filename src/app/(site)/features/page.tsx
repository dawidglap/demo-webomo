"use client";

import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const HeroArea = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <section
        id="home"
        className="flex h-[100vh] items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-white pt-[165px] dark:from-slate-900 dark:to-black"
      >
        <div className="container text-center lg:max-w-[1305px] lg:px-10">
          {/* Titolo al centro */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-7xl">
            Unsere
            <span className="inline bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-transparent dark:from-purple-300 dark:to-pink-300">
              {" "}
              Leistungen{" "}
            </span>
          </h1>

          {/* Sotto il titolo, il video */}
          <div className="mb-6">
            <button
              onClick={() => setToggler(!toggler)}
              className="inline-flex items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
            >
              Guarda i nostri lavori
            </button>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/watch?v=HXHphpDJ9T0&pp=ygULaW50cm8gdmlkZW8%3D",
              ]}
            />
          </div>

          {/* Pulsante per una consulenza gratuita */}
          <Link
            href="#"
            className="inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
          >
            Kostenlose Beratung
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
