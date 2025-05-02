"use client";
import { getFAQ } from "@/lib/queries/getFAQ";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FaqSection() {
  const [faq, setFaq] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFAQ();
      if (response) {
        setIsLoading(false);
        setFaq(response?.data[0]);
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
    <div className="relative overflow-hidden bg-white mb-[130px]">
      <section className="container mx-auto flex flex-col lg:flex-row justify-center py-10 md:p-[112px] lg:py-20 gap-10">
        <div className="relative flex ">
          <div className="relative mt-8 ">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] text-2xl">
              FAQ{" "}
            </span>
            <div className="mt-5 font-extrabold --font-plus-jakarta-sans mb-[70px]">
              <span className="text-[#000] text-[18px] md:text-[50px] leading-[1.2]">
                Frequently Asked Questions
              </span>{" "}
              <p className="mt-6">
                You can find relevant information about our company and services
                by browsing through the following FAQs. Please get in touch with
                us for more details.
              </p>
            </div>
            <Image
              src={
                faq?.mainImage
                  ? faq?.mainImage?.url
                  : "https://placehold.co/600x400.png?text=placeholder"
              }
              alt="rectangle"
              width={486}
              height={568.71}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 w-full px-4 text-center lg:text-left">
          {/* Title */}
          {/* <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] text-sm sm:text-base">
            FAQ{" "}
          </span>
          <div className="mt-4 font-extrabold --font-plus-jakarta-sans ">
            <span className="text-[#000] text-[18px] md:text-[50px]">
              Frequently Asked Questions
            </span>{" "}
          </div> */}

          <div className="mt-12">
            <div className="space-y-2">
              {faq?.questions?.map((item, index) => {
                return (
                  <details
                    key={index}
                    className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-full md:w-[570px] transition-all group-open:bg-[#F3F7FB]"
                  >
                    <summary className="cursor-pointer font-medium flex gap-4 items-center">
                      <div className="flex items-center gap-2 w-[47px]">
                        <Image
                          src="/assets/faq/icon-plus.png"
                          alt="plus "
                          width={45}
                          height={45}
                          className="group-open:hidden"
                        />
                        <Image
                          src="/assets/faq/icon-minus.png"
                          alt="minus "
                          width={45}
                          height={45}
                          className="group-open:block hidden"
                        />
                      </div>

                      <span className="faq-heading text-sm text-left md:text-base text-[#101010] font-bold--font-plus-jakarta-sans ">
                        {item?.question}
                      </span>
                    </summary>
                    <p className="mt-2 text-sm text-left md:text-base text-[#101010] group-open:block hidden">
                      {item?.answer}
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
