import { getServiceClient } from "@/lib/queries/getTopNav";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceTestimonial() {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getServiceClient();
      if (response) {
        setIsLoading(false);
        setService(response?.data?.serviceTestimonials);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-white my-24 mb-[150px]">
      <div className="absolute left-0 top-[9px] lg:bottom-[120px] hidden sm:block">
        <Image
          src="/assets/Service/pattern-left.png"
          alt="pattern Image"
          width={149}
          height={250}
        />
      </div>
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between py-2 gap-10">
        {/* Left Side - Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Background Shape */}
          <Image
            src={service?.clientImage585x609?.url}
            alt="Business Woman"
            width={585}
            height={609}
            className="sm:w-[400px] sm:h-[400px] lg:w-[516px] lg:h-[516px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          <span className="font-bold uppercase  text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] --font-plus-jakarta-sans">
            {service?.heading}
          </span>

          <div className="headline text-2xl md:text-4xl font-bold mt-4">
            <span className="text-[#000]">{service?.title}</span>
          </div>
          <div className="text-[#FF6700] text-xl text-left my-2">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 my-4 text-base --font-plus-jakarta-sans md:text-lg leading-relaxed px-2 md:px-0">
            {service?.paragraph}
          </p>
          <div className="flex gap-20">
            <div className="flex items-center gap-4">
              <Image
                src={service?.clientDetails?.image70x70?.url}
                alt="cofounder icon"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#FF6700]"
              />

              <div className="flex flex-col items-start">
                <p className="text-sm sm:text-xs  font-semibold text-[#17012C]">
                  {service?.clientDetails?.name}
                </p>
                <p className="text-base sm:text-xs text-left text-[#504E4E]">
                  {service?.clientDetails?.designation}
                </p>
              </div>
            </div>
            <Image
              src="/assets/Service/inverted-commas.png"
              alt="inverted commas"
              width={53.87}
              height={42.82}
            />
          </div>
        </div>
      </section>

      {/* Decorative Pattern right Image - Hidden on Mobile */}
      <div className="absolute right-0 bottom-[100px] lg:bottom-[120px] hidden sm:block">
        <Image
          src="/assets/Service/pattern-right.png"
          alt="pattern Image"
          width={146}
          height={324}
        />
      </div>
    </div>
  );
}
