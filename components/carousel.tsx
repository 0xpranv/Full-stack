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

import { testmonialData } from "../data/staticData";

import Image from "next/image";
import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// export const CTA = () => {
//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: true })
//   );

//   return (
//     <section className="py-12 md:py-16 lg:py-18 bg-slate-50">
//       <div className="container grid gap-8 md:grid-cols-2 ">
//         <div className="flex flex-col justify-center space-y-4">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Our 07 Steps to Success
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Follow with our 10 Smooth Steps to Successfully get Yourself
//               Enrolled in Your Dream College
//             </p>
//           </div>
//         </div>
//         <div className="overflow-hidden">
//           <Carousel
//             plugins={[plugin.current]}
//             className=" max-w-xs"
//             // onMouseEnter={plugin.current.stop}
//             // onMouseLeave={plugin.current.reset}
//           >
//             <CarouselContent>
//               {tenStepProcessData.map((item) => (
//                 <CarouselSlide key={item.id} item={item} />
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

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
    <div className="w-full">
      <div className="container overflow-hidden flex flex-col justify-center items-center">
        <div className="text-center mb-20">
          <h2 className="text-gray-600 text-center font-bold text-3xl w-full mx-auto">
            What Our Students Say!
          </h2>
          <p className="text-base leading-relaxed mx-auto">
            Hear from our students about their experiences with our program
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
          className="w-full"
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {testmonialData.map((user) => (
              <TestimonialCarouselItem
                key={user.id}
                name={user.name}
                major={user.major}
                imgSrc={user.imageSrc ? user.imageSrc : ""}
                testimony={user.testimony}
                University={user.University}
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
  University,
}: {
  name: string;
  imgSrc?: string;
  major: string;
  testimony: string;
  University: string;
}) => {
  return (
    <CarouselItem className="flex flex-col justify-center items-center md:basis-1/2">
      <div className="flex flex-wrap ">
        <div className="w-full">
          <div className="h-96 md:h-80 lg:h-72 flex flex-col justify-between bg-gray-100 p-8 rounded">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-primary/90 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">{testimony}</p>
            </div>
            <a className="inline-flex items-center">
              <Avatar className="h-12 w-12 border border-gray-400">
                <AvatarImage
                  alt={name}
                  src={imgSrc}
                  className="object-cover object-center"
                />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <span className="flex-grow flex flex-col pl-4">
                <span className="flex title-font font-medium text-gray-900">
                  {name}
                  <span className="hidden text-gray-500 text-sm pl-1 md:flex justify-center items-center">
                    ({major})
                  </span>
                </span>
                <span className="text-gray-500 text-sm">{University}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
