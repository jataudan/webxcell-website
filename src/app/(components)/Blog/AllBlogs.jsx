"use client";

import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogCardImage from "../../../../public/assets/blog/card-image.png";
import Pagination from "../Pagination/Pagination";

// blogs.js
export const blogs = [
  {
    id: 1,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Business Strategy For Marketing System",
    slug: "business-strategy-for-marketing-system",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 2,
    image: BlogCardImage,
    tag: "Corporate",
    date: "April 16, 2024",
    title: "Why Is Supply Chain Visibility So Important?",
    slug: "why-is-supply-chain-visibility-important",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 3,
    image: BlogCardImage,
    tag: "Marketing",
    date: "March 22, 2024",
    title: "Discover A Better Way Of Redefining Company Goals",
    slug: "discover-a-better-way-of-redefining-goals",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 4,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Another Expert Business Strategy Example",
    slug: "another-business-strategy-example",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 5,
    image: BlogCardImage,
    tag: "Corporate",
    date: "April 16, 2024",
    title: "Understanding Corporate Growth Strategies",
    slug: "understanding-corporate-growth-strategies",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 6,
    image: BlogCardImage,
    tag: "Marketing",
    date: "March 22, 2024",
    title: "Effective Marketing Techniques for 2024",
    slug: "effective-marketing-techniques-2024",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
  {
    id: 7,
    image: BlogCardImage,
    tag: "Business",
    date: "March 24, 2024",
    title: "Innovative Ideas for Business in 2024",
    slug: "innovative-ideas-for-business-2024",
    author: "Dan Jatsu",
    designation: "Managing Consultant",
  },
];

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10 mb-[150px]">
      <div className="container mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[200px]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="container mx-auto mt-14 md:px-[200px]">
        <hr />
        <div className="mb-12">
          <Pagination
            totalPages={totalPages}
            initialPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
