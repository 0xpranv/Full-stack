import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Promo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-18 bg-slate-50">
      <div className="container flex flex-col justify-between items-center ">
        <div className=" space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unlock the World with Our Expertise
            </h2>
            <div className="grid grid-col-3">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Personalized Counselling by experts who themselves studied
                abroad in world top universities!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-3xl space-y-6 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Our team of 20+ years combined experience will help you at every
            step and will get you into one of the world top universities!
          </p>
        </div>
        <Link href={"/booking"}>
          <Button className="w-full mt-7 max-w-[300px]">
            Book a free Call now!
          </Button>
        </Link>
      </div>
    </section>
  );
};
