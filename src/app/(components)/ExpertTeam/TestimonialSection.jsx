"use client";

import Image from "next/image";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const expertTeamData = [
  { id: 1, title: "Generation Of Wealth", category: "Marketing" },
  { id: 2, title: "Creative Solutions", category: "Design" },
  { id: 3, title: "Innovative Ideas", category: "Development" },
  { id: 4, title: "Growth Strategies", category: "Business" },
];

const settings = {
  dots: false,
  arrows: false,
  autoplay: false,
  speed: 400,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 1,
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

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-[#F26B01] max-w-[400px] md:max-w-[1200px] 2xl-custom:max-w-[1380px] rounded-3xl mx-7 px-6 py-10 sm:px-10 lg:p-10 flex flex-col lg:flex-row items-center justify-center text-white">
      {/* Left Section */}
      <div className="flex flex-col-reverse md:flex-col items-start w-full lg:w-1/3 gap-6 sm:gap-8">
        {/* Client Info */}
        <div className="flex items-center space-x-3">
          {/* Circles */}
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C4C4C4] rounded-full border-4 border-white"
              ></div>
            ))}
          </div>
          {/* Text */}
          <span className="text-sm sm:text-base span-title">
            1.5k Happy Clients
          </span>
        </div>

        {/* Navigation Buttons */}
        <div>
          <button onClick={handleNext} className="mr-1">
            <Image
              src="/assets/expert-team/left-arrow.png"
              alt="Previous"
              width={66}
              height={66}
            />
          </button>
          <button onClick={handlePrev}>
            <Image
              src="/assets/expert-team/right-arrow.png"
              alt="Next"
              width={66}
              height={66}
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 w-full lg:w-2/3 text-center lg:text-left">
        {/* <Slider ref={sliderRef} {...settings}>
          <div className="w-full">
            <div className="text-2xl mb-4 font-bold">
              <Image
                src="/assets/expert-team/qoute.png"
                width={53}
                height={42}
                alt="quote"
                className="inline-block max-w-full h-auto"
              />
            </div>
            <p className="text-base sm:text-lg italic leading-relaxed">
              Inceptos Euismod Aenean Vulputate Senectus Penatibus Letius. Nunc
              Neque Faucibus Egestas Molestie Cubilia Inceptos In Facilisis
              Venenatis. Accumsan Suspendisse Nisi Class Ut Torquent Nec Felis
              Senectus Feugiat.
            </p>
            <div className="flex items-center mt-6 space-x-3 justify-center lg:justify-start">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-bold text-sm sm:text-base">
                  Ronald Richards
                </div>
                <div className="text-xs sm:text-sm text-gray-200">
                  Co. Founder
                </div>
              </div>
            </div>
          </div>
        </Slider> */}

        {/* <div className="text-2xl mb-4 font-bold">
          <Image
            src="/assets/expert-team/qoute.png"
            width={53}
            height={42}
            alt="quote"
            className="inline-block max-w-full h-auto"
          />
        </div>
        <p className="text-base sm:text-lg italic leading-relaxed">
          Inceptos Euismod Aenean Vulputate Senectus Penatibus Letius. Nunc
          Neque Faucibus Egestas Molestie Cubilia Inceptos In Facilisis
          Venenatis. Accumsan Suspendisse Nisi Class Ut Torquent Nec Felis
          Senectus Feugiat.
        </p>
        <div className="flex items-center mt-6 space-x-3 justify-center lg:justify-start">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-bold text-sm sm:text-base">
              Ronald Richards
            </div>
            <div className="text-xs sm:text-sm text-gray-200">Co. Founder</div>
          </div>
        </div> */}

        <Slider
          ref={sliderRef}
          {...settings}
          className="h-[300px] md:translate-y-[45px]"
        >
          {expertTeamData.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-2xl mb-4 font-bold">
                <Image
                  src="/assets/expert-team/qoute.png"
                  width={53}
                  height={42}
                  alt="quote"
                  className="inline-block max-w-full h-auto"
                />
              </div>
              <p className="text-base sm:text-lg italic leading-relaxed text-left">
                Inceptos Euismod Aenean Vulputate Senectus Penatibus Letius.
                Nunc Neque Faucibus Egestas Molestie Cubilia Inceptos In
                Facilisis Venenatis. Accumsan Suspendisse Nisi Class Ut Torquent
                Nec Felis Senectus Feugiat.
              </p>
              <div className="flex items-center mt-6 space-x-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-bold text-sm sm:text-base">
                    Ronald Richards
                  </div>
                  <div className="text-xs sm:text-sm text-gray-200">
                    Co. Founder
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
