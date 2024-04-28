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

import { tenStepProcessData } from "../data/tenStepProcessData";

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
              {tenStepProcessData.map((item) => (
                <CarouselSlide key={item.id} item={item} />
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

const CarouselSlide = ({ item }: { item: any }) => {
  return (
    <CarouselItem key={item.id}>
      <div className="p-12 rounded-xl border w-full h-[365px]">
        <span className="text-4xl font-semibold">{item.id}</span>
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="font-light text-slate-700 text-justify">
          {item.description}
        </p>
      </div>
    </CarouselItem>
  );
};
