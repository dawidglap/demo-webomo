"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.8, // Trigger when 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay for staggered effect
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative z-10 bg-[#F8FAFB] pb-[50px] pt-[70px] dark:bg-[#15182B]"
    >
      <div className="container overflow-hidden lg:max-w-[1200px]">
        <h2 className="mb-16 text-center text-base font-light text-black dark:text-white md:text-lg">
          Diese Marken vertrauen auf webomo
        </h2>
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {clientsData.map((item, index) => (
            <motion.div
              key={index}
              className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={logoVariants}
            >
              <motion.div
                className="mb-5 text-center"
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
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
