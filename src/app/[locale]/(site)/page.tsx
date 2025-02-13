import type { Metadata } from "next";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import WebomoFeatures from "@/components/WebomoFeatures";
import Stats from "@/components/Stats";
import About2 from "@/components/About2";
import About3 from "@/components/About3";
import Hero3 from "@/components/HeroArea3";
import Hero4 from "@/components/HeroArea4";
import { TimelineDemo } from "@/components/ui/timelineDemo";

export const metadata: Metadata = {
  title: "Webomo - Your Social Media Expert",
  description: "",
};

export default function Home() {
  return (
    <>
      {/* <HeroArea /> */}
      {/* <Hero3 /> */}
      <Hero4 />

      <WebomoFeatures />
      <Clients />
      <TimelineDemo />
      {/* <Features /> */}
      {/* <About /> */}
      {/* <About2 /> */}
      {/* <About3 /> */}
      {/* <AboutEnd /> */}
      {/* <WorkProcess /> */}
      {/* <Pricing /> */}
      {/* <Screens /> */}
      {/* <Cta /> */}
      <Stats />
      <Testimonials />
      {/* <Faq /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
