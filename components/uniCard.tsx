"use client";

import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { MapPinIcon } from "@/pages/exploreUniversities";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

interface UniversityProps {
  uni_id: number;
  QS_Rankings: number;
  Times_Rankings: number;
  university: string;
  type: string;
  slug: string;
  country: string;
  address: string;
  uni_fees: {
    out_of_state_tuition_fee: string;
    accomodation_expenses: string;
  };
  exams_accepted?: any;
  courses_offered: any;
}

export const UniCard = ({ data }: { data: UniversityProps }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/universities/" + data.slug)}
      className="grid gap-4 p-6 rounded-lg border shadow-sm hover:cursor-pointer hover:shadow-xl hover:scale-[0.98] transform transition ease-in-out delay-100 hover:shadow-primary/10 bg-slate-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2 text-sm text-gray-500">
          <h3 className="text-lg font-semibold text-primary/90">
            {data.university}
          </h3>
          <div className="flex gap-2 items-center">
            <MapPinIcon className="w-4 h-4" />
            <h3 className="">
              {data.country} . {data.type}
            </h3>
          </div>
          <div className="flex gap-3">
            <div className="">
              <p className="font-light">Courses offered</p>
              <p className="">{`${data.courses_offered.length} Courses`}</p>
            </div>
            <div className="">
              <p className="font-light">Exams Accepted</p>
              {data.exams_accepted ? (
                <p className="">
                  {data.exams_accepted.length > 2
                    ? `${data.exams_accepted[0]}, ${data.exams_accepted[1]}
                     +${data.exams_accepted.length - 2}`
                    : data.exams_accepted.join(", ")}
                </p>
              ) : (
                <p className="">- / -</p>
              )}
            </div>
          </div>
        </div>
        <span className="font-semibold text-3xl font-semibold">
          {data.QS_Rankings}
        </span>
      </div>
    </div>
  );
};

interface UniCardElements {
  id: number;
  title: string;
  link: string;
}

export const UniSectionCard = ({
  title,
  elements,
}: {
  title: string;
  elements: UniCardElements[];
}) => {
  return (
    <Card className="w-full h-min mb-6 rounded-xl border-2 border-secondary/70 shadow-xl">
      <CardHeader className="flex items-center justify-between px-6 py-4">
        <div className="flex items-left space-x-4">
          <RocketIcon className="h-6 w-6 text-gray-500" />
          <h3 className="text-lg text-left text-gray-500 font-semibold">
            {title}
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {elements.map((element) => (
            <li key={element.id} className="flex items-center">
              <input
                id={element.title}
                type="checkbox"
                className="w-4 h-4 bg-secondary border-2 border-secondary rounded-lg text-secondary  cursor-pointer"
                value={element.title}
              />
              <label
                htmlFor={element.title}
                className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                {element.title}
              </label>
            </li>
          ))}
          {/* <li className="flex flex-col justify-center border border-pink-400 p-4">
            <p className="text-center p-0 m-0">More</p>
          </li> */}
        </ul>
      </CardContent>
    </Card>
  );
};

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
