"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export const TestimonialsCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 md:py-16 lg:py-18 bg-slate-50">
      <div className="container grid gap-8 md:grid-cols-2 max-w-5xl">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our 10 Steps to Success
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Follow with our 10 Smooth Steps to Successfully get Yourself
              Enrolled in Your Dream College
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <Carousel
            plugins={[plugin.current]}
            className=" max-w-xs"
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselSlide key={index} index={index} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const CarouselSlide = ({ index }: { index: any }) => {
  return (
    <CarouselItem key={index}>
      <div className="p-5 rounded-xl border w-full h-[365px]">
        <span className="text-4xl font-semibold">{index + 1}</span>
        <p>Hi there</p>
      </div>
    </CarouselItem>
  );
};
