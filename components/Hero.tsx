import Image from "next/image";
import { H1 } from "./heading";
import { Button } from "./button";

export default function Hero() {
  return (
    <section key="1" className="">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-1 ">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <H1>Begin your Study Abroad Journey</H1>
            <p className="text-lg font-semibold">
              Click below and take your best decision of the day!
            </p>
            <div className="text-slate-700 ">
              What we offer in this call?
              <ul className="list-disc px-6">
                <li>Get our free Profile Analysis.</li>
                <li>Get free 30-minute session from our experts.</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col gap-2 min-[400px]:flex-row">
            <Button>Connect with Expert (Free)</Button>

            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1"
          className=" bg-slate-200 rounded-xl object-cover lg:order-first w-full md:w-5/6"
          height={500}
          width={500}
          alt="students studying"
        />
      </div>
    </section>
  );
}
