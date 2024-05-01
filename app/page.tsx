import Hero from "@/components/Hero";
import TestemonialCarousel, { CTA } from "@/components/carousel";
import { Promo } from "@/components/promotion";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CTA />
      <Services />
      <TestemonialCarousel />
      <Promo />
    </main>
  );
}
