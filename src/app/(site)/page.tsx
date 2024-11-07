import type { Metadata } from "next";
import HeroArea from "@/components/HeroArea";
import Features from "@/components/Features";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Pricing from "@/components/Pricing";
import Screens from "@/components/Screens";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import WebomoFeatures from "@/components/WebomoFeatures";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Webomo - Your Social Media Expert",
  description: "Lorem Ipsum Dolor Sit Amet",
};

export default function Home() {
  return (
    <>
      <HeroArea />
      <WebomoFeatures />
      <Clients />
      {/* <Features /> */}
      <About />
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
