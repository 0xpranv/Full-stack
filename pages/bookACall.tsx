"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { InlineWidget } from "react-calendly";
import { useState } from "react";

export default function BookingPage() {
  const date = new Date().getFullYear();
  const [calenderVisible, setCalenderVisible] = useState(false);
  return (
    <>
      <section className="py-12 md:py-16 lg:py-18 bg-slate-50">
        <div className="container grid items-center px-4 md:px-6   max-w-5xl">
          {/* <img
            alt="Book a Call"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/placeholder.svg"
          /> */}
          <div className="w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Book a Free 1:1 Call with Experts!
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get guidance on country, intake, deadlines, tests, eligibility
              criteria...
            </p>
            {!calenderVisible ? (
              <div className={`pt-5 `}>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Degree you&apos;re planning to study
                      </Label>
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bachelors" id="option-one" />
                          <Label htmlFor="option-one">Bachelor&apos;s</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="masters" id="option-two" />
                          <Label htmlFor="option-two">Master&apos;s</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        When are you going to study abroad?
                      </Label>
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={date.toString()}
                            id="option-one"
                          />
                          <Label htmlFor="option-one">{date.toString()}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={(date + 1).toString()}
                            id="option-two"
                          />
                          <Label htmlFor="option-two">
                            {(date + 1).toString()}
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={(date + 2).toString()}
                            id="option-three"
                          />
                          <Label htmlFor="option-three">
                            {(date + 2).toString()}
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="">
                      How are you planning your study abroad process?
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          I&apos;m doing it myself
                        </SelectItem>
                        <SelectItem value="dark">
                          Joined another Consultancy
                        </SelectItem>
                        <SelectItem value="system">
                          Need Professional Counselling
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setCalenderVisible(true);
                    }}
                  >
                    Continue
                  </Button>
                </form>
              </div>
            ) : (
              <div className="">
                <Button
                  className="btn"
                  onClick={() => {
                    setCalenderVisible(false);
                  }}
                >
                  Back
                </Button>
                <InlineWidget url="https://calendly.com/pranav-v5qa/free-1-1-consultation" />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-18 ">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What to Expect
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                During the call, our team will discuss your career goals, go
                brief over your portfolio to give you pointers, and how our
                services can help you achieve your goals. We&apos;ll also answer
                any questions you may have and provide a personalized
                recommendation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Actionable Steps
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The call will be attended by a member of our Expert Counsellor
                team and a subject matter expert who can provide in-depth
                insights and recommendations. We believe in a collaborative
                approach to ensure you get the best possible universities for
                your bright future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
