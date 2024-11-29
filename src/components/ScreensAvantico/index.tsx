"use client";

import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const foodBeverageImages = [
  "/images/carousel/placeholder.webp",
  "/images/carousel/placeholder2.webp",
  "/images/carousel/placeholder3.webp",
  "/images/carousel/placeholder4.webp",
  "/images/screens/food-beverage-1.png",
  "/images/screens/food-beverage-2.png",
  "/images/screens/food-beverage-3.png",
  "/images/screens/food-beverage-4.png",
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const hoverEffect = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ScreensAvantico = () => {
  return (
    <section className="relative z-20 bg-white pb-16 pt-12 dark:bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="container mx-auto"
      >
        <div className="wow fadeInUp mb-10 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Social Media Stories
          </h2>
          <p className="pt-4 text-lg text-gray-600 dark:text-gray-400">
            So können Ihre Stories, Posts und Reels aussehen die Ihre Zielgruppe
            fesselt.
          </p>
        </div>

        <div className="relative p-5">
          {/* Navigation Buttons */}
          <div className="absolute left-[-15px] top-1/2 z-20 -translate-x-full -translate-y-1/2 transform sm:left-[-60px]">
            <button className="swiper-button-prev transition hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10 text-blue-500 dark:text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute right-[-15px] top-1/2 z-20 -translate-y-1/2 translate-x-full transform sm:right-[-60px]">
            <button className="swiper-button-next transition hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10 text-blue-500 dark:text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            className="swiper-container"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            centeredSlides={false}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {/* Slide Items */}
            {foodBeverageImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover="hover"
                  variants={hoverEffect}
                  className="relative flex justify-center py-4"
                >
                  {/* Smartphone Frame */}
                  <motion.div
                    className="relative w-[200px] md:w-[250px] lg:w-[300px]"
                    variants={fadeInVariants}
                  >
                    <Image
                      src={"/images/screens/mobile-frame.png"}
                      alt="Smartphone Frame"
                      layout="responsive"
                      width={300}
                      height={600}
                      className="z-10"
                    />
                    {/* Image Inside Frame */}
                    <div className="absolute inset-[2%] z-[-1]">
                      <Image
                        src={image}
                        alt={`Story ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[30px]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default ScreensAvantico;
