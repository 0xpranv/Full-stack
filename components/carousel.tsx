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

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import { tenStepProcessData } from "../data/tenStepProcessData";
import { testmonialData } from "../data/testemonialsData";
import Image from "next/image";

export const CTA = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
        <p className="font-normal text-slate-500 text-justify pt-4">
          {item.description}
        </p>
      </div>
    </CarouselItem>
  );
};

export default function TestemonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="py-12 md:py-16 lg:py-18 w-full">
      <div className="overflow-hidden flex flex-col justify-center items-center">
        <div className="space-y-4 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            What Our Students Say
          </h3>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our students about their experiences with our program.
          </p>
        </div>
        <Carousel className="w-full" plugins={[plugin.current]}>
          <CarouselContent>
            {/* @ts-ignore */}
            {testmonialData.map((user) => (
              <TestimonialCarouselItem
                key={user.id}
                name={user.name}
                major={user.major}
                imgSrc={user.imageSrc ? user.imageSrc : ""}
                testimony={user.testimony}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

const TestimonialCarouselItem = ({
  name,
  imgSrc,
  major,
  testimony,
}: {
  name: string;
  imgSrc?: string;
  major: string;
  testimony: string;
}) => {
  return (
    <CarouselItem className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4 p-6 max-w-5xl">
        <Avatar className="h-20 w-20">
          <AvatarImage alt={name} src={imgSrc} className="object-cover" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400">{major}</p>
          <blockquote className="mt-4 text-lg font-medium leading-relaxed max-w-2xl flex">
            <div className="flex items-start justify-center w-full">
              <img
                src={"/testemonials/double-quote-serif-left.svg"}
                height={30}
                width={30}
                alt="double quote"
              />
            </div>
            {testimony}
            <div className="w-full flex items-end justify-center">
              <img
                src={"/testemonials/double-quotes.svg"}
                className="bottom-0"
                height={30}
                width={30}
                alt="double quote"
              />
            </div>
          </blockquote>
        </div>
      </div>
    </CarouselItem>
  );
};
