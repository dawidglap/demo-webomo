"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CardsBusiness = () => {
  const t = useTranslations("CardsBusiness");

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const titleControls = useAnimation();
  const card1Controls = useAnimation();
  const card2Controls = useAnimation();
  const card3Controls = useAnimation();

  useEffect(() => {
    if (inView) {
      titleControls.start({ opacity: 1 });
      card1Controls.start({ opacity: 1 });
      card2Controls.start({ opacity: 1 });
      card3Controls.start({ opacity: 1 });
    } else {
      titleControls.start({ opacity: 0 });
      card1Controls.start({ opacity: 0 });
      card2Controls.start({ opacity: 0 });
      card3Controls.start({ opacity: 0 });
    }
  }, [inView, titleControls, card1Controls, card2Controls, card3Controls]);

  return (
    <div ref={ref} className="container mx-auto py-12 md:px-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={titleControls}
        transition={{ duration: 0.5 }}
        className="mb-10 pb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
          <span className="text-indigo-700 dark:text-indigo-300">
            {t("headlineHighlight")}
            <br />
          </span>
          {t("headline")}
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={card1Controls}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#3F2D7F] p-6 text-center shadow-xl dark:bg-[#3F2D7F]"
        >
          <Image
            src="/images/icons/money.webp"
            alt="Icon"
            width={75}
            height={75}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-white dark:text-white">
            <h3 className="text-lg font-bold">{t("card1.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card1.description")}</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={card2Controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#D4C4F4] p-6 text-center shadow-xl dark:bg-[#D4C4F4]"
        >
          <Image
            src="/images/icons/moremoney.webp"
            alt="Icon"
            width={75}
            height={75}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-[#3F2D7F] dark:text-[#3F2D7F]">
            <h3 className="text-lg font-bold">{t("card2.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card2.description")}</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={card3Controls}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex h-[320px] w-full flex-col justify-center rounded-2xl bg-[#EECAC1] p-6 text-center shadow-xl dark:bg-[#EECAC1]"
        >
          <Image
            src="/images/icons/palm.webp"
            alt="Icon"
            width={75}
            height={75}
            className="mx-auto mb-4"
          />
          <div className="flex flex-col items-center justify-center text-[#3F2D7F] dark:text-[#3F2D7F]">
            <h3 className="text-lg font-bold">{t("card3.title")}</h3>
            <p className="mt-2 text-sm sm:text-base">{t("card3.description")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsBusiness;
