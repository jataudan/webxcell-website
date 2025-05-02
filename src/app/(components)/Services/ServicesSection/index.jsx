"use client";

import { getServiceDetail } from "@/lib/queries/getServiceDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function ServicesSection() {
  const router = useRouter();
  const [serviceDetail, setserviceDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getServiceDetail();
      if (response) {
        setIsLoading(false);
        setserviceDetail(response?.data || []);
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
    <div className="relative overflow-hidden bg-white font-montserrat">
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-12 gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceDetail.map((service) => {
            return (
              <div
                key={service.id}
                className="relative cursor-pointer flex flex-col items-center text-center rounded-[185px] w-[370px] h-[560px] p-1 shadow-lg transition-all duration-300 bg-white group"
                onClick={() => router.push(`/services/${service?.slug}`)}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-[185px] bg-gradient-to-r from-[--primary] to-[--primary] p-1 transition-all duration-300 opacity-100 "></div>
                <div className="relative z-10 flex flex-col items-center justify-between py-4 text-center bg-white w-full h-full rounded-[185px] group-hover:bg-gradient-to-r group-hover:from-[--primary] group-hover:to-[--primary] group-hover:text-white transition-all duration-300">
                  <div className="relative pt-2">
                    <div className="bg-gray-500 w-[300px] h-[300px] rounded-full overflow-hidden relative">
                      <Image
                        src={
                          service?.thumbnail300x300
                            ? service?.thumbnail300x300?.url
                            : "https://placehold.co/600x400.png?text=placeholder"
                        }
                        alt="Ellipse"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full absolute"
                      />
                    </div>
                    {service?.iconImage88x102 && (
                      <div className="absolute flex items-center right-[110px] top-[250px] z-10">
                        <Image
                          src={service?.iconImage88x102?.url}
                          alt={"Service Logo"}
                          width={88}
                          height={102}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mb-12">
                    <h3 className="text-lg font-bold mb-2 text-[#17012C] group-hover:text-white">
                      {service?.title}
                    </h3>
                    <p className="text-base text-[#504E4E] font-plusJakarta px-12 group-hover:text-white">
                      {service?.shortDescription}
                    </p>
                  </div>
                </div>
                {/* Arrow Button */}
                <div
                  className="absolute bottom-[-65px] z-10 cursor-pointer"
                  onClick={() => router.push(`/services/${service?.slug}`)}
                >
                  <Image
                    src="/assets/Service/arrow-1.png"
                    alt="arrow"
                    width={128}
                    height={138}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
