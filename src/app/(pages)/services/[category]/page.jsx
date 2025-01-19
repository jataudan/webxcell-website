"use client"; // Add this directive at the top

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ServicesHero from "@/app/(components)/About/HeroSection";

// Service data
const serviceData = [
  {
    id: "seo-link-building",
    title: "SEO Link Building Optimization",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/seo.png",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/web-development.png",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/digital-strategy.png",
  },
  {
    id: "brand-design",
    title: "Brand Design Identity",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/brand-design.png",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/email-marketing.png",
  },
  {
    id: "video-production",
    title: "Video Production",
    description: "We Can Help You & Routine Audits To Determine An SEO",
    icon: "/assets/Service/video-production.png",
  },
];

export default function ServiceDetail() {
  const params = useParams(); // Use useParams to get the dynamic route
  const router = useRouter(); // For navigation
  const { category } = params;

  // Find the service details based on the category
  const service = serviceData.find((service) => service.id === category);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </div>
    );
  }
  // Set active service based on the category param in URL
  const [activeService, setActiveService] = useState(category);

  // Update active service on page load if the URL changes
  useEffect(() => {
    setActiveService(category);
  }, [category]);

  const handleClick = (item) => {
    setActiveService(item.id); // Update active service on click
    router.push(`/services/${item.id}`); // Navigate to the selected service
  };

  return (
    <>
      <ServicesHero />

      <div className="relative bg-white py-12 px-6 lg:px-12">
        <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-12 gap-10">
          {/* Header Section */}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar */}
            <aside className="flex-shrink-0 w-[370px] h-[462px] bg-[#ECF8FF] p-6 rounded-lg">
              <h3 className="text-[22px] font-bold text-[#101A29] font-[plus jakarta sans]">
                All Services
              </h3>

              {/* Horizontal Rules */}
              <div className="flex space-x-3 mb-4">
                <hr className="border-t-2 border-[#219BE4] w-5" />
                <hr className="border-t-2 border-[#635AD9] w-14 " />
              </div>

              <ul className="space-y-3">
                {serviceData.map((item, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-3 rounded-lg flex justify-between items-center ${
                      item.id === activeService
                        ? "bg-[#FF6700] text-white" // Active item with orange bg and white text
                        : "bg-white hover:bg-gray-200"
                    }`}
                    onClick={() => handleClick(item)}
                  >
                    <span
                      className={`text-base font-[plus jakarta sans] ${
                        item.id === activeService
                          ? "text-white"
                          : "text-[#17012C]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <Image
                      src={
                        item.id === activeService
                          ? "/assets/Service/white-arrow.png" // White arrow for active item
                          : "/assets/Service/purple-arrow.png" // Purple arrow for inactive items
                      }
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </li>
                ))}
              </ul>
            </aside>

            {/* Right Content */}
            <div className="flex-grow">
              <div className="mb-4">
                <Image
                  src="/assets/Service/Rectangle.png"
                  alt="Rectangle"
                  width={770}
                  height={370}
                />
              </div>
              <div className=" mb-12">
                <div className="text-3xl font-extrabold text-[#101010] font-[plus jakarta sans] mb-6">
                  {service.title}
                </div>
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>
                <p className="mb-6 text-[#101010]">
                  pellentesque vulputate malesuada dictumst fames interdum
                  cursus an te tellus porta ullamcorper accumsan non eu
                  adipiscing integer venenatis sagittis arcu curae finibus ridi
                  culus aliquam velit lobortis senectus vitae sollicitudin sit
                  consectetuer ultricies rutrum parturient pede nisi nascetur
                  habitant netus quisque elementum inceptos nam felis penatibus
                  feugiat
                </p>
                <div className="text-3xl font-extrabold text-[#101010] font-[plus jakarta sans] mb-6">
                  What We Provide
                </div>
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>
              </div>
              <div className=" flex flex-row gap-8 mb-12">
                <div className="flex flex-col items-center text-center bg-[#00BFFF] w-[370px] h-[390px] rounded-[20px] p-8 gap-8">
                  <div className="item-center">
                    <Image
                      src="/assets/Service/brand-identity.png"
                      alt="brand-identity"
                      width={140}
                      height={188}
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex-grow">
                    <p className="text-lg text-[#FFFFF0] mb-6">
                      Brand Design <br /> Identity{" "}
                    </p>
                    <p className="text-base text-[#FFFFF0] mb-4">
                      In order to scale new customer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center bg-[#00BFFF] w-[370px] h-[390px] rounded-[20px] p-8 gap-12">
                  <div className="item-center">
                    <Image
                      src="/assets/Service/video-search.png"
                      alt="video-search"
                      width={153}
                      height={172}
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex-grow">
                    <p className="text-lg text-[#FFFFF0] mb-6">
                      Video Search <br /> Optimization{" "}
                    </p>
                    <p className="text-base text-[#FFFFF0] mb-4">
                      In order to scale new customer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <div className="text-3xl font-extrabold text-[#101010] font-[plus jakarta sans] mb-6">
                  The Challenge
                </div>
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>

                <div className="flex gap-14">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-2">
                      <Image
                        src="/assets/Service/check.png"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      <p className="text-[#101010]">
                        Various analysis options.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Image
                        src="/assets/Service/check.png"
                        alt="check"
                        width={20}
                        height={20}
                      />{" "}
                      <p className="text-[#101010]">
                        Advance Data analysis operation.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex items-start gap-2">
                      <Image
                        src="/assets/Service/check.png"
                        alt="check"
                        width={20}
                        height={20}
                      />{" "}
                      <p className="text-[#101010]">
                        Page Load (time, size, number of requests).
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Image
                        src="/assets/Service/check.png"
                        alt="check"
                        width={20}
                        height={20}
                      />{" "}
                      <p className="text-[#101010]">
                        Advance Data analysis operation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-[768px] transition-all group-open:bg-[#F3F7FB]">
                    <summary className="cursor-pointer font-medium flex justify-between items-center">
                      <span className="faq-heading text-lg text-[#101010] font-semibold group-open:text-[#FF6700]">
                        How long should a business plan be?
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
                      There are many variations of passages Lorem Ipsum but the
                      majority have suffered alteration in some form, by
                      injected humor.
                    </p>
                  </details>

                  <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-[768px] transition-all group-open:bg-[#F3F7FB]">
                    <summary className="cursor-pointer font-medium flex justify-between items-center">
                      <span className="faq-heading text-lg text-[#101010] font-semibold group-open:text-[#FF6700]">
                        What is included in your services?
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
                      There are many variations of passages Lorem Ipsum but the
                      majority have suffered alteration in some form, by
                      injected humor.
                    </p>
                  </details>

                  <details className="faq-item group bg-transparent border border-[#EAF3F8] p-4 rounded-lg w-[768px] transition-all group-open:bg-[#F3F7FB]">
                    <summary className="cursor-pointer font-medium flex justify-between items-center">
                      <span className="faq-heading text-lg text-[#101010] font-semibold group-open:text-[#FF6700]">
                        What type of company is measured?
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
                      There are many variations of passages Lorem Ipsum but the
                      majority have suffered alteration in some form, by
                      injected humor.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
