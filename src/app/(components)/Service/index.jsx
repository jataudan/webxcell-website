import React from "react";
import Image from "next/image";
import TextSlider from "../Slider";
import Link from "next/link";

export default function Service() {
  return (
    <div className="relative bg-[#fef5ed] md:h-[932px] overflow-hidden">
      {/* ====================== */}
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      {/* ====================== */}
      {/* Left-side decorative shapes */}
      <Image
        src="/assets/service-section/shape.png"
        alt="Decorative background shape"
        className="absolute pointer-events-none z-0"
        width={322}
        height={825}
      />
      <Image
        src="/assets/service-section/Blob-2.png"
        alt="Secondary blob decoration"
        className="absolute translate-x-[120px] translate-y-[350px] pointer-events-none z-0"
        width={236}
        height={180}
      />
      <Image
        src="/assets/service-section/Blob-11.png"
        alt="Large blob decoration"
        className="absolute translate-x-[30px] translate-y-[350px] pointer-events-none z-0"
        width={676}
        height={553}
      />

      {/* ====================== */}
      {/* MAIN CONTENT SECTION */}
      {/* ====================== */}
      <div className="text-center mt-16">
        {/* Gradient text heading */}
        <span className="service-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          Services
        </span>
      </div>

      {/* Animated text slider component */}
      <TextSlider />

      {/* ====================== */}
      {/* SERVICE CARDS - FIRST ROW */}
      {/* ====================== */}
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center gap-4 md:space-x-4 pb-5 md:pb-0 px-8 md:px-0 md:p-8 relative z-10 mt-5">
        {/* Primary service card with image placeholder */}
        <div className="flex md:justify-between md:w-[770px] border hover:border-orange-400 cursor-pointer rounded-2xl bg-white ">
          <div className="flex flex-col pt-5 pb-5 md:pb-0 px-6 w-full md:w-[75%]">
            <h2 className="text-xl font-bold text-[#000]">SEO & Analytics</h2>
            <p className="mt-4 text-sm text-[#000]">
              In Order To Scale New Customer Acquisition And Retention For
              E-Commerce Brands, We Work Across The Entire Customer Journey. Our
              Team Has A Successful
            </p>
            <div className="flex items-center justify-between mt-6">
              {/* Interactive hover button */}
              <div className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[#F26B01] text-white rounded-full">
                <Image
                  src="/assets/service-section/up-right-arrow.png"
                  alt="Action arrow icon"
                  width={16}
                  height={16}
                />
              </div>
              <div className="ml-2 service-stylish-text font-bold text-xl">
                01
              </div>
            </div>
          </div>
          {/* Image placeholder container */}
          <div className="bg-[#C4C4C4] w-[252px] h-[226px] rounded-2xl hidden md:block"></div>
        </div>

        {/* Secondary service card */}
        <div className="flex flex-col justify-between w-full md:w-1/3 p-6 rounded-2xl bg-white border hover:border-orange-400 cursor-pointer">
          <h2 className="text-xl font-bold text-[#000]">Digital Strategy</h2>
          <p className="mt-4 text-sm text-[#000]">
            In Order To Scale New Customer Acquisition And Retention For
            E-Commerce Brands, We Work Across Thel
          </p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[#F26B01] text-white rounded-full">
              <Image
                src="/assets/service-section/up-right-arrow.png"
                alt="Action arrow icon"
                width={16}
                height={16}
              />
            </div>
            <div className="ml-2 service-stylish-text text-gray-300 font-bold text-xl">
              02
            </div>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* SERVICE CARDS - SECOND ROW */}
      {/* ====================== */}
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center gap-4 md:space-x-4 px-8 md:px-0 md:p-8 relative z-10 md:mt-5">
        {/* Tertiary service card */}
        <div className="flex flex-col justify-between w-full md:w-1/3 p-6 rounded-2xl bg-white border hover:border-orange-400 cursor-pointer">
          <h2 className="text-xl font-bold text-[#000]">Strategy Creation</h2>
          <p className="mt-4 text-sm text-[#000]">
            In Order To Scale New Customer Acquisition And Retention For
            E-Commerce Brands, We Work Across Thel
          </p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[#F26B01] text-white rounded-full">
              <Image
                src="/assets/service-section/up-right-arrow.png"
                alt="Action arrow icon"
                width={16}
                height={16}
              />
            </div>
            <div className="ml-2 service-stylish-text text-gray-300 font-bold text-xl">
              03
            </div>
          </div>
        </div>

        {/* Quaternary service card with image placeholder */}
        <div className="flex md:justify-between md:w-[770px] rounded-2xl bg-white border hover:border-orange-400 cursor-pointer">
          <div className="flex flex-col pt-5 pb-5 md:pb-0 px-6 w-full md:w-[75%]">
            <h2 className="text-xl font-bold text-[#000]">Content Creation</h2>
            <p className="mt-4 text-sm text-[#000]">
              In order to scale new customer acquisition and retention for
              e-commerce brands, we work across the entire customer journey. Our
              team has a successful track record of delivering successful
              business outcomes.
            </p>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center justify-center w-12 h-12 bg-black hover:bg-[#F26B01] text-white rounded-full">
                <Image
                  src="/assets/service-section/up-right-arrow.png"
                  alt="Action arrow icon"
                  width={16}
                  height={16}
                />
              </div>
              <div className="ml-2 service-stylish-text font-bold text-xl">
                04
              </div>
            </div>
          </div>
          {/* Image placeholder container */}
          <div className="bg-[#C4C4C4] w-[252px] h-[226px] rounded-2xl hidden md:block"></div>
        </div>
      </div>

      {/* ====================== */}
      {/* CLIENT STATS & CTA SECTION */}
      {/* ====================== */}
      <div className="max-w-[1110px] mx-auto relative z-10">
        <div className="bg-[#464646] rounded-2xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[80px] px-8 py-8 mt-10">
          {/* Client avatars and count */}
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {/* Dynamic client avatars (static for demo) */}
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-[#C4C4C4] rounded-full border-4 border-white"
                ></div>
              ))}
            </div>
            <span className="text-white text-sm span-title">
              1.5k Happy Clients
            </span>
          </div>

          {/* Services CTA button */}
          <div className="flex items-center space-x-3">
            <Link href="/services" className="text-white text-sm span-title">
              VIEW ALL SERVICES
            </Link>
            <div className="w-10 h-10 bg-[#F26B01] rounded-full flex items-center justify-center">
              <Link href="/services">
                <Image
                  src="/assets/service-section/up-right-arrow.png"
                  alt="Navigation arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* RIGHT-SIDE DECORATIVE ELEMENTS */}
      {/* ====================== */}
      <Image
        src="/assets/service-section/Blob-9.png"
        alt="Right blob decoration"
        className="right-[0] absolute translate-y-[-894px] pointer-events-none z-0"
        width={836}
        height={180}
      />
      <Image
        src="/assets/service-section/Blob-12.png"
        alt="Small right blob"
        className="right-[0] absolute translate-x-[-60px] translate-y-[-540px] pointer-events-none z-0"
        width={236}
        height={180}
      />
      <Image
        src="/assets/service-section/right-shape.png"
        alt="Right side shape"
        className="absolute right-[-30px] bottom-0 pointer-events-none z-0"
        width={332}
        height={825}
      />
    </div>
  );
}
