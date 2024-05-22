"use client";

import { universityData } from "@/data/staticData";
import { useParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UniSectionCard } from "@/components/uniCard";
import { MapPinIcon } from "lucide-react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

export default function UniversityDetails() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const params = useParams<{ slug: string }>();

  console.log(params?.slug);
  // check if the slug is present in the database and fetch it

  const uni = universityData.find((uni) => uni.slug === params?.slug);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h3 className="text-md font-semibold text-gray-800">Overview</h3>,
      children: <TabSection uni={uni} />,
    },
    {
      key: "2",
      label: <h3 className="text-md font-semibold text-gray-800">Fees</h3>,
      children: <TabSection uni={uni} />,
    },
    {
      key: "3",
      label: (
        <h3 className="text-md font-semibold text-gray-800">Placements</h3>
      ),
      children: <TabSection uni={uni} />,
    },
  ];

  return (
    <main className="container">
      <section className="py-8 flex flex-row justify-between">
        <div className="">
          <h2 className="text-center md:text-left font-bold text-2xl w-full">
            {uni?.university}
          </h2>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <p className="text-sm text-gray-500 mt-2">{uni?.country}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="bg-gray-100 text-gray-800 text-xs font-medium my-2 px-2.5 py-1 rounded-full">
            Shortlist +
          </button>
          <button className="bg-green-300 text-gray-800 text-xs font-medium my-2 px-2.5 py-1 rounded-full">
            Apply Now
          </button>
        </div>
      </section>
      <div className="">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </main>
  );
}

function TabSection({ uni }: { uni: any }) {
  return (
    <section className="mb-12 grid md:gap-3 lg:grid-cols-6 pb-7">
      <div className="grid col-span-4 h-min">
        <Accordion type="single" collapsible className="w-full space-y-7 pb-4">
          <AccordionItem
            value="item-1"
            className="border border-2 p-4 rounded-xl"
          >
            <AccordionTrigger className="text-lg mt-0 font-semibold text-gray-700">
              Table of Contents
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-xl text-gray-400 list-disc list-inside">
                <li>Introduction</li>
                <li>History</li>
                <li>Location</li>
                <li>Facilities</li>
                <li>Rankings</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full space-y-7">
          <AccordionItem
            value="item-2"
            className="border border-2 p-4 rounded-xl"
          >
            <AccordionTrigger className="text-xl text-gray-700 mt-0">{`About ${uni?.university}`}</AccordionTrigger>
            <AccordionContent>
              <p className="text-lg text-muted-foreground mt-2">
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
      </div>
      <div className="grid col-span-2 ">
        <UniSectionCard
          title={"Filter By Country"}
          elements={[
            {
              id: 1,
              title: "United States",
              link: "/united_states",
            },
            {
              id: 2,
              title: "United Kingdom",
              link: "/uk",
            },
            {
              id: 3,
              title: "Switzerland",
              link: "/swz",
            },
          ]}
        />
        <UniSectionCard
          title={"Filter By Country"}
          elements={[
            {
              id: 1,
              title: "United States",
              link: "/united_states",
            },
            {
              id: 2,
              title: "United Kingdom",
              link: "/uk",
            },
            {
              id: 3,
              title: "Switzerland",
              link: "/swz",
            },
          ]}
        />
      </div>
    </section>
  );
}
