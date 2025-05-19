"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Client } from "@/types/client";

const clientsData: Client[] = [
  {
    logo: "/images/clients/galaxus.webp",
    link: "#",
    width: 125,
    height: 50,
  },
  {
    logo: "/images/clients/allianz_1.webp",
    link: "#",
    width: 125,
    height: 50,
  },
  {
    logo: "/images/clients/lindt_1.webp",
    link: "#",
    width: 125,
    height: 50,
  },
  {
    logo: "/images/clients/starbucks1.webp",
    link: "#",
    width: 125,
    height: 50,
  },
  {
    logo: "/images/clients/waterdrop.webp",
    link: "#",
    width: 125,
    height: 50,
  },
];

const Clients = () => {
  const t = useTranslations("Clients");

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative z-10 pb-[50px] pt-[70px]">
        <div className="container overflow-hidden lg:max-w-[1200px]">
          <h2 className="mb-16 text-center text-base font-light text-black dark:text-white md:text-lg">
            {t("heading")}
          </h2>

          <div className="relative w-full overflow-hidden">
            {/* Fade a sinistra */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent" />

            {/* Fade a destra */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent" />

            {/* Container scorrevole */}
            <motion.div
              className="flex w-max items-center justify-center gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...clientsData, ...clientsData].map((item, index) => (
                <motion.div
                  key={index}
                  className="my-4 flex-none rounded-2xl bg-gray-100 px-8 py-2 dark:bg-slate-800"
                  whileHover="hover"
                  variants={logoVariants}
                >
                  <Image
                    width={item.width}
                    height={item.height}
                    priority
                    src={item.logo}
                    alt="client"
                    className="mx-auto my-4 max-w-full opacity-[65%] hover:opacity-100 filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
