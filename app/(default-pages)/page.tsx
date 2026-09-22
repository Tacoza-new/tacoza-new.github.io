export const metadata = {
  title: "Tacoza - Restaurant Management System",
  description:
    "Empower your business with Tacoza’s all-in-one solution, built to optimize your ordering process and management.",
  keywords:
    "tacoza, restaurant management system, restaurant pos, restaurant software, restaurant ordering system, restaurant management, petpooja",
};

import Hero from "@/components/hero";
import Section01 from "@/components/section-01";
import Section02 from "@/components/section-02";

import Section05 from "@/components/section-05";
import Section06 from "@/components/section-06";
import Section07 from "@/components/section-07";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";
import Script from "next/script";
import { FeaturesSectionDemo } from "@/components/featuresSection";
import { HeroScrollDemo } from "@/components/containerScroll";
import { AnimatedTestimonialsDemo } from "@/components/outletTypes";
import { TabsDemo } from "@/components/outletTabs";
import Section03 from "@/components/features/section-03";

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
      <Section02 />

      <HeroScrollDemo />
      <FeaturesSectionDemo />
      <Section03 />
      <TabsDemo />
      {/* <Section05 /> */}
      {/* <Section06 /> */}
      <Section07 />

      {/* <Faqs /> */}
      <Cta />
      <Script src="//code.tidio.co/lcekra8hwvljv0noe7nw4xj0v1navebu.js" async />
    </>
  );
}
