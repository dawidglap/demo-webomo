"use client";

import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }

  const pathname = usePathname();
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: Option[] = [
    { country: "Deutsch", code: "de" },
    { country: "English", code: "en" },
    { country: "Español", code: "es" },
    { country: "Français", code: "fr" },
    { country: "Italiano", code: "it" },
    { country: "Português", code: "pt" },
  ];

  const switchLocalePath = (newLocale: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (
      pathSegments[0] &&
      options.some((option) => option.code === pathSegments[0])
    ) {
      pathSegments[0] = newLocale;
    } else {
      pathSegments.unshift(newLocale);
    }
    return `/${pathSegments.join("/")}`;
  };

  // Close dropdown on click outside (Safari-safe)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOptionsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative" ref={dropdownRef}>
        <button
          className="text-destructive mt-1 inline-flex w-full items-center justify-between gap-3 text-2xl dark:text-white"
          onClick={() => setIsOptionsExpanded((prev) => !prev)}
        >
          <IoLanguageOutline />
        </button>

        <AnimatePresence>
          {isOptionsExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-indigo-200 shadow-lg dark:bg-cyan-950 dark:text-white"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {options.map((lang) => (
                  <Link key={lang.code} href={switchLocalePath(lang.code)}>
                    <button
                      lang={lang.code}
                      onMouseDown={(e) => e.preventDefault()}
                      className={`hover:bg-dropdownHover block w-full px-4 py-2 text-left text-sm ${
                        pathname.startsWith(`/${lang.code}`)
                          ? "bg-selected hover:bg-selected text-primary"
                          : "text-secondary"
                      }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LangSwitcher;
