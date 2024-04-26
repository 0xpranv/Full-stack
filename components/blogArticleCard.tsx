import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const BlogArticleCard = () => {
  return (
    <article className="group relative flex flex-col space-y-2">
      {/* {post.image && ( */}
      <Image
        src={"/blog/blog-post-1.jpg"}
        alt={"img"}
        style={{ objectFit: "cover" }}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
      />
      {/* )} */}
      <h2 className="text-2xl font-extrabold">{"Deploying Next.js Apps "}</h2>

      <p className="text-muted-foreground">
        {"Deploying Next.js Apps How to deploy your Next.js apps on Vercel."}
      </p>

      <p className="text-sm text-muted-foreground">
        {formatDate("12-04-2024")}
      </p>

      <Link href={"/1"} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
};
