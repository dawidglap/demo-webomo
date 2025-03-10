"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Client } from "@/types/client";

const clientsData: Client[] = [
  {
    logo: "/images/clients/client-01.svg",
    link: "#",
    width: 92,
    height: 28,
  },
  {
    logo: "/images/clients/client-02.svg",
    link: "#",
    width: 120,
    height: 24,
  },
  {
    logo: "/images/clients/client-03.svg",
    link: "#",
    width: 99,
    height: 24,
  },
  {
    logo: "/images/clients/client-04.svg",
    link: "#",
    width: 89,
    height: 32,
  },
  {
    logo: "/images/clients/client-05.svg",
    link: "#",
    width: 108,
    height: 32,
  },
  {
    logo: "/images/clients/client-06.svg",
    link: "#",
    width: 106,
    height: 32,
  },
];

const Clients = () => {
  const t = useTranslations("Clients");

  // Variants per hover
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative z-10 bg-[#F8FAFB] pb-[50px] pt-[70px] dark:bg-[#15182B]">
      <div className="container overflow-hidden lg:max-w-[1200px]">
        <h2 className="mb-16 text-center text-base font-light text-black dark:text-white md:text-lg">
          {t("heading")}
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max items-center justify-center gap-8"
            animate={{ x: ["0%", "-50%"] }} // Scroll continuo
            transition={{
              repeat: Infinity,
              duration: 30, // Puoi modificare la velocità
              ease: "easeInOut",
            }}
          >
            {/* Duplichiamo i loghi per continuità del loop */}
            {[...clientsData, ...clientsData].map((item, index) => (
              <motion.div
                key={index}
                className="my-4 flex-none rounded-2xl bg-gray-100 px-8 py-2 dark:bg-slate-800"
                whileHover="hover"
                variants={logoVariants}
              >
                <Link href={item.link} className="block">
                  <Image
                    width={item.width}
                    height={item.height}
                    priority
                    src={item.logo}
                    alt="client"
                    className="mx-auto my-4 max-w-full opacity-[65%] hover:opacity-100"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
