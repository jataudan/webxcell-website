"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButtons from "./SliderButtons";
import { useRouter } from "next/navigation";
import { getProjectDetail } from "@/lib/queries/getProjectDetail";

const settings = {
  dots: false,
  arrows: false,
  autoplay: false,
  speed: 400,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CaseStudies = ({ caseStudies }) => {
  const router = useRouter();
  const [projectDetail, setProjectDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await getProjectDetail();

      if (response) {
        setIsLoading(false);
        setProjectDetail(response?.data || []);
      }
    };
    fetchData();
  }, []);

  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-black z-20 h-[800px]">
      <div className="absolute inset-0 flex items-end justify-center">
        <Image
          src="/assets/case-studies/gradient-bg.png"
          alt="Heavy Waves Image"
          width={2120}
          height={297}
          className="hidden md:block"
        />
      </div>
      <div className="text-center mt-16 text-[16px]">
        <span className="case-studies-sub-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          {caseStudies?.title}
        </span>
      </div>
      <div className="text-center mt-5">
        <h1 className="text-5xl case-studies-title">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[#F29F5C]">
            {caseStudies?.prefix}
          </span>
          <span className="text-white">{caseStudies?.suffix}</span>
        </h1>
      </div>

      <div className="relative ">
        <Slider ref={sliderRef} {...settings} className="translate-y-[190px]">
          {projectDetail?.length > 0 &&
            projectDetail?.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#A9A9A9] border hover:border-[#FF6700] rounded-[20px] text-center w-full md:w-[370px] h-[357px] group"
              >
                <Image
                  src={
                    item?.mainImage570x455
                      ? item?.mainImage570x455?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt="Rectangle"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[20px]"
                />
                {/* Hidden Content on Hover */}
                <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-end p-7 rounded-[20px]">
                  <div className="flex items-center justify-between w-full max-w-[446px] bg-white rounded-lg">
                    <div className="text-left px-5 py-1">
                      <h4 className="text-[#000] font-montserrat font-semibold">
                        {item?.title}
                      </h4>
                      <span className="text-[--primary] font-montserrat font-semibold">
                        {item?.tag?.name}
                      </span>
                    </div>
                    <button
                      className="p-6 bg-[#FF6700] rounded-tr-[7px] rounded-br-[7px]"
                      onClick={() => router.push(`/portfolio/${item?.slug}`)}
                    >
                      <Image
                        src="/assets/case-studies/up-right-arrow.png"
                        alt="arrow"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <SliderButtons
          onNext={handleNext}
          onPrev={handlePrev}
          containerStyles="absolute translate-y-[335px] top-0 start-0 z-30 flex items-center justify-between justify-center w-full h-[50px] px-4 cursor-pointer group focus:outline-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[64px] h-[64px] flex justify-center items-center transition-all"
        />
      </div>
    </div>
  );
};

export default CaseStudies;
