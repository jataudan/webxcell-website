"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextSlider from "../Slider";
import Link from "next/link";
import { getServiceDetail } from "@/lib/queries/getServiceDetail";
import { useRouter } from "next/navigation";

export default function Service({ data }) {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getServiceDetail();
        if (response) {
          setIsLoading(false);
          setService(response?.data);
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
    <div className="relative bg-[#fef5ed] md:h-[989px] overflow-hidden">
      {/* Decorative Images */}
      <Image
        src="/assets/service-section/shape.png"
        alt="shape"
        className="absolute pointer-events-none z-0"
        width={322}
        height={825}
      />
      <Image
        src="/assets/service-section/Blob-2.png"
        alt="shape"
        className="absolute translate-x-[120px] translate-y-[350px] pointer-events-none z-0"
        width={236}
        height={180}
      />
      <Image
        src="/assets/service-section/Blob-11.png"
        alt="shape"
        className="absolute translate-x-[30px] translate-y-[350px] pointer-events-none z-0"
        width={676}
        height={553}
      />

      {/* Title and Text Slider */}
      <div className="text-center mt-16">
        <span className="service-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D77C42] to-[#323332]">
          Services
        </span>
      </div>
      <TextSlider />

      {/* Boxes */}
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center gap-4 md:space-x-4 pb-5 md:pb-0 px-8 md:px-0 md:p-8 relative z-10 mt-5">
        {service?.length > 0 &&
          service?.slice(0, 1).map((item, index) => {
            return (
              <div
                key={index}
                className="flex md:justify-between md:w-[770px] border hover:border-orange-400 cursor-pointer rounded-2xl bg-white "
              >
                <div className="flex flex-col justify-center pt-5 pb-5 md:pb-5 px-6 w-full md:w-[75%]">
                  <h2 className="text-xl font-bold text-[#000]">
                    {item?.title}
                  </h2>
                  <p className="mt-4 md:h-[55px] text-sm text-[#000]">
                    {item?.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <button
                      className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[--primary] text-white rounded-full"
                      onClick={() => {
                        router.push(`/services/${item?.slug}`);
                      }}
                    >
                      <Image
                        src="/assets/service-section/up-right-arrow.png"
                        alt="up-right-arrow"
                        width={16}
                        height={16}
                      />
                    </button>
                    <div className="ml-2 service-stylish-text font-bold text-xl">
                      {item?.number || "01"}
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4C4C4] w-[252px] h-[226px] rounded-2xl hidden md:block">
                  <Image
                    src={
                      item?.thumbnail300x300
                        ? item?.thumbnail300x300?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    alt="Rectangle"
                    width={770}
                    height={370}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            );
          })}

        {service?.length > 0 &&
          service?.slice(1, 2).map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between w-full md:w-1/3 p-6 rounded-2xl bg-white border hover:border-orange-400 cursor-pointer"
              >
                <h2 className="text-xl font-bold text-[#000]">{item?.title}</h2>
                <p className="mt-4 md:h-[55px] text-sm text-[#000]">
                  {item?.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <button
                    className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[--primary] text-white rounded-full"
                    onClick={() => {
                      router.push(`/services/${item?.slug}`);
                    }}
                  >
                    <Image
                      src="/assets/service-section/up-right-arrow.png"
                      alt="up-right-arrow"
                      width={16}
                      height={16}
                    />
                  </button>
                  <div className="ml-2 service-stylish-text text-gray-300 font-bold text-xl">
                    {item?.number || "02"}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center gap-4 md:space-x-4 px-8 md:px-0 md:p-8 relative z-10 md:mt-5">
        {service?.length > 0 &&
          service?.slice(2, 3).map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between w-full md:w-1/3 p-6 rounded-2xl bg-white border hover:border-orange-400 cursor-pointer"
              >
                <h2 className="text-xl font-bold text-[#000]">{item?.title}</h2>
                <p className="mt-4 md:h-[55px] text-sm text-[#000]">
                  {item?.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <button
                    className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[--primary] text-white rounded-full"
                    onClick={() => {
                      router.push(`/services/${item?.slug}`);
                    }}
                  >
                    <Image
                      src="/assets/service-section/up-right-arrow.png"
                      alt="up-right-arrow"
                      width={16}
                      height={16}
                    />
                  </button>

                  <div className="ml-2 service-stylish-text text-gray-300 font-bold text-xl">
                    {item?.number || "03"}
                  </div>
                </div>
              </div>
            );
          })}

        {service?.length > 0 &&
          service?.slice(3, 4).map((item, index) => {
            return (
              <div
                key={index}
                className="flex md:justify-between md:w-[770px] rounded-2xl bg-white border hover:border-orange-400 cursor-pointer"
              >
                <div className="flex flex-col justify-center pt-5 pb-5 md:pb-0 px-6 w-full md:w-[75%]">
                  <h2 className="text-xl font-bold text-[#000]">
                    {item?.title}
                  </h2>
                  <p className="mt-4 md:h-[55px] text-sm text-[#000]">
                    {item?.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <button
                      className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[--primary] text-white rounded-full"
                      onClick={() => {
                        router.push(`/services/${item?.slug}`);
                      }}
                    >
                      <Image
                        src="/assets/service-section/up-right-arrow.png"
                        alt="up-right-arrow"
                        width={16}
                        height={16}
                      />
                    </button>
                    <div className="ml-2 service-stylish-text font-bold text-xl">
                      {item?.number || "04"}
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4C4C4] w-[252px] h-[226px] rounded-2xl hidden md:block">
                  <Image
                    src={
                      item?.thumbnail300x300
                        ? item?.thumbnail300x300?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    alt="Rectangle"
                    width={770}
                    height={370}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            );
          })}
      </div>

      <div className="max-w-[1110px] mx-auto relative z-10">
        <div className="bg-[#464646] rounded-2xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[80px] px-8 py-8 mt-10">
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            {/* Circles */}
            <div className="flex -space-x-2">
              {data?.testimonials?.clientImages50x50?.length > 0 &&
                data?.testimonials?.clientImages50x50?.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full relative"
                    >
                      <Image
                        src={
                          _?.image50x50
                            ? _?.image50x50?.url
                            : "https://placehold.co/600x400.png?text=placeholder"
                        }
                        alt="client"
                        width={50}
                        height={50}
                        className="absolute"
                      />
                    </div>
                  );
                })}
            </div>
            {/* Text */}
            <span className="text-white text-sm md:text-lg span-title">
              {data?.testimonials?.count}
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <Link
              href="/services"
              className="text-white text-sm span-title uppercase"
            >
              {data?.testimonials?.buttonText}
            </Link>
            <div className="w-10 h-10 bg-[--primary] rounded-full flex items-center justify-center">
              <Link href="/services">
                <Image
                  src="/assets/service-section/up-right-arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Images */}
      <Image
        src="/assets/service-section/Blob-9.png"
        alt="shape"
        className="right-[0] absolute translate-y-[-894px] pointer-events-none z-0"
        width={836}
        height={180}
      />
      <Image
        src="/assets/service-section/Blob-12.png"
        alt="shape"
        className="right-[0] absolute translate-x-[-60px] translate-y-[-540px] pointer-events-none z-0"
        width={236}
        height={180}
      />
      <Image
        src="/assets/service-section/right-shape.png"
        alt="shape"
        className="absolute right-[-30px] bottom-0 pointer-events-none z-0"
        width={332}
        height={825}
      />
    </div>
  );
}
