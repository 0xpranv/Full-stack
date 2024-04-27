import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section key="1" className="py-12 md:py-16 lg:py-18">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-1 max-w-5xl">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              A Commitment to Become the Best Version of Yourself!
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Are you ready to take action now ?
            </p>
          </div>
          <div className="pt-10 flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Book a free consultation!
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1"
          className=" bg-slate-200 rounded-xl object-cover lg:order-first w-full aspect-square md:w-5/6"
          alt="students studying"
        />
      </div>
    </section>
  );
}
