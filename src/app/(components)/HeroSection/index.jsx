"use client";

import { useEffect, useState } from "react";
import { getHomeHeroData } from "@/lib/queries/getHeroSection";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../HeroSlider";

export default function Hero() {
  const [getHero, setGetHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getHomeHeroData();
      if (response) {
        setIsLoading(false);
        setGetHero(response?.data?.hero);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[700px] md:h-screen bg-cover bg-center flex flex-col md:flex-row items-center">
      <HeroSlider sliderImages={getHero?.slider} />

      {/* Content */}
      <div className="absolute text-white px-4 text-center md:text-left mt-[188px] md:mt-0 max-w-[1280px] mx-auto md:left-[15%] font-montserrat">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-oswald font-semibold leading-tight mt-0">
          {getHero?.primaryHeading} <br />
          <span className="mt-4 block">{getHero?.secondaryHeading}</span>
        </h1>

        <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl">
          {getHero?.paragraph || ""}
        </p>
        <div className="mt-6 sm:mt-8 flex gap-3 md:gap-0 sm:flex-row items-center justify-center md:justify-start">
          <Link
            href="/services"
            className="bg-[--primary] hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
          >
            View Services
          </Link>
          <Link href="/services">
            <Image
              src="/assets/hero-section/arrow.png"
              alt="arrow"
              width={52}
              height={52}
            />
          </Link>
        </div>
      </div>
      <div className="absolute flex justify-center md:h-[100vh] items-center gap-2 z-60 bottom-[20%] md:bottom-0 left-1/2 transform -translate-x-1/2 md:hidden ">
        {getHero?.socialLinks?.map((item, index) => {
          return (
            <a
              key={index}
              href={item?.href}
              className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-[--primary]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item?.image17x17?.url}
                alt={item?.image17x17?.name || "default"}
                width={item?.width || 40}
                height={item?.height || 40}
              />
            </a>
          );
        })}
      </div>

      {/* Side Social Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4 hidden md:block">
        {getHero?.socialLinks?.map((item, index) => {
          return (
            <a
              key={index}
              href={item?.href}
              className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-[--primary]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item?.image17x17?.url}
                alt={item?.image17x17?.name || "default"}
                width={item?.width || 40}
                height={item?.width || 40}
              />
            </a>
          );
        })}
      </div>

      {/* Video Icon */}
      <div className="absolute right-[60px] sm:right-[100px] lg:right-[293px] hidden sm:block">
        <Image
          src="/assets/hero-section/video_icon.png"
          alt="VideoIcon"
          width={82}
          height={86}
        />
      </div>

      {/* Bottom Pattern */}
      <div className="absolute left-0 bottom-0 hidden sm:block">
        <Image
          src="/assets/hero-section/patterns.png"
          alt="patterns"
          width={1920}
          height={251}
        />
      </div>
    </section>
  );
}
