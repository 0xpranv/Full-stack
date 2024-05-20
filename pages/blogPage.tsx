"use client";

import { H1 } from "@/components/heading";
import { useParams } from "next/navigation";
import { blogData } from "@/data/staticData";

export function FullBlog() {
  const params = useParams<{ slug: string }>();

  console.log(params?.slug);
  // check if the slug is present in the database and fetch it

  const blog = blogData.find((blog) => blog.slug === params?.slug);

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Jese Leos
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator &amp; CEO Flowbite
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime={blog?.date}>{blog?.date}</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {blog?.title}
            </h1>
          </header>
          <p className="lead">{blog?.description}</p>
        </article>
      </div>
    </main>
  );
}

export default FullBlog;
