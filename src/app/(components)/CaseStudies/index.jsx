'use client';

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderButtons from './SliderButtons';

const CaseStudies = () => {
  return (
    <div className="relative overflow-hidden bg-black z-20">
      <div className="text-center mt-16 text-[16px]">
        <span className="case-studies-sub-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          our complete projects
        </span>
      </div>
      <div className="text-center mt-5">
        <h1 className="uppercase text-5xl case-studies-title">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F29F5C]">Case</span>{' '}
          <span className="text-white">Studies</span>
        </h1>
      </div>
      <section className="relative flex flex-col lg:flex-row items-center justify-center py-24 gap-5">
        <Swiper
          navigation
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          slidesPerView={4}
          spaceBetween={30}>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/case-studies/Rectangle.png" alt="" width={570} height={455} />
          </SwiperSlide>
          <SliderButtons
            containerStyles="absolute top-0 start-0 z-30 flex items-center md:justify-between justify-center md:w-full h-full px-4 cursor-pointer group focus:outline-none"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[64px] h-[64px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </section>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/case-studies/gradient-bg.png" alt="Heavy Waves Image" width={1920} height={297} />
      </div>
    </div>
  );
};

export default CaseStudies;
