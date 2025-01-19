import React from 'react';
import Image from 'next/image';

const sliderImages = [
  { logo: '/assets/Slider/Frame-1.png', width: '338', height: '54' },
  { logo: '/assets/Slider/Frame-2.png', width: '319', height: '54' },
  { logo: '/assets/Slider/Frame-3.png', width: '537', height: '54' },
  { logo: '/assets/Slider/Frame-4.png', width: '396', height: '54' },
];

const TextSlider = () => {
  return (
    <div className="overflow-hidden mt-5">
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

export default TextSlider;
