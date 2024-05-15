import Image from "next/image";

import { fiveReasons } from "@/data/staticData";
import { Button } from "./button";

const Reasons = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-wrap">
        <h2 className="text-center font-bold text-3xl w-full mx-auto">
          Reasons to book a free consultation now
        </h2>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
          Our team with combined experience of 20+ years will help you at every
          step of the process to ensure that you achieve great success in your
          study abroad journey
        </p>

        <div className="flex flex-col items-center w-full pt-7">
          <div className="w-full">
            {fiveReasons.map((reason, index) => (
              <div
                key={reason.id}
                className={`flex relative py-4 items-center ${"justify-start"} md:w-1/2 `}
                style={{
                  flexDirection: index % 2 == 0 ? "row" : "row-reverse",
                  marginLeft: index % 2 == 0 ? "auto" : 0,
                  marginRight: index % 2 !== 0 ? "auto" : 0,
                }}
              >
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  {/* {index !== 4 && (
                    <div className="h-full w-1 bg-gray-200 pointer-events-none justify-start" />
                  )} */}
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  {reason.svg ? (
                    reason.svg
                  ) : (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                </div>
                <h3
                  className="font-medium title-font text-base text-gray-900 px-4"
                  // style={{
                  //   padding: index % 2 == 0 ? "" : "row-reverse",
                  // }}
                >
                  <span className="text-primary">
                    {reason.description.split(" ")[0]}
                  </span>
                  &nbsp;
                  {reason.description.split(" ").slice(1).join(" ")}
                </h3>
              </div>
            ))}
          </div>
          {/* <Image
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://plus.unsplash.com/premium_photo-1669825003963-b76f8035d678"
            alt="step"
            width={500}
            height={500}
          /> */}
        </div>
        <Button className="flex mx-auto mt-10 ">
          Book a Free Consultation now!
        </Button>
      </div>
    </section>
  );
};

export default Reasons;
