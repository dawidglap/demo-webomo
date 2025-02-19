"use client";
import React from "react";

const HeroArea2 = () => {
  return (
    <div className=" hidden  lg:block">
      {" "}
      {/* Visibile solo su desktop */}
      <section className="relative h-[110vh] w-full overflow-hidden ">
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/images/webomo-videos/hero-temp.mp4" /* Sostituisci con il percorso del tuo video */
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </section>
    </div>
  );
};

export default HeroArea2;
