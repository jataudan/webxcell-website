import Image from "next/image";
import React from "react";

const TrustStrategySlider = ({ data }) => {
  return (
    <div className="container mx-auto font-montserrat">
      <h1 className="text-[#000] text-[22px] md:trust-title md:text-[24px] text-center">
        Core Technologies
      </h1>
      <div className="overflow-hidden mt-5 mb-5">
        <div className="overflow-hidden mt-14 mb-14 bg-[#fff]">
          <div className="flex space-x-[90px] animate-scroll">
            {data?.partners?.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-full flex items-center justify-center"
              >
                <Image
                  src={partner?.partnerImage113x44?.url}
                  alt={`Logo ${index + 1}`}
                  width={113}
                  height={44}
                  className="w-[80%] sm:w-[60%] md:w-[100%]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrategySlider;
