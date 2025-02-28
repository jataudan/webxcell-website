"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "../Pagination/Pagination";
import { getBlogPost } from "@/lib/queries/getBlogPosts";

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogPost();
      if (response) {
        setBlogData(response);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 mb-[150px]">
      <div className="container mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[200px]">
        {blogData?.data?.map((blog) => (
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
