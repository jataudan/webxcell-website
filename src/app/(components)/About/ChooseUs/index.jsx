import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="relative overflow-hidden bg-white sm:py-20">
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-9 md:pb-0 md:py-10 sm:py-20 gap-10 px-4 sm:px-8">
        {/* Left Side - Content */}
        <div className="relative w-full lg:w-1/2 md:mt-8 lg:mt-0 text-center lg:text-left">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans] text-sm sm:text-base">
            Why Choose Us
          </span>

          <div className="text-[30px] sm:text-[46px] font-extrabold mt-4 font-poppins">
            <span className="text-[#000]">Why Choose Us</span>
          </div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed sm:pr-9 mb-8 font-[plus jakarta sans]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at layout the point of
            using lorem the is Ipsum less normal.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 mt-8 mb-8">
            <div className="flex items-center gap-4 translate-x-[-17px] md:translate-x-0">
              <Image
                src="/assets/about/growth.png"
                alt="Growth Image"
                width={64}
                height={62.02}
              />
              <div className="flex flex-col items-start">
                <p className="text-lg sm:text-xl font-semibold text-[#101010]">
                  Business
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[#101010]">
                  Growth
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/about/consultancy.png"
                alt="Consultancy Image"
                width={64}
                height={62.02}
              />
              <div className="flex flex-col items-start">
                <p className="text-lg sm:text-xl font-semibold text-[#101010]">
                  Technology
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[#101010]">
                  Consultancy
                </p>
              </div>
            </div>
          </div>

          <hr className="w-full sm:w-[440px]" />

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 mt-8 mb-8">
            <div className="flex items-center">
              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-base font-semibold text-[#101010]">
                  Dr Dan Jatau
                </p>
                <p className="text-xs sm:text-base text-[#101010]">
                  Founder/Chief Technologist
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/about/phone-icon.png"
                alt="phone icon"
                width={56}
                height={54.27}
              />
              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-[14px] font-semibold text-[#101010]">
                  Call Us Now
                </p>
                <p className="text-lg sm:text-[18px] font-extrabold text-[#101010]">
                  +44 800 195 7512
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center overflow-hidden">
          {/* Background Shape */}
          <div
            className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[516px] lg:h-[550px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/about/purple-bg.webp')",
            }}
          ></div>

          {/* Foreground Image */}
          <div className="relative z-10 mt-8 sm:mt-16">
            <Image
              src="/assets/about/business-woman.webp"
              alt="Business Woman"
              width={180}
              height={200}
              className="sm:w-[300px] sm:h-[330px] lg:w-[442px] lg:h-[476px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
