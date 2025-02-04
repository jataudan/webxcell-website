import React from "react";
import Image from "next/image";
import Link from "next/link";

const DigitalAgency = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* ====================== */}
      {/* LEFT DECORATIVE ELEMENT */}
      {/* ====================== */}
      <div className="absolute bottom-[52px] left-[-200px] lg:left-[-337px] hidden sm:block">
        <Image
          src="/assets/digital-agency/left-vector.png"
          alt="Abstract spiral decoration"
          width={522}
          height={587}
        />
      </div>

      {/* ====================== */}
      {/* MAIN CONTENT CONTAINER */}
      {/* ====================== */}
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-10">
        {/* ====================== */}
        {/* TEXT CONTENT SECTION */}
        {/* ====================== */}
        <div className="relative lg:w-1/3 w-full px-4 text-center lg:text-left">
          {/* Gradient title */}
          <span className="title font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            your inventory is time
          </span>

          {/* Main headline with gradient accent */}
          <div className="headline mt-4">
            <span className="text-[#000]">Digital Agency</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F29F5C]">
              Excellence
            </span>{" "}
            <span className="text-[#000]">Services</span>
          </div>

          {/* Description paragraph */}
          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed">
            And you spend over half of it on non-core functions like Following
            up for Payments or Writing Proposals from scratch or sending Manual
            Updates to your Clients.
          </p>

          {/* ====================== */}
          {/* STATISTICS SECTION */}
          {/* ====================== */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
            {/* Digital Transformation Stat */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/digital-agency/digital-transformation.png"
                alt="Digital transformation icon"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#17012c]">
                  94%
                </h4>
                <p className="text-[#000] uppercase text-sm">
                  Digital Transformation
                </p>
              </div>
            </div>

            {/* Marketing Strategy Stat */}
            <div className="flex items-center gap-4 translate-x-[-15px] md:translate-x-0">
              <Image
                src="/assets/digital-agency/marketing-stra.png"
                alt="Marketing strategy icon"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#17012c]">
                  65%
                </h4>
                <p className="text-[#000] uppercase text-sm">
                  Marketing Strategy
                </p>
              </div>
            </div>
          </div>

          {/* ====================== */}
          {/* CALL TO ACTION BUTTONS */}
          {/* ====================== */}
          <div className="mt-8 flex gap-3 md:gap-0 sm:flex-row justify-center lg:justify-start items-center">
            <Link
              href="/contact-us"
              className="bg-[#fde9d9] text-[#f26b01] px-6 py-3 rounded-full text-lg sm:text-lg font-bold"
            >
              GET STARTED
            </Link>
            <Link href="/contact-us">
              <Image
                src="/assets/digital-agency/up-right.png"
                alt="Arrow icon for navigation"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>

        {/* ====================== */}
        {/* MAIN IMAGE SECTION */}
        {/* ====================== */}
        <div className="relative flex-shrink-0 w-full lg:w-1/3 max-w-sm lg:max-w-none mx-auto md:mx-0">
          <Image
            src="/assets/digital-agency/marketing.png"
            alt="Digital marketing professionals collaborating"
            width={570}
            height={564}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ====================== */}
      {/* RIGHT DECORATIVE ELEMENT */}
      {/* ====================== */}
      <div className="absolute right-[-200px] lg:right-[-350px] bottom-[0px] hidden sm:block">
        <Image
          src="/assets/digital-agency/right-vector.png"
          alt="Abstract wave decoration"
          width={522}
          height={587}
        />
      </div>
    </div>
  );
};

export default DigitalAgency;
