"use client";

import "../../css/animate.css";
import "../../css/style.css";
import React, { useState, useEffect } from "react";
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
  const pathname = usePathname();
  const [loading, setLoading] = useState(pathname === "/"); // Preloader on homepage only
  const { resolvedTheme } = useTheme();

  // Effect for theme transition
  useEffect(() => {
    if (!resolvedTheme) return;
    document.documentElement.classList.add("theme-transition");
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [resolvedTheme]);

  // Ensure the preloader only shows on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      setLoading(false);
    }
  }, [pathname]);

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
              <PreLoader onFinish={() => setLoading(false)} />
            ) : (
              <>
                <Header />
                <ToasterContext />
                <AnimatePresence mode="wait">
                  <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.3,
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
