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
import { IntlProvider } from "next-intl";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(pathname === "/"); // Preloader on homepage only
  const { resolvedTheme } = useTheme();

  // Dynamically load messages for the given locale
  let messages;
  try {
    messages = require(`./messages/${params.locale}.json`);
  } catch (error) {
    console.error(`Error loading messages for locale: ${params.locale}`, error);
  }

  useEffect(() => {
    if (!resolvedTheme) return;
    document.documentElement.classList.add("theme-transition");
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [resolvedTheme]);

  useEffect(() => {
    if (pathname !== "/") {
      setLoading(false);
    }
  }, [pathname]);

  const isNoLayoutPage = ["/affiliate"].includes(pathname);

  return (
    <html lang={params.locale}>
      <body suppressHydrationWarning={true}>
        <IntlProvider locale={params.locale} messages={messages}>
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
                  {!isNoLayoutPage && <Header />}
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
                  {!isNoLayoutPage && <Footer />}
                  <ScrollToTop />
                </>
              )}
            </AuthProvider>
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
