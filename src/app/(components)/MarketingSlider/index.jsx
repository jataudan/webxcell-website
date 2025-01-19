import React from 'react';
import Image from 'next/image';

const sliderImages = [
  { logo: '/assets/marketing-slider/Frame-1.png', width: '413', height: '54' },
  { logo: '/assets/marketing-slider/Frame-2.png', width: '445', height: '54' },
  { logo: '/assets/marketing-slider/Frame-3.png', width: '537', height: '54' },
  { logo: '/assets/marketing-slider/Frame-4.png', width: '711', height: '54' },
];

const MarketingSlider = () => {
  return (
    <div className="overflow-hidden mt-14 mb-14 bg-[#fff]">
      <div className="flex space-x-[90px] animate-scroll">
        {sliderImages.map((partner, index) => (
          <div key={index} className="flex-shrink-0 rounded-full flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={`Logo ${index + 1}`}
              width={partner.width}
              height={partner.height}
              className="w-[80%] sm:w-[60%] md:w-[100%]"
            />
          </div>
        ))}

        {/* Duplicate the items to create a seamless loop */}
        {sliderImages.map((partner, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 rounded-full flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={`Logo ${index + 1} Duplicate`}
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
