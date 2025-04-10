import Image from "next/image";
import React from "react";

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

const TrustStrategySlider = ({ data }) => {
  console.log("data", data);
  return (
    <div className="container mx-auto">
      <h1 className="text-[#000] trust-title md:text-[24px] text-center">
        Trusted Strategic Partners
      </h1>
      <div className="overflow-hidden mt-5 mb-5">
        <div className="flex justify-center space-x-[90px]">
          {data?.partners?.map((partner, index) => (
            <div key={index} className="">
              <Image
                src={partner?.partnerImage113x44?.url}
                alt={`Logo ${index + 1}`}
                width={113}
                height={44}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrategySlider;
