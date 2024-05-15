import { SevenStepProcessData } from "@/data/staticData";

export const CTA = () => {
  return (
    <section className="text-gray-600">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-center font-bold text-3xl w-full mx-auto">
            We follow Seven Steps for your guaranteed Success!
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Our international team with combined experience of 20+ years will
            help you at every step of the process to ensure that you achieve
            great success in your study abroad journey
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:mx-auto sm:mb-2 -mx-2">
          {SevenStepProcessData.map((step) => (
            <div key={step.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
