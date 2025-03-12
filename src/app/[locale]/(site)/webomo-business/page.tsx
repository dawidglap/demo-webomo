import AboutBusinessOne from "@/components/AboutBusiness1";
import AboutBusinessTwo from "@/components/AboutBusiness2";
import AboutBusinessThree from "@/components/AboutBusiness3";
import CardsBusiness from "@/components/CardsBusiness";
import CardWithBg from "@/components/CardWIthBg";
import CtaBusiness from "@/components/CtaBusiness";
import Faq from "@/components/FaqBusiness";
import HeroBusiness from "@/components/HeroBusiness";
import React from "react";

const WebomoBusiness = () => {
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
