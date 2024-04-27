import Hero from "@/components/Hero";
import { TestimonialsCarousel } from "@/components/carousel";
import { Promo } from "@/components/promotion";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TestimonialsCarousel />
      <Services />
      <Promo />
    </main>
  );
}
