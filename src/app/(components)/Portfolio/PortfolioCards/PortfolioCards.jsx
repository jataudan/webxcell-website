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
    <div className="container grid grid-cols-3 gap-[20px] mx-auto px-4 py-8 md:mb-[130px]">
      {/* First Row */}
      {projectDetail.map((item) => {
        return (
          <div
            className=" lg:flex-row w-full  justify-center items-center"
            onClick={() => router.push(`/portfolio/${item?.slug}`)}
          >
            {/* Small Boxes */}
            <div
              className="w-full justify-center items-center"
              onClick={() => router.push(`/portfolio/${item?.slug}`)}
            >
              <div
                key={item.id}
                className=" w-full md:max-w-[570px] h-[343px] bg-[#C4C4C4] rounded-[20px] p-6 text-white group relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${item?.projectImages1194x543?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay with hover effect */}
                <div className="flex w-full justify-between items-end absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] p-6">
                  <div>
                    <h3 className="text-lg font-semibold">{item?.title}</h3>
                    <p className="text-sm">
                      {item?.tag?.name || "Uncategorized"}
                    </p>
                  </div>
                  <button
                    onClick={() => router.push(`/portfolio/${item?.slug}`)}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioCards;
