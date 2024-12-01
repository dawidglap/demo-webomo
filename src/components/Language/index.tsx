"use client";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }

  const pathname = usePathname();
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  // Define the language options
  const options: Option[] = [
    { country: "Deutsch", code: "de" },
    { country: "English", code: "en" },
    { country: "Español", code: "es" },
    { country: "Français", code: "fr" },
    { country: "Italiano", code: "it" },
    { country: "Português", code: "pt" },
  ];

  // Utility to replace the locale in the current path
  const switchLocalePath = (newLocale: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (
      pathSegments[0] &&
      options.some((option) => option.code === pathSegments[0])
    ) {
      // Replace the first segment with the new locale
      pathSegments[0] = newLocale;
    } else {
      // Add the new locale as the first segment
      pathSegments.unshift(newLocale);
    }
    return `/${pathSegments.join("/")}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <button
          className="text-destructive mt-1 inline-flex w-full items-center justify-between gap-3 text-2xl dark:text-white"
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          <IoLanguageOutline />
        </button>
        {isOptionsExpanded && (
          <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-indigo-200 shadow-lg dark:bg-cyan-950 dark:text-white">
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
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default LangSwitcher;
