"use client";

import { getDay, getMonth } from "@/lib/formatDate";
import { getBlogPost } from "@/lib/queries/getBlogPosts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getBlogPost();
        if (response) {
          setIsLoading(false);
          setBlogData(response?.data);
        }
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log("blogData", blogData);

  return (
    <div className="container mx-auto px-4 py-10 bg-[#fff]">
      {/* Section Header */}
      <div className="md:max-w-28 text-center md:text-left">
        <h2 className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC] w-max">
          Latest News
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h3 className="blog-title text-[24px] md:text-[50px] text-[#000]">
          Latest News{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[#F29F5C]">
            &
          </span>{" "}
          <span className="text-[#000]">Blog</span>
        </h3>
        <div className="mt-8 flex gap-3 md:gap-0 sm:flex-row justify-center lg:justify-start items-center ">
          <Link
            href="/blog"
            className="bg-[#fde9d9] uppercase text-[--primary] px-6 py-3 rounded-full text-lg sm:text-lg font-medium"
          >
            View All News
          </Link>
          <Link href="/blog">
            <Image
              src="/assets/digital-agency/up-right.png"
              alt="arrow"
              width={52}
              height={52}
            />
          </Link>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Highlighted Blog Card */}
        <div
          className="relative  cursor-pointer p-6 rounded-2xl shadow-md group overflow-hidden"
          style={{
            backgroundImage: `url(${blogData[0]?.coverImage570x582?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* gradient overlay on hover only */}
          <div className="absolute inset-0 bg-gradient-to-t from-[--primary] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl z-10" />

          {/* content above everything */}
          <div className="relative z-20 flex flex-col w-full justify-between h-full">
            {/* Date badge */}
            <div className="flex flex-col justify-center text-sm max-w-[90px] rounded-lg py-2 px-3 bg-[--primary] text-[#fff] font-semibold">
              <span className="text-[22px] blog-date-title">
                {getDay(blogData[0]?.date)}
              </span>
              <span className="text-[16px] blog-date-title">
                {getMonth(blogData[0]?.date)}
              </span>
            </div>

            {/* Meta info + title */}
            <div className="flex flex-col">
              <div className="flex gap-1 md:gap-4 mt-4 text-sm text-[#fff] blog-date-title">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/assets/blog/tag.png"
                    width={20}
                    height={20}
                    alt="tag"
                  />
                  <span className="text-white">{blogData[0]?.tag}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/assets/blog/message.png"
                    width={20}
                    height={20}
                    alt="comments"
                  />
                  <span className="text-white">
                    {blogData[0]?.blog_comments?.length}
                  </span>
                </div>
              </div>
              <h4 className="mt-2 text-xl font-bold text-[#fff] blog-date-title">
                {blogData[0]?.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Smaller Blog Cards */}
        <div className="space-y-6">
          {blogData?.slice(1, 3).map((blog, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 md:p-4 bg-[#fff] border border-[#EAF3F8] rounded-lg"
            >
              {/* Left: Image background with hover gradient */}
              <div
                className="relative cursor-pointer w-full max-w-[110px] md:max-w-[170px] flex justify-start items-start p-3 rounded-lg overflow-hidden group"
                style={{
                  backgroundImage: `url(${blog?.coverImage570x582?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[--primary] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg z-10" />

                {/* Date badge */}
                <div className="relative z-20">
                  <div className="flex flex-col justify-center items-center text-sm max-w-[60px] rounded-lg py-1 px-3 bg-[--primary] text-[#fff] font-semibold">
                    <span className="text-[16px] blog-date-title">
                      {getDay(blog?.date)}
                    </span>
                    <span className="text-[12px] blog-date-title">
                      {getMonth(blog?.date)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="flex gap-4 mt-4 text-sm text-[#fff] blog-date-title">
                  <div className="flex gap-1 md:gap-3 items-center">
                    <Image
                      src="/assets/blog/color-tag.png"
                      width={20}
                      height={20}
                      alt="tag"
                    />
                    <span className="text-black text-[10px] md:text-[14px]">
                      {blog?.tag}
                    </span>
                  </div>
                  <div className="flex gap-1 md:gap-3 items-center">
                    <Image
                      src="/assets/blog/color-message.png"
                      width={20}
                      height={20}
                      alt="comments"
                    />
                    <span className="text-black text-[10px] md:text-[14px]">
                      {blog?.blog_comments?.length} Comments
                    </span>
                  </div>
                </div>

                <h5 className="mt-2 font-semibold text-[#000] text-[14px] md:text-[24px]">
                  {blog?.title}
                </h5>

                <div className="flex items-center gap-3 text-sm text-gray-500 mt-14">
                  <Image
                    src={
                      blog?.author?.avatar56x56
                        ? blog?.author?.avatar56x56?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    width={56}
                    height={56}
                    alt="avatar"
                    className="rounded-full h-[50px] w-[50px] object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[--primary] blog-date-title text-[12px] md:text-[14px]">
                      By {blog?.author?.designation}
                    </span>
                    <span className="text-[#000] blog-date-title text-[12px] md:text-[14px]">
                      {blog?.author?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
