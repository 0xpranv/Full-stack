"use client";

import { useParams } from "next/navigation";
import { blogData } from "@/data/staticData";
import { UniSectionCard } from "@/components/uniCard";
import { Card, Space } from "antd";
import Image from "next/image";

export function FullBlog() {
  const params = useParams<{ slug: string }>();

  console.log(params?.slug);
  // check if the slug is present in the database and fetch it

  const blog = blogData.find((blog) => blog.slug === params?.slug);

  return (
    <main className="container pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="grid md:grid-cols-8 gap-4">
        <div className="grid col-span-6 mx-auto w-full ">
          <article className="">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                  <img
                    className="mr-4 w-12 md:w-16 h-12 md:h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="md:text-xl font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-sm md:text-base text-gray-500">
                      Graphic Designer, educator &amp; CEO Flowbite
                    </p>
                    <p className="text-sm md:text-base text-gray-500 ">
                      <time dateTime={blog?.date}>{blog?.date}</time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-xl md:text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {blog?.title}
              </h1>
            </header>
            <p className="lead">{blog?.description}</p>
          </article>
          <div className="w-full py-7 space-y-4">
            <h3 className="font-semibold text-gray-600">Add a Comment</h3>
            <div className="w-full">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle text-gray-600"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Post your thoughts ..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only">Comment</span>
                </button>
              </form>
            </div>

            {/* Comment */}
            <div className="flex items-start gap-2.5">
              <Image
                className="w-8 h-8 rounded-full object-cover "
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                height={12}
                width={12}
                alt="Jese image"
              />
              <div className="flex flex-col gap-1 w-[90%]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 ">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 ">
                    11:46
                  </span>
                </div>
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                  <p className="text-sm mt-0 font-normal text-gray-900 ">
                    That's awesome. I think our users will really appreciate the
                    improvements.
                  </p>
                </div>
                {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11.50
                </span> */}
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Image
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                height={12}
                width={12}
                alt="Jese image"
              />
              <div className="flex flex-col gap-1 w-[90%]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 ">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 ">
                    11:46
                  </span>
                </div>
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                  <p className="text-sm mt-0 font-normal text-gray-900 ">
                    That's awesome. I think our users will really appreciate the
                    improvements.
                  </p>
                </div>
                {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11.50
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:col-span-2 ">
          <Space direction="vertical" size={16}>
            <Card
              title="Recommended Blogs"
              // extra={<a href="#">More</a>}
              className="w-full shadow shadow-lg border-secondary"
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space>
        </div>
      </div>
    </main>
  );
}

export default FullBlog;
