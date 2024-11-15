"use client";

import "../../css/animate.css";
import "../../css/style.css";
import React, { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider, useTheme } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const { resolvedTheme } = useTheme();
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Effect for theme transition
  useEffect(() => {
    if (!resolvedTheme) return;

    // Adds the transition class to the root (html)
    document.documentElement.classList.add("theme-transition");

    // Removes the class after 300 ms
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [resolvedTheme]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Analytics />
        <NextTopLoader
          color="#6057E8"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />

        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            {loading ? (
              <PreLoader />
            ) : (
              <>
                <Header />
                <ToasterContext />
                <AnimatePresence mode="wait">
                  <motion.main
                    key={pathname} // Unique key based on the pathname
                    initial={{ opacity: 0, y: 10 }} // Start with opacity 0 and a slight vertical offset
                    animate={{ opacity: 1, y: 0 }} // Fade in and move to y=0
                    exit={{ opacity: 0, y: -10 }} // Fade out and move slightly upwards
                    transition={{
                      duration: 0.3, // Duration of the transition
                      ease: "easeInOut",
                    }}
                  >
                    {children}
                  </motion.main>
                </AnimatePresence>
                <Footer />
                <ScrollToTop />
              </>
            )}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
