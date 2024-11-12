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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Effetto per attivare la transizione solo quando cambia il tema
  useEffect(() => {
    if (!resolvedTheme) return;

    // Aggiunge la classe di transizione al root (html)
    document.documentElement.classList.add("theme-transition");

    // Rimuove la classe dopo 300 ms
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [resolvedTheme]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
                {/* <Header /> */}
                <ToasterContext />
                <main>{children}</main>
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
