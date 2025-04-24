"use client"; // 🔥 aggiungi questa riga
import React, { useEffect } from "react";
import AboutBusinessOne from "@/components/AboutBusiness1";
import AboutBusinessTwo from "@/components/AboutBusiness2";
import AboutBusinessThree from "@/components/AboutBusiness3";
import CardsBusiness from "@/components/CardsBusiness";
import CardWithBg from "@/components/CardWIthBg";
import CtaBusiness from "@/components/CtaBusiness";
import Faq from "@/components/FaqBusiness";
import HeroBusiness from "@/components/HeroBusiness";



const WebomoBusiness = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
  
    if (ref) {
      // ✅ Salva in cookie valido 30 giorni
      document.cookie = `ref=${ref}; path=/; max-age=2592000`;
  
      // ✅ (opzionale) Salva anche in localStorage
      localStorage.setItem("referral_user_id", ref);
  
      // ✅ (opzionale) Tracking API backend
      fetch("/api/track-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: ref }),
      }).catch((err) => console.error("Tracking referral failed:", err));
    }
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-50  to-cyan-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <HeroBusiness />

      <CardsBusiness />
      <CtaBusiness />
      <AboutBusinessOne />
      <AboutBusinessTwo />
      <AboutBusinessThree />
      <Faq />
    </div>
  );
};

export default WebomoBusiness;
