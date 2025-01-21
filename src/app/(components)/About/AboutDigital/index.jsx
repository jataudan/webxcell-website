import Image from "next/image";

export default function AboutDigital() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Left Decorative Image */}
      <div className="absolute top-[-126px] right-[613px] hidden sm:block">
        <Image
          layout="responsive"
          src="/assets/about/Ellipse.png"
          alt="Spiral Image"
          width={386}
          height={386}
        />
      </div>

      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center md:min-h-screen py-10 md:p-[112px] lg:py-20 gap-10">
        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 w-full px-4 text-center lg:text-left">
          {/* Title */}
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] text-sm sm:text-base">
            About Us
          </span>
          <div className="text-2xl sm:text-2xl md:text-[42px] mt-4 font-bold leading-[1.2] font-plus-jakarta md:space-y-4">
            <div>
              <span className="text-[#000]">We’re A Leading</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26b01] to-[#f26b01] font-extrabold">
                Digital
              </span>
            </div>
            <div>
              <span className="text-[#000]">Consulting Agency</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-sm sm:text-base lg:leading-relaxed">
            In Order To Scale New Customer Acquisition And Retention For
            E-commerce Brands, We Work Across The Entire Customer Journey. Our
            Team Has A Successful Track Record Of Helping Brands Scale.
          </p>
          <hr className="mt-6 hidden md:block" />

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
            <div className="flex items-center gap-4 translate-x-[-8px] md:translate-x-0">
              <Image
                src="/assets/digital-agency/digital-transformation.png"
                alt="Digital Transformation"
                width={60}
                height={60}
              />
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#17012C]">
                  94%
                </h4>
                <p className="uppercase text-xs sm:text-sm text-[#000]">
                  SMS Marketing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/digital-agency/marketing-stra.png"
                alt="Marketing Strategy"
                width={60}
                height={60}
              />
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#17012C]">
                  65%
                </h4>
                <p className="uppercase text-xs sm:text-sm text-[#000]">
                  Cover Marketing
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-9 hidden md:block" />

          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0">
            <a
              href="#"
              className="bg-[#f26b01] uppercase text-[#fff] px-6 py-3 rounded-full text-sm sm:text-lg font-bold shadow-md hover:shadow-lg"
            >
              About us
            </a>
            <Image
              src="/assets/hero-section/arrow.png"
              alt="Arrow"
              width={52}
              height={52}
            />
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Background Shape */}
          <div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[516px] lg:h-[516px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/about/ellipse-purple.png')",
            }}
          ></div>

          {/* Happy Clients Section */}
          <div className="absolute bottom-[-30px] sm:bottom-[-50px] w-[360px] z-20 flex items-center gap-4 bg-white px-2 py-2 md:px-6 md:py-4 rounded-full shadow-lg">
            {/* Profile Images */}
            <div className="flex -space-x-3">
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] border-2 border-white rounded-full"></span>
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] border-2 border-white rounded-full"></span>
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] border-2 border-white rounded-full"></span>
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C4C4C4] border-2 border-white rounded-full"></span>
            </div>
            {/* Text */}
            <span className="text-sm sm:text-base font-semibold text-[#17012C]">
              1.5k Happy Clients
            </span>
          </div>

          {/* Foreground Image */}
          <div className="relative z-10 mt-8 sm:mt-16">
            <Image
              src="/assets/about/about-digital-girl.png"
              alt="Business Woman"
              width={220}
              height={240}
              className="sm:w-[300px] sm:h-[330px] lg:w-[442px] lg:h-[476px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
