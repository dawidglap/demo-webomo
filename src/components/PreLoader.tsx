"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Welcome messages with color gradients
const languages = ["Welcome", "Bienvenue", "Willkommen", "Ciao"];

// Gradient options for Welcome words
const gradients = [
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  "bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
  "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500",
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
];

const PreLoader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Cycle through languages every 1000ms
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000);

    // Detect page load
    const handlePageLoad = () => setIsPageLoaded(true);

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  // Finish after clicking when the page is fully loaded
  const handleSkip = () => {
    if (isPageLoaded) onFinish();
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleSkip}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative flex h-screen cursor-pointer flex-col items-center justify-center bg-gradient-to-b from-slate-300 to-slate-50 dark:from-slate-300 dark:to-slate-50"
      >
        {/* Cycling Welcome Words */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Apply gradient class randomly to each word
            className={`bg-clip-text  text-4xl font-extrabold text-transparent md:text-6xl ${
              gradients[index % gradients.length]
            } mb-4`}
          >
            {languages[index]}
          </motion.div>
        </AnimatePresence>

        {/* Click to Start Message at Bottom */}
        {isPageLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-28  px-6 py-2 text-center text-xl font-bold uppercase text-slate-600 md:text-2xl"
          >
            Überall klicken, um zu starten
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoader;
