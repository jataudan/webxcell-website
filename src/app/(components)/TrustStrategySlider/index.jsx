import Image from 'next/image';
import React from 'react';

const sliderImages = [
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
  { logo: '/assets/trust-strategy-slider/Rectangle.png', width: '92', height: '36' },
];

const TrustStrategySlider = () => {
  return (
    <div className="container mx-auto bg-[#fff]">
      <h1 className="text-[#000] trust-title md:text-[24px] text-center">Trusted Strategic Partners</h1>
      <div className="overflow-hidden mt-5 mb-5">
        <div className="flex justify-center space-x-[90px]">
          {sliderImages.map((partner, index) => (
            <div key={index} className="flex-shrink-0 rounded-full flex items-center justify-center">
              <Image src={partner.logo} alt={`Logo ${index + 1}`} width={partner.width} height={partner.height} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrategySlider;
