"use client";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogArticleCardProps {
  title: string;
  imageSrc: string;
  description: string;
  date: string;
  slug: string;
}

export const BlogArticleCard = ({ post }: { post: BlogArticleCardProps }) => {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push("/blog/" + post.slug)}
      className="group justify-between relative flex flex-col space-y-2 p-4 bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-primary/20 transform transition ease-in-out delay-100"
    >
      {/* {post.image && ( */}
      <Image
        src={post.imageSrc}
        alt={"img"}
        style={{ objectFit: "cover" }}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors h-48"
      />
      {/* )} */}
      <h2 className="text-xl font-extrabold">{post.title}</h2>

      <p className="text-muted-foreground text-sm line-clamp-3">
        {/* {post.description.slice(0, 100) + "..."} */}
        {post.description}
      </p>
      <div className="flex flex-row justify-between items-center bottom-0">
        <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
        <div className="text-center mt-2 leading-none flex justify-center ">
          <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            6
          </span>
        </div>
      </div>
    </article>
  );
};
