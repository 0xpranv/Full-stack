"use client";

import { Input } from "@/components/ui/input";
import { UniCard, UniSectionCard } from "@/components/uniCard";
import { universityData } from "@/data/staticData";
import { useState } from "react";

export default function ExploreUniversities() {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <section className="w-full pt-12 md:pt-16 lg:pt-18">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="grid gap-1">
              <h2 className="text-center md:text-left font-bold text-3xl w-full text-gray-600">
                Top Universities
              </h2>
              <p className="text-gray-700">
                Explore the best universities around the world.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Input
                className="w-full md:w-[300px]"
                value={searchFilter}
                placeholder="Search universities..."
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid md:gap-3 lg:grid-cols-6 pb-7">
            <div className="col-span-2">
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
                title={"Filter By Fees"}
                elements={[
                  {
                    id: 1,
                    title: "$5k - $10k",
                    link: "/abc",
                  },
                  {
                    id: 2,
                    title: "$11k - $20k",
                    link: "/uk",
                  },
                  {
                    id: 3,
                    title: "$21k - $100k",
                    link: "/ind",
                  },
                ]}
              />
            </div>
            <div className="grid col-span-4 gap-3">
              {universityData.map((uni) => (
                <UniCard key={uni.uni_id} data={uni} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
