"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  // Blog post data array - contains sample blog entries
  const blogs = [
    {
      date: "20",
      month: "DEC",
      title: "Keep Your Business Safe & Ensure High Availability.",
      category: "Technology",
      comments: "0 Comments",
      author: "Dan Jatau",
      role: "Chief Solutions Architect",
    },
    {
      date: "20",
      month: "DEC",
      title: "What's Headless CMS",
      category: "Technology",
      comments: "0 Comments",
      author: "Dan Jatau",
      role: "Chief Solutions Architect",
    },
    {
      date: "20",
      month: "DEC",
      title: "The State Of Headless In 2024",
      category: "Technology",
      comments: "0 Comments",
      author: "Dan Jatau",
      role: "Chief Solutions Architect",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 bg-[#fff]">
      {/* Section header with gradient text */}
      <div className="md:max-w-28 text-center md:text-left">
        <h2 className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          Latest News
        </h2>
      </div>

      {/* Main title and view all button container */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Main section title with gradient ampersand */}
        <h3 className="blog-title text-[24px] md:text-[50px] text-[#000]">
          Latest News{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F29F5C]">
            &
          </span>{" "}
          <span className="text-[#000]">Blog</span>
        </h3>

        {/* View all button group with arrow icon */}
        <div className="mt-8 flex gap-3 md:gap-0 sm:flex-row justify-center lg:justify-start items-center ">
          <Link
            href="/blog"
            className="bg-[#fde9d9] uppercase text-[#f26b01] px-6 py-3 rounded-full text-lg sm:text-lg font-medium"
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

      {/* Main blog cards container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured blog card (left side) */}
        <div className="flex flex-col w-full justify-between bg-[#C4C4C4] cursor-pointer hover:bg-gradient-to-b from-gray-200 to-[#f26b01] p-6 rounded-2xl shadow-md relative">
          {/* Date badge with orange background */}
          <div className="flex flex-col justify-center text-sm max-w-[60px] rounded-lg py-2 px-3 bg-[#f26b01] text-[#fff] font-semibold">
            <span className="text-[22px] blog-date-title">{blogs[0].date}</span>
            <span className="text-[16px] blog-date-title">
              {blogs[0].month}
            </span>
          </div>

          {/* Category and comments metadata */}
          <div className="flex flex-col">
            <div className="flex gap-1 md:gap-4 mt-4 text-sm text-[#fff] blog-date-title">
              {/* Category section */}
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/blog/tag.png"
                  width={20}
                  height={20}
                  alt="tag"
                />
                <span className="text-white">{blogs[0].category}</span>
              </div>

              {/* Comments section */}
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/blog/message.png"
                  width={20}
                  height={20}
                  alt="tag"
                />
                <span className="text-white">{blogs[0].comments}</span>
              </div>
            </div>

            {/* Blog post title */}
            <h4 className="mt-2 text-xl font-bold text-[#fff] blog-date-title">
              {blogs[0].title}
            </h4>
          </div>
        </div>

        {/* Secondary blog posts container (right side) */}
        <div className="space-y-6">
          {blogs.slice(1).map((blog, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 md:p-4 bg-[#fff] border border-[#EAF3F8] rounded-lg"
            >
              {/* Date container with hover effect */}
              <div className="bg-[#C4C4C4] cursor-pointer hover:bg-gradient-to-b from-gray-200 to-[#f26b01] w-full max-w-[110px] md:max-w-[170px] flex justify-start items-start p-3 rounded-lg">
                {/* Date badge */}
                <div className="flex flex-col justify-center items-center text-sm max-w-[60px] rounded-lg py-1 px-3 bg-[#f26b01] text-[#fff] font-semibold">
                  <span className="text-[16px] blog-date-title">
                    {blogs[0].date}
                  </span>
                  <span className="text-[12px] blog-date-title">
                    {blogs[0].month}
                  </span>
                </div>
              </div>

              {/* Blog content section */}
              <div>
                {/* Category and comments metadata */}
                <div className="flex gap-4 mt-4 text-sm text-[#fff] blog-date-title">
                  {/* Category section */}
                  <div className="flex gap-1 md:gap-3 items-center">
                    <Image
                      src="/assets/blog/color-tag.png"
                      width={20}
                      height={20}
                      alt="tag"
                    />
                    <span className="text-black text-[10px] md:text-[14px]">
                      {blogs[0].category}
                    </span>
                  </div>

                  {/* Comments section */}
                  <div className="flex gap-1 md:gap-3 items-center">
                    <Image
                      src="/assets/blog/color-message.png"
                      width={20}
                      height={20}
                      alt="tag"
                    />
                    <span className="text-black text-[10px] md:text-[14px]">
                      {blogs[0].comments}
                    </span>
                  </div>
                </div>

                {/* Blog post title */}
                <h5 className="mt-2 font-semibold text-[#000] text-[14px] md:text-[24px]">
                  {blog.title}
                </h5>

                {/* Author information section */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-14">
                  <Image
                    src="/assets/blog/circle.png"
                    width={56}
                    height={56}
                    alt="tag"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#f26b01] blog-date-title text-[12px] md:text-[14px]">
                      By {blog.role}
                    </span>
                    <span className="text-[#000] blog-date-title text-[12px] md:text-[14px]">
                      {blog.author}
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
