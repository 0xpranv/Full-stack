import { Button } from "@/components/button";
import { H1 } from "@/components/heading";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="flex flex-col space-y-12 md:space-y-16 lg:space-y-18 py-12 md:py-16 lg:py-18">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="bg-slate-200 rounded-xl lg:order-first w-full"
              alt="hero"
              src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78"
              height={500}
              width={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <H1>
              About Us
              {/* <br className="hidden lg:inline-block" /> */}
            </H1>
            <p className="my-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <Button>Connect with Expert!</Button>
              {/* <Button variant="secondary" className="ml-4">
                Button
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 bg-slate-50">
        <div className="container py-6 lg:py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-center md:text-left font-bold text-3xl w-full">
                Our Vision
              </h2>
              <p className="text-gray-500 text-lg  ">
                To create cutting-edge technology that drives progress, fosters
                collaboration, and inspires our team to push the boundaries of
                what″s possible.
              </p>
            </div>
            <div>
              <h2 className="text-center md:text-left font-bold text-3xl w-full">
                Our Mission
              </h2>
              <p className="text-gray-500 text-lg">
                To create cutting-edge technology that drives progress, fosters
                collaboration, and inspires our team to push the boundaries of
                what&Prime;s possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-gray-600">
        <div className="container ">
          <h2 className="font-bold text-center text-3xl w-full">Our Team</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            Our team with combined experience of 20+ years will help you at
            every step of the process to ensure that you achieve great success
            in your study abroad journey
          </p>
          <div className="flex flex-wrap -m-4 pt-20">
            <TeamCard
              name="Rahul Kumar"
              position="CEO"
              intro="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
              imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            />
            <TeamCard
              name="Tahsin Chouhan"
              position="CTO"
              intro="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
              imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            />
            <TeamCard
              name="Rahul Kumaar"
              position="CFO"
              intro="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
              imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            />
            <TeamCard
              name="Rahul Kumar"
              position="CEO"
              intro="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
              imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            />
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
  imgSrc,
  className,
}: {
  name: string;
  position: string;
  intro: string;
  imgSrc: string;
  className?: string;
}) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div
        className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ${className}`}
      >
        <Image
          alt="team"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={imgSrc}
          height={200}
          width={200}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="font-medium text-xl text-gray-900">{name}</h2>
          <h3 className="text-gray-500 mb-3">{position}</h3>
          <p className="mb-4">{intro}</p>
          <span className="inline-flex">
            <a className="text-primary">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-2 text-primary">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-2 text-primary">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
