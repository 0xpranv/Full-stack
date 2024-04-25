import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { allPosts } from "contentlayer/generated";
// import { compareDesc } from "date-fns";

// import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  //   const posts = allPosts
  //     .filter((post) => post.published)
  //     .sort((a, b) => {
  //       return compareDesc(new Date(a.date), new Date(b.date));
  //     });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />

      <div className="grid gap-10 sm:grid-cols-2">
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
      </div>
    </div>
  );
}

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
