"use client";

import { getHappyClients } from "@/lib/queries/getAboutUs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutDigital({ data }) {
  const [happyClients, setHappyClients] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getHappyClients();
      if (response) {
        setIsLoading(false);
        setHappyClients(response?.data?.services);
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
    <div className="relative overflow-hidden bg-white font-montserrat">
      {/* Left Decorative Image */}
      <div className="absolute top-[-126px] right-[613px] hidden sm:block">
        <Image
          layout="responsive"
          src="/assets/about/Ellipse.png"
          alt="Spiral Image"
          width={386}
          height={386}
        />
      </div>

      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-3 md:p-[112px] gap-10 mb-[40px] md:mb-[0px]">
        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 w-full px-4 text-center lg:text-left">
          {/* Title */}
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] text-sm sm:text-base">
            About Us
          </span>
          <div className="text-2xl sm:text-2xl md:text-[42px] mt-4 font-bold leading-[1.2] font-montserrat md:space-y-4">
            <div>
              <span className="text-[#000]">{data?.prefix}</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[--primary] font-extrabold">
                {data?.highlighted}
              </span>
            </div>
            <div>
              <span className="text-[#000]">{data?.suffix}</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-600 mt-6 text-sm sm:text-base lg:leading-relaxed">
            {data?.paragraph}
          </p>
          <hr className="mt-6 hidden md:block" />
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
            {data?.detail?.length > 0 &&
              data?.detail?.map((item) => (
                <div key={item?.id} className="flex items-center gap-4">
                  <Image
                    src={
                      item?.image60x60
                        ? item?.image60x60?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    alt={item?.title || "Default Image"}
                    width={60}
                    height={60}
                  />
                  <div className="text-left">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#17012C]">
                      {item?.percentage}
                    </h4>
                    <p className="uppercase text-xs sm:text-sm text-[#000]">
                      {item?.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <hr className="mt-9 hidden md:block" />
          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0">
            <a
              href="#"
              className="bg-[--primary] uppercase text-[#fff] px-6 py-3 rounded-full text-sm sm:text-lg font-bold shadow-md hover:shadow-lg"
            >
              About us
            </a>
            <Image
              src="/assets/hero-section/arrow.png"
              alt="Arrow"
              width={52}
              height={52}
            />
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Background Shape */}
          <div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[516px] lg:h-[516px] bg-cover bg-center hidden md:flex"
            style={{
              backgroundImage: "url('/assets/about/ellipse-purple.png')",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            {/* Foreground Image */}
            <div className="relative z-10">
              <Image
                src={
                  data?.image553x534
                    ? data?.image553x534?.url
                    : "https://placehold.co/600x400.png?text=placeholder"
                }
                alt="Business Woman"
                width={520}
                height={540}
                className="w-full object-cover hidden md:flex"
              />
            </div>
          </div>

          {/* Happy Clients Section */}
          {/* <div className="absolute bottom-[-30px] sm:bottom-[-267px] w-[360px] z-20 flex items-center gap-4 bg-white px-2 py-2 md:px-6 md:py-4 rounded-full shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {happyClients?.testimonials?.clientImages50x50?.length > 0 &&
                  happyClients?.testimonials?.clientImages50x50?.map(
                    (_, index) => {
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
                    }
                  )}
              </div>
              <span className="text-black font-semibold text-sm span-title">
                {happyClients?.testimonials?.count}
              </span>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
