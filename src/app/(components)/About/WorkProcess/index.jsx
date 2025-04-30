import Image from "next/image";

export default function WorkProcess({ data }) {
  console.log('data', data)
  return (
    <section
      style={{
        backgroundImage: `url(/assets/about/bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto bg-[#7fdeff] md:bg-transparent pt-10 pb-12 font-plus-jakarta">
        <div className=" flex flex-col align-center justify-center items-center text-center pt-[40px] md:pt-20">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4]">
            {data?.h2 || ""}
          </span>

          <div className="text-[46px] font-extrabold mt-2 font-poppins">
            <span className="text-[#000] ">Our Working Process</span>{" "}
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
                      data?.milestones[0]?.image100x100?.url ||
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
              <h3 className="mt-4 text-lg font-bold">
                {data?.milestones[0]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700">
                {data?.milestones[0]?.description || ""}
              </p>
            </div>
            <hr className="absolute right-[-125px] 2xl-custom:right-[-139px] z-[-2] 2xl-custom:top-[113px] top-[139px] 2xl-custom:rotate-[23deg] rotate-[38deg] transform bg-transparent text-transparent w-[270px] 2xl-custom:w-[313px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* <!-- Step 2 --> */}
          <div className="flex relative">
            <div className="flex flex-col-reverse lg:flex-col items-center text-center">
              <h3 className="mt-4 text-lg font-bold hidden lg:block">
                {data?.milestones[1]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700 hidden lg:block">
                {data?.milestones[1]?.description || ""}
              </p>

              <div className="block lg:hidden">
                <h3 className="mt-4 text-lg font-bold">
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
                      data?.milestones[1]?.image100x100?.url ||
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
            <hr className="absolute right-[-150px] 2xl-custom:right-[-167px] z-[-2] 2xl-custom:top-[108px] top-[140px] 2xl-custom:rotate-[-25deg] rotate-[-37deg] transform bg-transparent text-transparent w-[262px] 2xl-custom:w-[295px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 3 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src={
                      data?.milestones[2]?.image100x100?.url ||
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
              <h3 className="mt-4 text-lg font-bold">
                {data?.milestones[2]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700">
                {data?.milestones[2]?.description || ""}
              </p>
            </div>

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[-123px] 2xl-custom:right-[-159px] z-[-2] 2xl-custom:top-[109px] top-[125px] 2xl-custom:rotate-[24deg] rotate-[35deg] transform bg-transparent text-transparent w-[260px] 2xl-custom:w-[342px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 4 --> */}
          <div className="flex flex-col-reverse lg:flex-col items-center text-center">
            <div className="block lg:hidden">
              <h3 className="mt-4 text-lg font-bold">
                {data?.milestones[3]?.title || ""}
              </h3>
              <p className="mt-2 text-base text-gray-700">
                {data?.milestones[3]?.description || ""}
              </p>
            </div>
            <h3 className="mt-4 text-lg font-bold hidden lg:block">
              {data?.milestones[3]?.title || ""}
            </h3>
            <p className="mt-2 text-base text-gray-700 hidden lg:block">
              {data?.milestones[3]?.description || ""}
            </p>
            <div className="relative">
              <div className="flex items-center justify-center text-white">
                <Image
                  src={
                    data?.milestones[3]?.image100x100?.url ||
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
          {/* <!-- Step 5 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src={
                      data?.milestones[4]?.image100x100?.url ||
                      "/assets/about/icon-3.png"
                    }
                    alt="Meeting Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  5
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">
                {data?.milestones[4]?.title || ""}
              </h3>
              <p className="mt-2  text-base text-gray-700">
                {data?.milestones[4]?.description || ""}
              </p>
            </div>

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[120px] 2xl-custom:right-[93px] z-[-2] 2xl-custom:top-[127px] top-[138px] 2xl-custom:rotate-[-33deg] rotate-[-37deg] transform bg-transparent text-transparent w-[260px] 2xl-custom:w-[325px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
