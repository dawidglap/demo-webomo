"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../../../public/images/bg-test.webp";

interface CardWithBgProps {
  title: string;
  description: string;
}

const CardWithBg: React.FC<CardWithBgProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden rounded-[24px] shadow-lg"
    >
      {/* Background Image */}
      <div className="relative h-[360px] w-full sm:h-[380px] md:h-[420px]">
        <Image
          src={image}
          alt="Background Graphic"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/0 dark:from-black/80 dark:via-black/60 dark:to-black/0" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-end justify-center px-6 py-8 text-right sm:px-8 md:px-10">
        <div className="max-w-xs space-y-4">
          <h3 className="text-2xl font-extrabold leading-snug text-gray-900 dark:text-white sm:text-3xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardWithBg;
