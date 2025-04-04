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
        <div className="flex flex-col w-full justify-between bg-[#C4C4C4] cursor-pointer hover:bg-gradient-to-b from-gray-200 to-[--primary] p-6 rounded-2xl shadow-md relative">
          <div className="flex flex-col justify-center text-sm max-w-[90px] rounded-lg py-2 px-3 bg-[--primary] text-[#fff] font-semibold">
            <span className="text-[22px] blog-date-title">
              {getDay(blogData[0]?.date)}
            </span>
            <span className="text-[16px] blog-date-title">
              {getMonth(blogData[0]?.date)}
            </span>
          </div>
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
              </div>{" "}
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/blog/message.png"
                  width={20}
                  height={20}
                  alt="tag"
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

        {/* Smaller Blog Cards */}
        <div className="space-y-6">
          {blogData?.slice(1, 3).map((blog, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 md:p-4 bg-[#fff] border border-[#EAF3F8] rounded-lg"
            >
              <div className="bg-[#C4C4C4] cursor-pointer hover:bg-gradient-to-b from-gray-200 to-[--primary] w-full max-w-[110px] md:max-w-[170px] flex justify-start items-start p-3 rounded-lg">
                <div className="flex flex-col justify-center items-center text-sm max-w-[60px] rounded-lg py-1 px-3 bg-[--primary] text-[#fff] font-semibold">
                  <span className="text-[16px] blog-date-title">
                    {getDay(blog?.date)}
                  </span>
                  <span className="text-[12px] blog-date-title">
                    {getMonth(blog?.date)}
                  </span>
                </div>
              </div>
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
                      alt="tag"
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
                      blog?.author?.avatar
                        ? blog?.author?.avatar?.url
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
