import { CTA } from "@/components/CTA";
import Hero from "@/components/Hero";
import TestemonialCarousel from "@/components/carousel";
import { Faq } from "@/components/faq";
import Reasons from "@/components/reasons";

export default function Home() {
  return (
    <main className="space-y-12 md:space-y-18 lg:space-y-20 py-12 md:py-16 lg:py-18">
      <Hero />
      <Reasons />
      <CTA />
      {/* <Services /> */}
      <TestemonialCarousel />
      {/* <Promo /> */}
      <Faq />
    </main>
  );
}
