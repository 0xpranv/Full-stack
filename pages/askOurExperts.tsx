
import { ExperCard } from "@/components/expertCards"
import Link from "next/link"

export default function AskOurExperts() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ask our Experts</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get personalized advice from our team of industry experts. Submit a question and we'll connect you with
                the right person to help.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Connect with an Expert
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-18 lg:py-24">
        <div className="container grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:px-6">
          
          <ExperCard />
          <ExperCard />
          <ExperCard />

        </div>
      </section>
    </div>
  )
}