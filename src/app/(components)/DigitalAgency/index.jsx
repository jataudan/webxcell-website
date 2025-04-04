import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DigitalAgency = ({ data }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Left Decorative Image */}
      <div className="absolute bottom-[52px] left-[-200px] lg:left-[-337px] hidden sm:block">
        <Image
          src="/assets/digital-agency/left-vector.png"
          alt="Spiral Image"
          width={522}
          height={587}
        />
      </div>

      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-10">
        {/* Right Side - Content */}
        <div className="relative lg:w-1/3 w-full px-4 text-center lg:text-left">
          <span className="title font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            {data?.subTitle}
          </span>

          <div className="headline mt-4">
            <span className="text-[#000]">{data?.h1}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[#F29F5C]">
              {data?.h2}
            </span>{" "}
            <span className="text-[#000]">{data?.h3}</span>
          </div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed">
            {data?.p}
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 w-max">
            {data?.detail?.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 ${
                  index === 1 ? "translate-x-[-15px] md:translate-x-0" : ""
                }`}
              >
                <Image
                  src={
                    item?.image
                      ? item?.image?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt={item?.title}
                  width={item?.image?.width || 34}
                  height={item?.image?.heigh || 34}
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#17012c]">
                    {item?.percentage}
                  </h4>
                  <p className="text-[#000] uppercase text-sm">{item?.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex gap-3 md:gap-0 sm:flex-row justify-center lg:justify-start items-center">
            <Link
              href="/contact-us"
              className="bg-[#fde9d9] text-[--primary] px-6 py-3 rounded-full text-lg sm:text-lg font-bold"
            >
              GET STARTED
            </Link>
            <Link href="/contact-us">
              <Image
                src="/assets/digital-agency/up-right.png"
                alt="arrow"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-1/3 max-w-sm lg:max-w-none mx-auto md:mx-0">
          <Image
            src={
              data?.image
                ? data?.image?.url
                : "https://placehold.co/600x400.png?text=placeholder"
            }
            alt="Experience Image"
            width={570}
            height={564}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Right Decorative Image */}
      <div className="absolute right-[-200px] lg:right-[-350px] bottom-[0px] hidden sm:block">
        <Image
          src="/assets/digital-agency/right-vector.png"
          alt="Heavy Waves Image"
          width={522}
          height={587}
        />
      </div>
    </div>
  );
};

export default DigitalAgency;
