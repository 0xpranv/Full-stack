import { Button } from "@/components/button";
import { ExperCard } from "@/components/expertCards";
import { H1 } from "@/components/heading";
import { expertsData } from "@/data/staticData";

export default function AskOurExperts() {
  return (
    <main>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mb-4">
              <H1>Ask Our Experts</H1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Get personalized advice from our team of industry experts.
                Submit a question and we&Prime;ll connect you with the right
                person to help.
              </p>
            </div>
            <Button variant="secondary">Connect with an Expert</Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:px-6">
          {expertsData.map((expert) => (
            <ExperCard key={expert.id} expert={expert} />
          ))}
        </div>
      </section>
    </main>
  );
}
