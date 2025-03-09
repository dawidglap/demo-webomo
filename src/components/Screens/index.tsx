"use client";

import React, { useState } from "react";
import { Navigation, Mousewheel } from "swiper/modules"; // ✅ Importa Mousewheel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Sector images for each category
const sectorImages = {
  "Food & Beverage": [
    "/images/screens/morningcheck.png",
    "/images/screens2/2.webp",
    "/images/screens2/3.webp",
    "/images/screens2/4.webp",
    "/images/screens2/5.webp",
    "/images/screens2/6.webp",
    "/images/screens2/7.webp",
    "/images/screens2/8.webp",
    "/images/screens2/9.webp",
    "/images/screens2/10.webp",

    // "/images/screens/placeholder1.webp",
    // "/images/screens/placeholder2.webp",
    // "/images/screens/placeholder3.webp",
    // "/images/screens/placeholder4.webp",
    // "/images/screens/placeholder5.webp",
    // "/images/screens/placeholder6.webp",
    // "/images/screens/placeholder7.webp",
    // "/images/screens/placeholder8.webp",
    // "/images/screens/placeholder9.webp",
    // "/images/screens/placeholder10.webp",
    // "/images/screens/placeholder11.webp",
    // "/images/screens/placeholder12.webp",
    // "/images/screens/placeholder13.webp",
    // "/images/screens/placeholder14.webp",
    // "/images/screens/placeholder15.webp",
  ],
  "Retail & E-commerce": [
    "/images/screens/retail-1.png",
    "/images/screens/retail-2.png",
    "/images/screens/retail-3.png",
    "/images/screens/retail-4.png",
    "/images/screens/retail-5.png",
  ],
  Healthcare: [
    "/images/screens/healthcare-1.png",
    "/images/screens/healthcare-2.png",
    "/images/screens/healthcare-3.png",
    "/images/screens/healthcare-4.png",
    "/images/screens/healthcare-5.png",
  ],
  "Real Estate": [
    "/images/screens/realestate-1.png",
    "/images/screens/realestate-2.png",
    "/images/screens/realestate-3.png",
    "/images/screens/realestate-4.png",
    "/images/screens/realestate-5.png",
  ],
  Automotive: [
    "/images/screens/automotive-1.png",
    "/images/screens/automotive-2.png",
    "/images/screens/automotive-3.png",
    "/images/screens/automotive-4.png",
    "/images/screens/automotive-5.png",
  ],
};

const Screens = () => {
  const t = useTranslations("Screens");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState("Food & Beverage");
  const [selectedImages, setSelectedImages] = useState(
    sectorImages["Food & Beverage"],
  );

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectSector = (sector: string) => {
    setSelectedSector(sector);
    setSelectedImages(sectorImages[sector]);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <section id="screens" className="relative z-20 pt-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              {t("title")}
            </h2>
            <p className="text-base text-body dark:text-slate-400">
              {t("description")}
            </p>

            {/* Dropdown Button */}
            {/* <div className="relative mt-6 inline-block">
              <button
                onClick={toggleDropdown}
                className="rounded-full bg-primary px-6 py-2 text-base font-medium text-white hover:bg-opacity-90"
              >
                {t("selectIndustry")}
              </button>

              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {t("currentlySelected")}:{" "}
                <span className="font-semibold uppercase">
                  {t(`sectors.${selectedSector}`)}
                </span>
              </p>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>

                  <div className="fixed left-1/2 top-1/2 z-40 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                    <ul className="space-y-2">
                      {Object.keys(sectorImages).map((sector) => (
                        <li
                          key={sector}
                          onClick={() => selectSector(sector)}
                          className="cursor-pointer rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          {t(`sectors.${sector}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div> */}
          </div>
        </div>

        <div className="container relative">
          {/* Left Blur Overlay */}
          <div className="absolute left-0 top-[-30px] z-30 h-[100%] rounded-xl bg-white bg-opacity-70 backdrop-blur-[5px] dark:bg-black dark:bg-opacity-70 md:w-[35%]"></div>

          {/* Right Blur Overlay */}
          <div className="absolute right-0 top-[-30px] z-30 h-[105%] rounded-xl bg-white bg-opacity-70 backdrop-blur-[5px] dark:bg-black dark:bg-opacity-70 md:w-[35%]"></div>

          <div
            className="wow fadeInUp mx-auto max-w-[1000px]"
            data-wow-delay=".2s"
          >
            <Swiper
              className="swiper mySwiper relative z-20"
              modules={[Navigation, Mousewheel]} // ✅ Aggiunto Mousewheel
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              centeredSlides={true}
              slideToClickedSlide={true}
              freeMode={true} // ✅ Rende lo scroll più naturale
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }} // ✅ Ora lo scrolla solo orizzontalmente
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
            >
              <div className="absolute left-0 right-0 top-0 z-50 mx-auto w-full md:w-1/3">
                <Image
                  width={294}
                  height={594}
                  src="/images/screens/mobile-frame.png"
                  alt={t("mobileFrameAlt")}
                  className="mx-auto max-w-full"
                  priority
                />
              </div>

              {selectedImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="mx-auto mt-[13px] w-full max-w-[283px]">
                    <Image
                      width={283}
                      height={580}
                      src={image}
                      alt={`${t("screenshotAlt")} ${index + 1}`}
                      className="mx-auto w-full rounded-3xl object-cover pe-[1px] ps-[1px] "
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="flex items-center justify-center space-x-4 pt-20">
                <button className="swiper-button-prev">
                  {/* SVG for Previous Button */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6.52334 10.8334L10.9933 15.3034L9.81501 16.4817L3.33334 10L9.815 3.51836L10.9933 4.69669L6.52334 9.16669L16.6667 9.16669L16.6667 10.8334L6.52334 10.8334Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="swiper-button-next">
                  {/* SVG for Next Button */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M13.4767 9.16664L9.00667 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00667 15.3033L13.4767 10.8333H3.33334V9.16664H13.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>

        {/* Graphics */}
        {/* <Graphics /> */}
      </section>
    </>
  );
};

export default Screens;
