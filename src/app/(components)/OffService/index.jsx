import Image from "next/image";
import Link from "next/link";
import React from "react";

const OffService = ({ data }) => {
  return (
    <div className="bg-[#fef0e6]">
      <section
        className="relative w-full bg-cover bg-center flex flex-col md:flex-row items-center px-6 md:px-20 lg:px-40"
        style={{
          backgroundImage: `url(/assets/off-service/Rectangle.png)`,
        }}
      >
        {/* Left Side - Image */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 flex justify-center md:justify-end">
          <Image
            src={
              data?.image
                ? data?.image?.url
                : "https://placehold.co/600x400.png?text=placeholder"
            }
            alt="Image"
            width={577}
            height={398}
          />
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          <span className="off-service-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            {data?.parent?.title}
          </span>

          <div className="off-service-headline text-3xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]"> {data?.parent?.prefix}</span> <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--primary] to-[#F5AF19]">
              {data?.parent?.highlighted}
            </span>{" "}
            <span className="text-[#000]"> {data?.parent?.suffix}</span>
          </div>

          {/* Button */}
          <div className="mt-8 mb-8 flex gap-3 md:gap-0 sm:flex-row items-center justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="bg-[--primary] uppercase hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
            >
              get started
            </Link>
            <Link href="/contact-us">
              <Image
                src="/assets/hero-section/arrow.png"
                alt="Arrow"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>
        <div className="absolute right-[180px] bottom-[24px] hidden sm:block">
          <Image
            src="/assets/off-service/Spiral.png"
            alt="Heavy Waves Image"
            width={92}
            height={98}
          />
        </div>
      </section>
    </div>
  );
};

export default OffService;
