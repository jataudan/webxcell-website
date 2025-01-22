"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PortfolioHero from "@/app/(components)/About/HeroSection";

// Portfolio data
const portfolioData = [
  {
    id: 1,
    pageTitle: "generation-of-wealth",
    title: "Generation Of Wealth",
    category: "Marketing",
  },
  {
    id: 2,
    pageTitle: "creative-solutions",
    title: "Creative Solutions",
    category: "Design",
  },
  {
    id: 3,
    pageTitle: "innovative-ideas",
    title: "Innovative Ideas",
    category: "Development",
  },
  {
    id: 4,
    pageTitle: "growth-strategies",
    title: "Growth Strategies",
    category: "Business",
  },
];

const projectInfo = [
  { label: "Client", value: "Jhon Son Smith" },
  { label: "Category", value: "Building Constractions" },
  { label: "Start Date", value: "10 June, 2023" },
  { label: "End Date", value: "10 October, 2023" },
  { label: "Project Budget", value: "$25800.99" },
];

export default function PortfolioDetail() {
  const params = useParams();
  const router = useRouter();
  const { title } = params;

  const portfolio = portfolioData.find(
    (portfolio) => portfolio.pageTitle === title
  );

  if (!portfolio) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#000] mt-[90px]">
          Portfolio Not Found
        </h1>
      </div>
    );
  }
  const [activePortfolio, setActivePortfolio] = useState(title);

  useEffect(() => {
    setActivePortfolio(title);
  }, [title]);

  const handleClick = (item) => {
    setActivePortfolio(item.id);
    router.push(`/portfolio/${item.id}`);
  };

  return (
    <>
      <PortfolioHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <div className="mb-4 px-4 py-4 md:px-0 md:py-0">
          <Image
            src="/assets/Service/Rectangle.png"
            alt="Rectangle"
            width={1170}
            height={550}
          />
        </div>
        <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-2 md:py-12 md:px-0 gap-10">
          {/* Header Section */}

          {/* Main Content */}
          <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* Left Content */}
            <div className="flex-grow">
              <div className=" mb-12">
                <div className="text-3xl font-extrabold text-[#101010] font-plus-jakarta mb-6">
                  {portfolio.title}
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
                <div className="text-3xl font-extrabold text-[#101010] font-plus-jakarta mb-6">
                  Project Goals
                </div>
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>
                <div className="flex flex-col md:flex-row gap-5 md:gap-14">
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
              <div className=" flex flex-col md:flex-row gap-8 mb-12">
                <div className="flex flex-col items-center text-center bg-[#C4C4C4] w-full md:w-[370px] h-[390px] rounded-[20px] p-8 gap-8"></div>
                <div className="flex flex-col items-center text-center bg-[#C4C4C4] w-full md:w-[370px] h-[390px] rounded-[20px] p-8 gap-12"></div>
              </div>
              <div className="mb-12">
                <p className="mb-6 text-[#101010]">
                  At tempus aenean sapien torquent sed diam class efficitur mus
                  morbi eros dictum quam augue ac laor eet ligula libero mi
                  commodo nibh hac fermentum orci ad pharetra consequat justo
                  duis turpis lorem elit dui consectetur magnis lacinia odio per
                  placerat vestibulum volutpat mauris mollis primis imperdiet
                  posu ere ex enim gravida cras congue
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col gap-[20px] font-plus-jakarta">
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-portfolio-gradient p-6 rounded-[20px]">
                <h3 className="text-[22px] font-bold text-[#fff]">
                  Project Information
                </h3>

                <div className="flex space-x-3 mb-4">
                  <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2" />
                </div>

                {projectInfo.map((item, index) => (
                  <div key={index}>
                    <div>
                      <h4 className="text-[#fff] font-semibold">
                        {item.label}:
                      </h4>
                      <span className="text-[#fff]">{item.value}</span>
                    </div>
                    <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />
                  </div>
                ))}

                <div className="flex justify-center items-center gap-4 text-xl">
                  <span className="text-[#fff] text-[16px]">Follow on</span>
                  <a href="#">
                    <Image
                      src="/assets/portfolio/facebook.png"
                      alt="FaceBook"
                      width={10}
                      height={16}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/portfolio/twitter.png"
                      alt="Twitter"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/portfolio/linkedin.png"
                      alt="LinkedIn"
                      width={14}
                      height={16}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/portfolio/youtube.png"
                      alt="YouTube"
                      width={18}
                      height={16}
                    />
                  </a>
                </div>
              </aside>
              <div className="flex flex-col gap-2 justify-center items-center bg-portfolio-custome-gradient w-full h-[351px] rounded-lg text-white font-plus-jakarta font-semibold">
                <Image
                  src="/assets/portfolio/phone_icon.png"
                  alt="Rectangle"
                  width={70}
                  height={70}
                />
                <h3>Need Help? Connect Here</h3>
                <h3>+208-555-0112</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
