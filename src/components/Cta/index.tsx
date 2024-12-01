"use client";

import React from "react";
import Graphics from "@/components/Cta/Graphics";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Cta = () => {
  const t = useTranslations("Cta");

  return (
    <>
      <section id="cta" className="relative z-10 pt-[110px]">
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-10 pt-14 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-20 lg:px-12 lg:pt-20 xl:px-20">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp mx-auto max-w-[530px] text-center lg:ml-0 lg:text-left"
                  data-wow-delay=".2s"
                >
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[38px] md:leading-tight">
                    {t("title")}
                  </h2>
                  <p className="mb-10 text-base text-body">
                    {t("description")}
                  </p>

                  <div className="-mx-[10px] flex flex-wrap items-center justify-center lg:justify-start">
                    <div className="inline-block px-[10px]">
                      <Link
                        href="#"
                        className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-white hover:bg-opacity-90"
                      >
                        {t("getStarted")}
                      </Link>
                    </div>

                    <div className="inline-block px-[10px]">
                      <Link
                        href="#"
                        className="mb-5 inline-flex items-center rounded-md bg-black px-5 py-[10px] text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                      >
                        {t("bookCall")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative z-10 mx-auto mt-20 max-w-[435px] lg:mt-0"
                  data-wow-delay=".3s"
                >
                  <Image
                    width={299}
                    height={419}
                    src={"/images/cta/cta-light.png"}
                    alt={t("ctaImageAlt")}
                    className="mx-auto max-w-full"
                  />

                  <div className="absolute -top-5 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-gradient-2"></div>
                  <div className="absolute right-0 top-0 -z-10">
                    <svg
                      width="60"
                      height="43"
                      viewBox="0 0 60 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_47_16)">
                        <path
                          d="M18.3392 1.12402C18.342 1.06386 18.3451 1.00425 18.3484 0.94519C18.3456 1.00499 18.3425 1.06459 18.3392 1.12402C18.0601 7.2551 21.0899 18.9962 35.5087 18.295C29.6192 18.7078 17.9481 22.8922 18.347 36.3249C18.164 30.4662 14.3716 18.8894 0.685511 18.8251C0.56152 18.827 0.43993 18.8273 0.320892 18.8261C0.443205 18.8249 0.564743 18.8245 0.685511 18.8251C6.49532 18.7353 17.5757 15.1217 18.3392 1.12402Z"
                          fill="#7083F5"
                        />
                        <path
                          d="M48.8789 21.0097C48.8805 20.9735 48.8824 20.9378 48.8844 20.9023C48.8827 20.9382 48.8808 20.974 48.8789 21.0097C48.7114 24.6883 50.5293 31.733 59.1806 31.3122C55.6469 31.5599 48.6442 34.0705 48.8836 42.1302C48.7737 38.615 46.4983 31.6689 38.2867 31.6303C38.2123 31.6315 38.1393 31.6316 38.0679 31.6309C38.1413 31.6301 38.2142 31.6299 38.2867 31.6303C41.7725 31.5764 48.4208 29.4082 48.8789 21.0097Z"
                          fill="#19DEBB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_16">
                          <rect
                            width="58.8596"
                            height="41.2017"
                            fill="white"
                            transform="translate(0.320892 0.94519)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Graphics*/}
      </section>
    </>
  );
};

export default Cta;
