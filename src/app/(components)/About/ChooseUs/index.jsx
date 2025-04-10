import Image from "next/image";

export default function ChooseUs({ data }) {
  return (
    <div className="relative overflow-hidden bg-white sm:py-20">
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-9 md:pb-0 md:py-10 sm:py-20 gap-10 px-4 sm:px-8">
        {/* Left Side - Content */}
        <div className="relative w-full lg:w-1/2 md:mt-8 lg:mt-0 text-center lg:text-left pt-[25px] md:pt-0">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] --font-plus-jakarta-sans text-sm sm:text-base ">
            Why Choose Us
          </span>

          <div className="text-[30px] sm:text-[46px] font-semibold mt-4 --font-plus-jakarta-sans">
            <span className="text-[#000]">{data?.h2}</span>
          </div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed sm:pr-9 mb-8 --font-plus-jakarta-sans">
            {data?.paragraph}
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 mt-8 mb-8">
            {data?.benefits?.length > 0 &&
              data?.benefits?.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex items-center gap-4 ${
                    index === 0 ? "translate-x-[-17px] md:translate-x-0" : ""
                  }`}
                >
                  <Image
                    src={
                      service?.icon
                        ? service?.icon?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    alt={service?.name || "Default Image"}
                    width={64}
                    height={62}
                  />
                  <div className="flex flex-col items-start">
                    {service.name.split("  ").map((line, i) => (
                      <p
                        key={i}
                        className="text-lg sm:text-xl font-semibold text-[#101010]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <hr className="w-full sm:w-[440px]" />

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 mt-8 mb-8">
            <div className="flex items-center">
              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-base font-semibold text-[#101010]">
                  {data?.contactInfo?.name}
                </p>
                <p className="text-xs sm:text-base text-[#101010]">
                  {data?.contactInfo?.designation}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={
                  data?.contactInfo?.icon
                    ? data?.contactInfo?.icon?.url
                    : "https://placehold.co/600x400.png?text=placeholder"
                }
                alt="phone icon"
                width={56}
                height={54.27}
              />
              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-[14px] font-semibold text-[#101010]">
                  {data?.contactInfo?.title}
                </p>
                <p className="text-lg sm:text-[18px] font-extrabold text-[#101010]">
                  {data?.contactInfo?.phoneNumber}
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
              src={
                data?.mainImage
                  ? data?.mainImage?.url
                  : "https://placehold.co/600x400.png?text=placeholder"
              }
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
