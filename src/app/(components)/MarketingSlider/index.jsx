import React from "react";
import Image from "next/image";

// Marketing partner logos data with varying widths but consistent height
const sliderImages = [
  { logo: "/assets/marketing-slider/Frame-1.png", width: "413", height: "54" },
  { logo: "/assets/marketing-slider/Frame-2.png", width: "445", height: "54" },
  { logo: "/assets/marketing-slider/Frame-3.png", width: "537", height: "54" },
  { logo: "/assets/marketing-slider/Frame-4.png", width: "711", height: "54" },
];

const MarketingSlider = () => {
  return (
    /**
     * Overflow container for infinite scroll effect
     * Top/bottom margins for spacing
     */
    <div className="overflow-hidden mt-14 mb-14 bg-[#fff]">
      {/**
       * Flex container with horizontal spacing
       * Uses CSS animation for scrolling (animate-scroll class)
       * Contains original + duplicated items for seamless looping
       */}
      <div className="flex space-x-[90px] animate-scroll">
        {/* Original set of marketing partner logos */}
        {sliderImages.map((partner, index) => (
          /**
           * Individual logo container
           * flex-shrink-0 prevents item from shrinking
           * Centered content with rounded corners
           */
          <div
            key={index}
            className="flex-shrink-0 rounded-full flex items-center justify-center"
          >
            {/**
             * Responsive logo image
             * Width scales from 80% (mobile) to 100% (desktop)
             * Fixed height maintains aspect ratio
             */}
            <Image
              src={partner.logo}
              alt={`Marketing partner logo ${index + 1}`}
              width={partner.width}
              height={partner.height}
              className="w-[80%] sm:w-[60%] md:w-[100%]"
            />
          </div>
        ))}

        {/* Duplicated logo set - creates infinite scroll illusion */}
        {sliderImages.map((partner, index) => (
          /**
           * Duplicate item with unique key
           * Same styling as original items
           * Required for seamless loop animation
           */
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 rounded-full flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={`Marketing partner logo ${index + 1} duplicate`}
              width={partner.width}
              height={partner.height}
              className="w-[80%] sm:w-[60%] md:w-[100%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingSlider;
