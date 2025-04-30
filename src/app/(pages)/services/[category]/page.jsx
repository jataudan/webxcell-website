"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ServicesHero from "@/app/(components)/About/HeroSection";
import { getServiceByID } from "@/lib/queries/getServiceByID";
import { getAllServices } from "@/lib/queries/getAllServices";
import { getTime } from "@/lib/formatDate";
import RichText from "@/lib/richText";

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const { category } = params;

  const [service, setService] = useState({});
  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const [activeService, setActiveService] = useState(category);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await getServiceByID(category);
        const allServices = await getAllServices();

        if (services && allServices) {
          setIsLoading(false);
          setService(services?.data[0]);
          setAllServices(allServices?.data[0]?.serviceList);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleClick = (category) => {
    setActiveService(category);
    router.push(`/services/${category}`);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ServicesHero />

      <div className="relative bg-white lg:py-12 lg:px-12 mb-[150px]">
        <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10">
          {/* Header Section */}

          {/* Main Content */}
          <div className="w-full flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar */}
            <div className="flex flex-col gap-[20px]">
              <aside className="lg:flex-shrink-0 w-full lg:w-[370px] h-[462px] bg-[#ECF8FF] p-6 rounded-lg">
                <h3 className="text-[22px] font-bold text-[#101A29] --font-plus-jakarta-sans">
                  All Services
                </h3>

                {/* Horizontal Rules */}
                <div className="flex space-x-3 mb-4">
                  <hr className="border-t-2 border-[#219BE4] w-5" />
                  <hr className="border-t-2 border-[#635AD9] w-14 " />
                </div>

                <ul className="space-y-3">
                  {allServices?.map((item, index) => {
                    const slug = convertToSlug(item?.title);
                    return (
                      <li
                        key={index}
                        className={`cursor-pointer p-3 rounded-lg flex justify-between items-center ${
                          slug === activeService
                            ? "bg-[#FF6700] text-white"
                            : "bg-white hover:bg-gray-200"
                        }`}
                        onClick={() => handleClick(convertToSlug(item?.title))}
                      >
                        <span
                          className={`text-base --font-plus-jakarta-sans ${
                            slug === activeService
                              ? "text-white"
                              : "text-[#17012C]"
                          }`}
                        >
                          {item?.title}
                        </span>
                        <Image
                          src={
                            slug === activeService
                              ? "/assets/Service/white-arrow.png"
                              : "/assets/Service/purple-arrow.png"
                          }
                          alt="Arrow"
                          width={16}
                          height={16}
                        />
                      </li>
                    );
                  })}
                </ul>
              </aside>
              <aside className="flex-shrink-0 w-full lg:w-[370px] h-[347px] bg-[#ECF8FF] p-6 rounded-lg">
                <h3 className="text-[22px] font-bold text-[#101A29] --font-plus-jakarta-sans">
                  Opening Hours
                </h3>

                {/* Horizontal Rules */}
                <div className="flex space-x-3 mb-4">
                  <hr className="border-t-2 border-[#219BE4] w-5" />
                  <hr className="border-t-2 border-[#635AD9] w-14 " />
                </div>

                <ul className="space-y-3">
                  {service?.openingHours?.length &&
                    service?.openingHours?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="cursor-pointer p-3 rounded-lg flex gap-3 items-center bg-white hover:bg-gray-200"
                        >
                          {/* <Image
                          src={item?.icon}
                          alt="Arrow"
                          width={16}
                          height={16}
                        /> */}
                          {item?.startDay && (
                            <span
                              className={`text-base --font-plus-jakarta-sans ${"text-[#17012C]"}`}
                            >
                              {item?.startDay} - {item?.endDay}:{" "}
                              {getTime(item?.startTime)} -
                              {getTime(item?.endTime)}
                            </span>
                          )}
                          {item?.closeDay && (
                            <span
                              className={`text-base --font-plus-jakarta-sans ${"text-[#17012C]"}`}
                            >
                              {item?.closeDay}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  <li>
                    <button className="flex items-center justify-center gap-3 w-full bg-[#FF6700] text-white cursor-pointer p-3 rounded-lg">
                      Book Appointment Now
                      <Image
                        src="/assets/Service/white-arrow.png"
                        alt="Arrow"
                        width={16}
                        height={16}
                      />
                    </button>
                  </li>
                </ul>
              </aside>
              <div className="flex flex-col gap-2 justify-center items-center bg-mix-gradient w-full h-[351px] rounded-lg text-white --font-plus-jakarta-sans font-semibold">
                <Image
                  src={
                    service?.contact?.icon70x70
                      ? service?.contact?.icon70x70?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt="Rectangle"
                  width={70}
                  height={70}
                />
                <h3>{service?.contact?.title}</h3>
                <h3>{service?.contact?.phoneNumbers}</h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-grow">
              <div className="w-[770px] h-[370px] mb-4 overflow-hidden relative">
                <Image
                  src={
                    service?.mainImage770x370
                      ? service?.mainImage770x370?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt="Rectangle"
                  width={470}
                  height={370}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className=" mb-12">
                <div className="text-3xl font-extrabold text-[#101010] --font-plus-jakarta-sans mb-6">
                  {service.title}
                </div>
                <div className="mb-6 text-[#101010]">
                  <RichText content={service?.description} />
                </div>
              </div>
              <div className="flex flex-col flex-wrap max-w-[780px] md:flex-row gap-8 mb-12">
                {service?.servicesImages?.length > 0 &&
                  service?.servicesImages?.map((image, index) => {
                    return (
                      <Image
                        key={index}
                        className="w-full md:w-[370px] h-[390px] rounded-[20px] object-cover"
                        src={
                          image
                            ? image?.url
                            : "https://placehold.co/600x400.png?text=placeholder"
                        }
                        alt={`Service Image ${index + 1}`}
                        width={370}
                        height={390}
                      />
                    );
                  })}
              </div>

              {/* FAQ Section */}

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="w-full space-y-4">
                  {service?.questions?.map((faq) => (
                    <details
                      key={faq.id}
                      className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-full md:w-[768px] transition-all group-open:bg-[#F3F7FB]"
                    >
                      <summary className="cursor-pointer font-medium flex justify-between items-center">
                        <span className="faq-heading text-[14px] md:text-lg text-[#101010] font-semibold group-open:text-[#FF6700]">
                          {faq.question}
                        </span>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/assets/Service/arrow-right.png"
                            alt="Arrow Right"
                            width={20}
                            height={20}
                            className="group-open:hidden"
                          />
                          <Image
                            src="/assets/Service/arrow-orange-down.png"
                            alt="Arrow Down"
                            width={20}
                            height={20}
                            className="group-open:block hidden"
                          />
                        </div>
                      </summary>
                      <p className="mt-2 text-base text-[#101010] group-open:block hidden">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
