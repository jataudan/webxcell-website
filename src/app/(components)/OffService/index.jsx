import Image from "next/image";
import Link from "next/link";
import React from "react";

const OffService = () => {
  return (
    <div className="bg-[#fef0e6]">
      {/* ====================== */}
      {/* MAIN PROMO SECTION */}
      {/* ====================== */}
      <section
        className="relative w-full bg-cover bg-center flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-40"
        style={{
          backgroundImage: `url(/assets/off-service/Rectangle.png)`, // Background texture image
        }}
      >
        {/* ====================== */}
        {/* LEFT IMAGE COLUMN */}
        {/* ====================== */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assets/off-service/image.png"
            alt="Promotional visual showing service benefits"
            width={577}
            height={398}
          />
        </div>

        {/* ====================== */}
        {/* RIGHT CONTENT COLUMN */}
        {/* ====================== */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          {/* Gradient subtitle */}
          <span className="off-service-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            get special offer
          </span>

          {/* Main headline with gradient accent */}
          <div className="off-service-headline text-3xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]">25% Off For Your </span> <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F5AF19]">
              First
            </span>{" "}
            <span className="text-[#000]">Service</span>
          </div>

          {/* ====================== */}
          {/* CALL TO ACTION BUTTONS */}
          {/* ====================== */}
          <div className="mt-8 mb-8 flex gap-3 md:gap-0 sm:flex-row items-center justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="bg-orange-500 uppercase hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-colors"
            >
              get started
            </Link>
            <Link href="/contact-us">
              <Image
                src="/assets/hero-section/arrow.png"
                alt="Navigate to contact page"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>

        {/* ====================== */}
        {/* DECORATIVE ELEMENT */}
        {/* ====================== */}
        <div className="absolute right-[180px] bottom-[24px] hidden sm:block">
          <Image
            src="/assets/off-service/Spiral.png"
            alt="Decorative spiral graphic"
            width={92}
            height={98}
          />
        </div>
      </section>
    </div>
  );
};

export default OffService;
