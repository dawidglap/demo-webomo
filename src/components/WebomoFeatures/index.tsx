"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WebomoFeatures = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animazione della sezione
  const sectionControls = useAnimation();
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Controllo animazione per il titolo e il video per dissolvenza in uscita
  const titleControls = useAnimation();
  const videoControls = useAnimation();

  // Controllo per il titolo (uscita graduale)
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Attiva l'uscita quando inizia a uscire dal viewport
  });

  // Controllo per il contenitore video (uscita graduale)
  const { ref: videoContainerInViewRef, inView: videoContainerInView } =
    useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    }
    if (titleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
    if (videoContainerInView) {
      videoControls.start("visible");
    } else {
      videoControls.start("hidden");
    }
  }, [
    sectionInView,
    titleInView,
    videoContainerInView,
    sectionControls,
    titleControls,
    videoControls,
  ]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-20"
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
    >
      <motion.h2
        ref={titleRef}
        className="mb-8 max-w-2xl pb-10 text-center text-3xl font-bold text-black dark:text-white md:text-5xl"
        initial="visible"
        animate={titleControls}
        variants={fadeVariants}
      >
        Entdecke unsere neusten Arbeiten
      </motion.h2>
      <motion.div
        ref={videoContainerInViewRef}
        className="w-full max-w-3xl px-4"
        initial="visible"
        animate={videoControls}
        variants={fadeVariants}
      >
        <div
          ref={videoContainerRef}
          className="relative aspect-video overflow-hidden rounded-2xl bg-slate-950"
        >
          <video
            ref={videoRef}
            src="/images/webomo-videos/webomo-demo.mp4"
            className={`h-full w-full ${isPlaying ? "block" : "hidden"}`}
            controls={true}
            onEnded={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <motion.button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50"
              variants={fadeVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WebomoFeatures;
