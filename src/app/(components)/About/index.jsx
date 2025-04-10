import Image from "next/image";
import Link from "next/link";

export default function AboutUs({ data }) {
  console.log('data', data);
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative Spiral Image - Hidden on Mobile */}
      <div className="absolute bottom-[100px] left-[90px] hidden sm:block">
        <Image
          src="/assets/about/Spiral.png"
          alt="Spiral Image"
          width={59}
          height={128}
        />
      </div>

      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 gap-10">
        {/* Left Side - Image */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 flex justify-center">
          <Image
            src={
              data?.leftImage553x534
                ? data?.leftImage553x534?.url
                : "https://placehold.co/600x400.png?text=placeholder"
            }
            alt={data?.leftImage553x534?.alternativeText || "Default Image"}
            width={data?.leftImage553x534?.width || 676}
            height={data?.leftImage553x534?.height || 534}
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          <span className="block title font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            About us
          </span>

          <div className="headline text-2xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]">{data?.prefix || 'We’re A Strategic'}</span>{" "}
            <span className="highlight brown">{data?.primaryHightlighted || 'Digital'}</span>
            <br />
            <span className="highlight orange">{data?.secondaryHighlighted || "Media"}</span>{" "}
            <span className="text-[#000]">{data?.suffix || 'Agency'}</span>
          </div>

          <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed px-2 md:px-0">
            {data?.paragraph || ""}
          </p>

          {/* Stat */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-8 mt-8">
            <div className="text-center lg:text-left space-y-7 md:space-y-3">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-800 stylish-text">
                {data?.campaigns || ""}
              </h4>
              <p className="text-gray-700 max-w-[200px] mx-auto lg:mx-0">
                {data?.campaignsText || ""}
              </p>
            </div>
            <div className="text-center lg:text-left space-y-7 md:space-y-3">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-800 stylish-text">
                {data?.traffic || ""}
              </h4>
              <p className="text-gray-700 max-w-[200px] mx-auto lg:mx-0">
                {data?.trafficText || ""}
              </p>
            </div>

            {/* Decorative Circle - Hidden on Mobile */}
            <div className="hidden sm:block">
              <Image
                src="/assets/about/circel.png"
                alt="Circle"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 flex sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-0">
            <Link
              href="/about-us"
              className="bg-[--primary] uppercase hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
            >
              About us
            </Link>
            <Link href="/about-us">
              <Image
                src="/assets/hero-section/arrow.png"
                alt="Arrow"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Heavy Waves Image - Hidden on Mobile */}
      <div className="absolute right-0 bottom-[150px] lg:bottom-[190px] hidden sm:block">
        <Image
          src="/assets/about/Heavy-Waves.png"
          alt="Heavy Waves Image"
          width={195}
          height={40}
        />
      </div>
    </div>
  );
}
