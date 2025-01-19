'use client';

import Image from 'next/image';
import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-[#F26B01] max-w-[1680px] rounded-3xl px-6 py-10 sm:px-10 lg:p-20 flex flex-col lg:flex-row items-center justify-center text-white">
      {/* Left Section */}
      <div className="flex flex-col-reverse md:flex-col items-start w-full lg:w-1/3 gap-6 sm:gap-8">
        {/* Client Info */}
        <div className="flex items-center space-x-3">
          {/* Circles */}
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C4C4C4] rounded-full border-4 border-white"></div>
            ))}
          </div>
          {/* Text */}
          <span className="text-sm sm:text-base span-title">1.5k Happy Clients</span>
        </div>

        {/* Navigation Buttons */}
        <div>
          <Image
            src="/assets/expert-team/arrows.png"
            width={142}
            height={86}
            alt="arrows"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 w-full lg:w-2/3 text-center lg:text-left">
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
          Inceptos Euismod Aenean Vulputate Senectus Penatibus Letius. Nunc Neque Faucibus Egestas Molestie Cubilia
          Inceptos In Facilisis Venenatis. Accumsan Suspendisse Nisi Class Ut Torquent Nec Felis Senectus Feugiat.
        </p>
        {/* Author Info */}
        <div className="flex items-center mt-6 space-x-3 justify-center lg:justify-start">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-bold text-sm sm:text-base">Ronald Richards</div>
            <div className="text-xs sm:text-sm text-gray-200">Co. Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
