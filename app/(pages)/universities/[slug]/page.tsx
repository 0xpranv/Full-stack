"use client";

import { universityData } from "@/data/staticData";
import { useParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function UniversityDetails() {
  const params = useParams<{ slug: string }>();

  console.log(params?.slug);
  // check if the slug is present in the database and fetch it

  const uni = universityData.find((uni) => uni.slug === params?.slug);

  return (
    <main className="container">
      <section className="py-12 flex flex-col items-start justify-center">
        <div className="h-44 bg-slate-200 w-full rounded-xl mb-4"></div>
        <div className="">
          <h2 className="text-center md:text-left font-bold text-3xl w-full">
            {uni?.university}
          </h2>
          <p className="text-xl text-muted-foreground mt-2">{uni?.address}</p>
        </div>
      </section>
      <section className="mb-12">
        <Accordion type="single" collapsible className="w-full space-y-7">
          <AccordionItem
            value="item-1"
            className="border border-2 p-4 rounded-xl"
          >
            <AccordionTrigger>Table of Contents</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside">
                <li>Introduction</li>
                <li>History</li>
                <li>Location</li>
                <li>Facilities</li>
                <li>Rankings</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-2 p-4 rounded-xl"
          >
            <AccordionTrigger>{`About ${uni?.university}`}</AccordionTrigger>
            <AccordionContent>
              <p className="text-xl text-muted-foreground mt-2">
                Oxford University, located at University Offices, Wellington
                Square, Oxford OX1 2JD, United Kingdom, is one of the
                world&lsquo;s leading academic institutions. With a rich history
                dating back to the 12th century, it is the oldest university in
                the English-speaking world. The university is renowned for its
                distinctive collegiate system, where students and faculty
                interact closely in pursuit of academic excellence. Oxford is
                known for its rigorous academic programs, world-class research,
                and vibrant campus life. Its notable alumni include numerous
                world leaders, Nobel laureates, and other distinguished
                individuals in various fields.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
