"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ServicesSection() {
  const router = useRouter();

  const services = [
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

  return (
    <div className="relative overflow-hidden bg-white">
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-12 gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col items-center text-center rounded-[185px] w-[370px] h-[560px] p-1 shadow-lg transition-all duration-300 bg-white group"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[185px] bg-gradient-to-r from-[#6461FC] to-[#60B7FF] p-1 transition-all duration-300 opacity-100 "></div>
              <div className="relative z-10 flex flex-col items-center justify-between py-4 text-center bg-white w-full h-full rounded-[185px] group-hover:bg-gradient-to-r group-hover:from-[#6461FC] group-hover:to-[#60B7FF] group-hover:text-white transition-all duration-300">
                <div className="relative pt-2">
                  <Image
                    src="/assets/Service/Ellipse.png"
                    alt="Ellipse"
                    width={300}
                    height={300}
                  />
                  <div className="absolute flex items-center right-[110px] top-[250px] z-10">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={88}
                      height={102}
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-12">
                  <h3 className="text-lg font-bold mb-2 text-[#17012C]">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#504E4E] font-[plus jakarta sans] px-12">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* Arrow Button */}
              <div
                className="absolute bottom-[-65px] z-10 cursor-pointer"
                onClick={() => router.push(`/services/${service.id}`)}
              >
                <Image
                  src="/assets/Service/arrow.png"
                  alt="arrow"
                  width={128}
                  height={138}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
