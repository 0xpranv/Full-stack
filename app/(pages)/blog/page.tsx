import { BlogArticleCard } from "@/components/blogArticleCard";
import { Button } from "@/components/button";
import { H1 } from "@/components/heading";
import Link from "next/link";
// fetch the blogs from database and display them
// then store them into a state management library and access them inside the blogaArticleCard component
import { blogData } from "@/data/staticData";

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
    <main className="container">
      <section className="py-12 flex flex-col items-center justify-center">
        <div className="">
          <H1 className="text-center">Blogs</H1>
          <p className="text-xl text-muted-foreground mt-7">
            Find blogs that will help your study abroad journey!
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-3 py-12">
        {blogData.map((post) => (
          <BlogArticleCard key={post.title} post={post} />
        ))}
      </section>
    </main>
  );
}
