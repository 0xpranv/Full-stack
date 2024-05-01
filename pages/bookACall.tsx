import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
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
            <div className="pt-5">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Degree you&apos;re planning to study
                    </Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Call Time</Label>
                  <Input
                    id="time"
                    placeholder="Select a time"
                    required
                    type="datetime-local"
                  />
                </div>
                <Button className="w-full" type="submit">
                  Schedule Call
                </Button>
              </form>
            </div>
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
