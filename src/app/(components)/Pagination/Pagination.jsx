"use client";

import Image from "next/image";
import { useState } from "react";

const Pagination = ({ totalPages, initialPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex items-center space-x-4 justify-center mt-6">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className={`h-10 w-10 flex items-center justify-center rounded-full ${
          currentPage === 1
            ? "bg-gray-200 hover:bg-[--primary]"
            : "bg-[--primary] hover:bg-[--primary]"
        }`}
        disabled={currentPage === 1}
      >
        <Image
          src={
            currentPage === 1
              ? "/assets/blog/left-black-arrow.png"
              : "/assets/blog/left-white-arrow.png"
          }
          alt="arrow"
          width={9}
          height={5}
          className="absolute transition-opacity duration-300 opacity-100 hover:opacity-0"
        />
        <Image
          src="/assets/blog/left-white-arrow.png"
          alt="arrow"
          width={9}
          height={5}
          className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
        />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`h-10 w-10 flex items-center justify-center rounded-full border ${
              currentPage === page
                ? "border-[--primary] text-[--primary]"
                : "bg-blue-50 text-black"
            }`}
          >
            {page < 10 ? `0${page}` : page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`h-10 w-10 flex items-center justify-center rounded-full ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed hover:bg-[--primary]"
            : "bg-[--primary] text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        <Image
          src={
            currentPage === 1
              ? "/assets/blog/right-white-arrow.png"
              : "/assets/blog/right-black-arrow.png"
          }
          alt="arrow"
          width={9}
          height={5}
          className="absolute transition-opacity duration-300 opacity-100 hover:opacity-0"
        />
        <Image
          src="/assets/blog/right-white-arrow.png"
          alt="arrow"
          width={9}
          height={5}
          className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
        />
      </button>
    </div>
  );
};

export default Pagination;
