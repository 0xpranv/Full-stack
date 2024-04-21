import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section key="1" className="w-full py-12 md:py-16 lg:py-18">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              A commitment to become the best version of yourself!
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">Are you ready to take action now ?</p>
          </div>
          <div className="pt-10 flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Book a free consultation!
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div
          className="bg-slate-200 mx-auto aspect-square overflow-hidden rounded-xl object-cover lg:order-first w-full h-[60%]"
        />
      </div>
    </section>
  )
}