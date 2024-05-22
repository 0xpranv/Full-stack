import Image from "next/image";
import Link from "next/link";

interface expertProps {
  name: string;
  imgSrc: string;
  designation: string;
  specialization: string;
  about: string;
}

export const ExperCard = ({ expert }: { expert: expertProps }) => {
  return (
    <div className="group flex flex-col justify-between items-start rounded-lg border border-primary bg-white p-6 shadow-sm shadow-slate-200 transition-all hover:shadow-primary/20 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex flex-row items-center gap-4">
        <Image
          alt="Expert"
          className="mb-1 border rounded-full bg-slate-100"
          height={50}
          src={expert.imgSrc}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width={50}
        />
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg text-gray-700 font-bold">{expert.name}</h3>
          <div className="text-sm font-semibold text-gray-500 ">
            {expert.designation}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-500">{expert.about}</p>
    </div>
  );
};
