import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32 ">
        <div className="container max-w-6xl lg:py-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Us.
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-lg md:text-xl">
              Innovating the future with cutting-edge technology and a
              passionate team.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl py-6 lg:py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                To be the leading provider of innovative solutions that
                transform industries and empower our customers to achieve their
                goals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                To create cutting-edge technology that drives progress, fosters
                collaboration, and inspires our team to push the boundaries of
                what&Prime;s possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container max-w-6xl py-6 lg:py-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TeamCard
              name={"Rahul Kumar"}
              position={"CEO"}
              intro={
                "Rahul is the visionary behind Helpstudyabroad's, leading the company to new heights with his strategic expertise and innovative mindset."
              }
            />
            <Card>
              <CardContent className="flex flex-col items-center text-center space-y-2">
                <Avatar className="mb-4 w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.svg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Jane Appleseed</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Chief Technology Officer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jane is the driving force behind Acme&Prime;s cutting-edge
                  technology, ensuring our solutions are at the forefront of
                  innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center space-y-2">
                <Avatar className="mb-4 w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.svg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Sarah Musk</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Chief Operating Officer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sarah is the backbone of Acme, ensuring our operations run
                  smoothly and efficiently to deliver the best possible
                  experience for our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

export const TeamCard = ({
  name,
  position,
  intro,
}: {
  name: string;
  position: string;
  intro: string;
}) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center space-y-2">
        <Avatar className="mb-4 w-24 h-24">
          <AvatarImage src="/placeholder-avatar.svg" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{position}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{intro}</p>
      </CardContent>
    </Card>
  );
};
