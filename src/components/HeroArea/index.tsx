"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const HeroArea = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <section
        id="home"
        className="dark:via-gray-900 flex h-[100vh] items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-white pt-[165px] dark:from-slate-900  dark:to-black"
      >
        <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {/* Left Image (Desktop only) - Occupies 1/4 */}
            <div className="hidden w-1/4 px-4 lg:block">
              <Image
                width={361}
                height={546}
                src={"/images/hero/hero-light.png"}
                alt="hero image"
                className="mx-auto max-w-full"
              />
            </div>

            {/* Center Content - Occupies 2/4 */}
            <div className="w-full px-4 text-center lg:w-1/2">
              {/* <span className="mb-2 block text-lg font-medium leading-tight text-black dark:text-white sm:text-[22px] xl:text-[22px]">
                Social Media Strategy, Simplified
              </span> */}
              <h1 className="mb-4  text-3xl font-bold leading-tight text-black dark:text-white  md:text-7xl ">
                Your Social Media
                <span className="inline bg-gradient-to-br from-[#410cd9] to-[#f68efe] bg-clip-text text-transparent dark:from-purple-300 dark:to-pink-300">
                  {" "}
                  Expert{" "}
                </span>
              </h1>
              <p className="dark:text-gray-300 mx-auto mb-6 max-w-[475px] text-lg font-light leading-relaxed  text-body  md:text-2xl">
                Unlock powerful social media strategies designed to grow your
                online presence.
              </p>

              <div className="flex flex-wrap items-center justify-center space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-[60px] items-center rounded-2xl bg-indigo-600 px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-indigo-500 dark:text-white dark:hover:bg-opacity-90"
                >
                  Kostenlose Beratung
                </Link>
                {/* <Link
                  href="#"
                  onClick={() => setToggler(!toggler)}
                  className="glightbox inline-flex items-center py-4 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-current">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Watch Demo
                </Link> */}
              </div>

              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://www.youtube.com/watch?v=HXHphpDJ9T0&pp=ygULaW50cm8gdmlkZW8%3D",
                ]}
              />
            </div>

            {/* Right Image (Desktop only) - Occupies 1/4 */}
            <div className="hidden w-1/4 px-4 lg:block">
              <Image
                width={361}
                height={546}
                src={"/images/hero/hero-light-2.png"}
                alt="hero image"
                className="mx-auto max-w-full"
              />
            </div>

            {/* Mobile Image (Visible only on small screens) */}
            <div className="mt-6 block w-full px-4 lg:hidden">
              <Image
                width={361}
                height={546}
                src={"/images/hero/hero-light.png"}
                alt="hero image"
                className="mx-auto max-w-full p-16"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
