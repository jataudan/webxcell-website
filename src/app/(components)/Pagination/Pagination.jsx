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
          currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-blue-50"
        }`}
        disabled={currentPage === 1}
      >
        <Image src="/assets/blog/left-arrow.png" alt="" width={9} height={5} />
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
                ? "border-orange-500 text-orange-500"
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
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-orange-500 text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        <Image src="/assets/blog/right-arrow.png" alt="" width={9} height={5} />
      </button>
    </div>
  );
};

export default Pagination;
