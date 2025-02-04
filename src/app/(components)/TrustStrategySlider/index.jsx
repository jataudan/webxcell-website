import Image from "next/image";
import React from "react";

// Placeholder data for partner logos (replace with actual images)
const sliderImages = [
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
  {
    logo: "/assets/trust-strategy-slider/Rectangle.png",
    width: "92",
    height: "36",
  },
];

const TrustStrategySlider = () => {
  return (
    <div className="container mx-auto bg-[#fff]">
      {/* Section header */}
      <h1 className="text-[#000] trust-title md:text-[24px] text-center">
        Trusted Strategic Partners
      </h1>

      {/* Horizontal scroll container */}
      <div className="overflow-hidden mt-5 mb-5">
        {/* Logo list with fixed spacing */}
        <div className="flex justify-center space-x-[90px]">
          {sliderImages.map((partner, index) => (
            /* Individual logo container - flex-shrink prevents item resizing */
            <div
              key={index}
              className="flex-shrink-0 rounded-full flex items-center justify-center"
            >
              {/* Logo image with dimensions from data */}
              <Image
                src={partner.logo}
                alt={`Partner logo ${index + 1}`}
                width={partner.width}
                height={partner.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrategySlider;
