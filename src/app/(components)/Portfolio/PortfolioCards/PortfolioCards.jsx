"use client";

import { getProjectDetail } from "@/lib/queries/getProjectDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const PortfolioCards = () => {
  const router = useRouter();
  const [projectDetail, setProjectDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectDetail();
      if (response) {
        setIsLoading(false);
        setProjectDetail(response?.data || []);
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
    <div className="container mx-auto px-4 py-8 md:mb-[130px]">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-center items-center">
        {/* Large Box - First Item */}
        {projectDetail.length > 0 && (
          <div className="w-full flex flex-col justify-end md:max-w-[500px] h-[707px] bg-[#C4C4C4] hover:bg-custom-gradient rounded-[20px] p-6 shadow-lg text-white group cursor-pointer">
            <div className="flex w-full justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h3 className="text-lg font-semibold">
                  {projectDetail[0]?.title}
                </h3>
                <p className="text-sm">
                  {projectDetail[0]?.tag?.name || "Uncategorized"}
                </p>
              </div>
              <button
                onClick={() =>
                  router.push(`/portfolio/${projectDetail[0]?.slug}`)
                }
              >
                <Image
                  src="/assets/portfolio/arrow.png"
                  alt="shape"
                  width={60}
                  height={60}
                />
              </button>
            </div>
          </div>
        )}

        {/* Small Boxes */}
        <div className="w-full flex flex-col gap-[20px] justify-center items-center md:max-w-[502px]">
          {projectDetail.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="w-full md:max-w-[570px] h-[343px] bg-[#C4C4C4] rounded-[20px] p-6 text-white group relative overflow-hidden cursor-pointer"
            >
              {/* Overlay with hover effect */}
              <div className="flex w-full justify-between items-end absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] p-6">
                <div>
                  <h3 className="text-lg font-semibold">{item?.title}</h3>
                  <p className="text-sm">
                    {item?.tag?.name || "Uncategorized"}
                  </p>
                </div>
                <button onClick={() => router.push(`/portfolio/${item?.slug}`)}>
                  <Image
                    src="/assets/portfolio/arrow.png"
                    alt="shape"
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-center items-center mt-[20px]">
        {/* Small Boxes */}
        <div className="w-full flex flex-col gap-[20px] justify-center items-center md:max-w-[502px]">
          {projectDetail.slice(4).map((item) => (
            <div
              key={item.id}
              className="w-full md:max-w-[570px] h-[343px] bg-[#C4C4C4] rounded-[20px] p-6 text-white group relative overflow-hidden cursor-pointer"
            >
              {/* Overlay with hover effect */}
              <div className="flex w-full justify-between items-end absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] p-6">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">
                    {item?.tag?.name || "Uncategorized"}
                  </p>
                </div>
                <button onClick={() => router.push(`/portfolio/${item?.slug}`)}>
                  <Image
                    src="/assets/portfolio/arrow.png"
                    alt="shape"
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Large Box - Last Item */}
        {projectDetail.length > 1 && (
          <div className="w-full flex flex-col justify-end md:max-w-[500px] h-[707px] bg-[#C4C4C4] hover:bg-custom-gradient rounded-[20px] p-6 shadow-lg text-white group transition-colors duration-300 cursor-pointer">
            <div className="flex w-full justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h3 className="text-lg font-semibold">
                  {projectDetail[projectDetail.length - 1]?.title}
                </h3>
                <p className="text-sm">
                  {projectDetail[projectDetail.length - 1]?.tag?.name ||
                    "Uncategorized"}
                </p>
              </div>
              <button
                onClick={() =>
                  router.push(
                    `/portfolio/${
                      projectDetail[projectDetail.length - 1]?.slug
                    }`
                  )
                }
              >
                <Image
                  src="/assets/portfolio/arrow.png"
                  alt="shape"
                  width={60}
                  height={60}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCards;
