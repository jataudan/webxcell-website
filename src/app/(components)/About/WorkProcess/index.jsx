import Image from "next/image";

export default function WorkProcess({ data }) {
  return (
    <section
      style={{
        backgroundImage: `url(/assets/about/bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto bg-[#7fdeff] md:bg-transparent pt-10 pb-12">
        <div className=" flex flex-col align-center justify-center items-center text-center pt-[40px] md:pt-20">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] --font-plus-jakarta-sans">
            {data?.h2 || ""}
          </span>

          <div className="text-[46px] font-extrabold mt-2 --font-poppins">
            <span className="text-[#000]">Our Working Process </span>{" "}
          </div>
        </div>
        <div className="flex flex-col md:flex-row relative items-center justify-between p-8 rounded-lg ">
          {/* <!-- Step 1 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src={
                      data?.milestones[0]?.image?.url ||
                      "/assets/about/icon-1.png"
                    }
                    alt="Service Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans">
                {data?.milestones[0]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700">
                {data?.milestones[0]?.description || ""}
              </p>
            </div>
            <hr className="absolute right-[-139px] 2xl-custom:right-[-195px] z-[-2] 2xl-custom:top-[80px] top-[100px] 2xl-custom:rotate-[15deg] rotate-[23deg] transform bg-transparent text-transparent w-[290px] 2xl-custom:w-[410px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* <!-- Step 2 --> */}
          <div className="flex relative">
            <div className="flex flex-col-reverse lg:flex-col items-center text-center">
              <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans hidden lg:block">
                {data?.milestones[1]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700 hidden lg:block">
                {data?.milestones[1]?.description || ""}
              </p>

              <div className="block lg:hidden">
                <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans">
                  {data?.milestones[1]?.title || ""}
                </h3>
                <p className="mt-2  text-base text-gray-700">
                  {data?.milestones[1]?.description || ""}
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src={
                      data?.milestones[1]?.image?.url ||
                      "/assets/about/icon-2.png"
                    }
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

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[-125px] 2xl-custom:right-[-165px] z-[-2] 2xl-custom:top-[90px] top-[100px] 2xl-custom:rotate-[-16deg] rotate-[-23deg] transform bg-transparent text-transparent w-[290px] 2xl-custom:w-[350px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 3 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src={
                      data?.milestones[2]?.image?.url ||
                      "/assets/about/icon-3.png"
                    }
                    alt="Meeting Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans">
                {data?.milestones[2]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700">
                {data?.milestones[2]?.description || ""}
              </p>
            </div>

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[-165px] 2xl-custom:right-[-196px] z-[-2] 2xl-custom:top-[90px] top-[100px] 2xl-custom:rotate-[15deg] rotate-[23deg] transform bg-transparent text-transparent w-[290px] 2xl-custom:w-[350px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 4 --> */}
          <div className="flex flex-col-reverse lg:flex-col items-center text-center">
            <div className="block lg:hidden">
              <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans">
                {data?.milestones[3]?.title || ""}
              </h3>
              <p className="mt-2 text-base text-gray-700">
                {data?.milestones[3]?.description || ""}
              </p>
            </div>
            <h3 className="mt-4 text-lg font-bold --font-plus-jakarta-sans hidden lg:block">
              {data?.milestones[3]?.title || ""}
            </h3>
            <p className="mt-2 text-base text-gray-700 hidden lg:block">
              {data?.milestones[3]?.description || ""}
            </p>
            <div className="relative">
              <div className="flex items-center justify-center text-white">
                <Image
                  src={
                    data?.milestones[3]?.image?.url ||
                    "/assets/about/icon-4.png"
                  }
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
