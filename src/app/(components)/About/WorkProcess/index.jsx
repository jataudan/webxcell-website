import Image from "next/image";

export default function WorkProcess() {
  return (
    // Main section with background image and responsive padding
    <section
      className="relative w-full bg-cover bg-center flex flex-col justify-center gap-4 md:p-[112px]"
      style={{
        backgroundImage: `url(/assets/about/work-process-bg.png)`,
      }}
    >
      {/* Container with mobile background color override */}
      <div className="container mx-auto bg-[#7fdeff] md:bg-transparent">
        {/* Section header with gradient text */}
        <div className="flex flex-col align-center justify-center items-center text-center">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
            Work Process
          </span>

          {/* Main section title */}
          <div className="text-[46px] font-extrabold mt-2 font-poppins">
            <span className="text-[#000]">Our Working Process </span>
          </div>
        </div>

        {/* Process steps container with responsive layout */}
        <div className="flex flex-col md:flex-row relative items-center justify-between p-8 rounded-lg">
          {/* ---------------- STEP 1 ---------------- */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              {/* Icon container with numbered badge */}
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-1.png"
                    alt="Service Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
              </div>
              {/* Step content */}
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Choose A Service
              </h3>
              <p className="mt-2 text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>
            {/* Connecting line (desktop only) */}
            <hr className="absolute right-[-125px] 2xl-custom:right-[-165px] z-[-2] top-[100px] rotate-[23deg] transform bg-transparent text-transparent w-[250px] 2xl-custom:w-[330px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* ---------------- STEP 2 ---------------- */}
          <div className="flex relative">
            {/* Responsive content ordering (mobile vs desktop) */}
            <div className="flex flex-col-reverse lg:flex-col items-center text-center">
              {/* Desktop-only content */}
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans] hidden lg:block">
                Define Requirements
              </h3>
              <p className="mt-2 text-base text-gray-700 hidden lg:block">
                In a free hour, when our power of choice is untrammeled and
              </p>

              {/* Mobile-only content */}
              <div className="block lg:hidden">
                <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                  Define Requirements
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  In a free hour, when our power of choice is untrammeled and
                </p>
              </div>

              {/* Icon container with numbered badge */}
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-2.png"
                    alt="Requirements Icon"
                    width={106}
                    height={100}
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting line (desktop only) */}
            <hr className="absolute right-[-125px] 2xl-custom:right-[-165px] z-[-2] top-[100px] rotate-[-23deg] transform bg-transparent text-transparent w-[250px] 2xl-custom:w-[330px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* ---------------- STEP 3 ---------------- */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              {/* Icon container with numbered badge */}
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-3.png"
                    alt="Meeting Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
              </div>
              {/* Step content */}
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Request A Meeting
              </h3>
              <p className="mt-2 text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>

            {/* Connecting line (desktop only) */}
            <hr className="absolute right-[-125px] 2xl-custom:right-[-165px] z-[-2] top-[100px] rotate-[23deg] transform bg-transparent text-transparent w-[250px] 2xl-custom:w-[330px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* ---------------- STEP 4 ---------------- */}
          <div className="flex flex-col-reverse lg:flex-col items-center text-center">
            {/* Mobile-only content */}
            <div className="block lg:hidden">
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Final Solution
              </h3>
              <p className="mt-2 text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>

            {/* Desktop-only content */}
            <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans] hidden lg:block">
              Final Solution
            </h3>
            <p className="mt-2 text-base text-gray-700 hidden lg:block">
              In a free hour, when our power of choice is untrammeled and
            </p>

            {/* Icon container with numbered badge */}
            <div className="relative">
              <div className="flex items-center justify-center text-white">
                <Image
                  src="/assets/about/icon-4.png"
                  alt="Solution Icon"
                  width={106}
                  height={100}
                />
              </div>
              <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
