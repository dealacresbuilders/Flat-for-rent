'use client'

import Image from "next/image"
import Link from "next/link"
import { useBlog } from "@/contextapi/BlogContext";
import "@/app/globals.css";

export default function BlogDetails({ post }) {

  const single = post?.blog;
  const { blogs: recentBlogs } = useBlog();

  return (
    <div className="max-w-6xl mx-auto gap-10 px-4 bg-gradient-to-b from-[#f4e9ed] to-white py-10">

      {/* 🔥 LEFT SIDE */}
      <article className="lg:col-span-2 space-y-10">

        {/* HERO */}
        <div className="w-full flex justify-center pt-6">
          <div className="w-full">

            {/* IMAGE */}
            <div className="w-full h-[260px] md:h-[480px] bg-white md:rounded-2xl overflow-hidden shadow-sm border border-[#56021F]/10">
              <Image
                src={single?.HeroImg?.url}
                unoptimized
                alt={single?.HeroAltText || "Blog Image"}
                width={1200}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE + DATE */}
            <div className="mt-6 px-2 md:px-0">

              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                {single?.Title}
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                {new Date(single?.Date).toDateString()}
              </p>

            </div>

          </div>
        </div>

        {/* BLOG CONTENT */}
        <div className="max-w-6xl mx-auto space-y-8">

          {single.Content?.map((section) => (

            <div key={section?._id}>

              {/* TEXT */}
              <div className="quill-content">
                <div
                  className="ql-editor !p-0 text-gray-800 leading-relaxed
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-gray-900
                  [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900
                  [&_p]:text-gray-700
                  [&_li]:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: section?.content }}
                />
              </div>

              {/* IMAGE */}
              {section?.img?.url && (
                <div className="w-full my-6 ">
                  <Image
                    src={section.img.url}
                    unoptimized
                    alt={section?.img?.altText || "Blog Image"}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-[260px] md:h-[480px] rounded-xl object-cover shadow-sm border border-[#56021F]/10"
                  />
                </div>
              )}

            </div>

          ))}

          {/* FAQs */}
          {/* FAQs */}
{single?.FAQs?.length > 0 && (
  <div className="mt-14">

    {/* HEADING */}
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4 max-w-6xl mx-auto">

      {single.FAQs.map((faq, i) => (
        <details
          key={i}
          className="group bg-white border border-[#56021F]/10 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
        >

          {/* QUESTION */}
          <summary className="flex justify-between items-center cursor-pointer list-none">

            <span className="font-semibold text-gray-900 group-hover:text-[#56021F] transition">
              {faq.Q}
            </span>

            {/* ICON */}
            <span className="ml-4 text-[#56021F] transition-transform duration-300 group-open:rotate-180">
              ▼
            </span>
          </summary>

          {/* ANSWER */}
          <div className="mt-3 text-gray-600 leading-relaxed border-t border-[#56021F]/10 pt-3">
            {faq.A}
          </div>

        </details>
      ))}

    </div>

  </div>
)}

        </div>

      </article>

      {/* 🔥 RIGHT SIDE (RECENT BLOGS) */}
      {/* <div className="hidden lg:block">
        <div className="sticky top-24 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow border border-[#56021F]/10">

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Recent Blogs
            </h3>

            <div className="space-y-4">

              {[...recentBlogs]
                ?.sort((a, b) => new Date(b.Date || b.date) - new Date(a.Date || a.date))
                ?.slice(0, 6)
                .map((item, index) => (
                  <Link
                    key={item._id || index}
                    href={`/blog/${item.Slug || item.slug}`}
                    className="flex gap-3 items-center group hover:bg-[#56021F]/5 p-2 rounded-lg transition"
                  >

                    <Image
                      src={
                        item?.HeroImg?.url ||
                        item?.image ||
                        "/fallback.jpg"
                      }
                      alt="recent blog"
                      width={80}
                      height={60}
                      className="rounded-lg object-cover w-20 h-16"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#56021F] transition">
                        {item?.Title || item?.title}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(item?.Date || item?.date).toDateString()}
                      </p>
                    </div>

                  </Link>
                ))}

            </div>

          </div>

        </div>
      </div> */}

    </div>
  )
}