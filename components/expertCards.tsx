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
    <div className="group flex flex-col items-start rounded-lg border border-primary bg-white p-6 shadow-sm shadow-slate-200 transition-all hover:shadow-primary/20 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex flex-row justify-center items-center gap-6">
        <Image
          alt="Expert"
          className="mb-1 rounded-full bg-slate-100"
          height={50}
          src={expert.imgSrc}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width={50}
        />
        <h3 className="mb-2 text-lg font-semibold">{expert.name}</h3>
      </div>
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {expert.designation}
      </div>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        {expert.about}
      </p>
      <Link
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Connect with {expert.name.split(" ")[0]}
      </Link>
    </div>
  );
};
