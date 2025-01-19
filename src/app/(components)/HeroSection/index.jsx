'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-40"
      style={{
        backgroundImage: `url(/assets/hero-section/bg.png)`,
      }}>
      {/* Content */}
      <div className="relative text-white max-w-3xl px-4 text-center md:text-left mt-[188px] md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
          Your Digital Future <br />
          <span className="mt-4 block">Designed Today</span>
        </h1>

        <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl">
          Transforming Visions Into Digital Experiences That Inspire And Engage
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0">
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg">
            View Services
          </a>
          <Image src="/assets/hero-section/arrow.png" alt="arrow" width={52} height={52} />
        </div>
      </div>

      {/* Side Social Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src="/assets/hero-section/fb.png" alt="facebook" width={7} height={14} />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src="/assets/hero-section/instagram.png" alt="instagram" width={14} height={14} />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src="/assets/hero-section/twitter.png" alt="twitter" width={14} height={14} />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src="/assets/hero-section/youtube.png" alt="youtube" width={14} height={9} />
        </a>
      </div>

      {/* Video Icon */}
      <div className="absolute right-[60px] sm:right-[100px] lg:right-[293px] hidden sm:block">
        <Image src="/assets/hero-section/video_icon.png" alt="VideoIcon" width={82} height={86} />
      </div>

      {/* Bottom Pattern */}
      <div className="absolute left-0 bottom-0 hidden sm:block">
        <Image src="/assets/hero-section/patterns.png" alt="patterns" width={1920} height={251} />
      </div>
    </section>
  );
}
