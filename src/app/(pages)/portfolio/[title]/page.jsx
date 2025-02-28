"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PortfolioHero from "@/app/(components)/About/HeroSection";
import { getProjectByID } from "@/lib/queries/getProjectByID";
import RichText from "@/lib/richText";

export default function PortfolioDetail() {
  const params = useParams();
  const { slug } = params;

  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getProjectByID(slug);
        if (response) {
          setIsLoading(false);
          setProject(response?.data[0]);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <PortfolioHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <div className="mb-4 px-4 py-4 md:px-0 md:py-0">
          <Image
            src={
              project?.mainImage
                ? project?.mainImage?.url
                : "https://placehold.co/600x400.png?text=placeholder"
            }
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
                <div className="text-3xl font-extrabold text-[#101010] --font-plus-jakarta-sans mb-6">
                  {project?.title}
                </div>
                <div className="mb-6 text-[#101010]">
                  <RichText content={project?.description} />
                </div>
                <div className="flex flex-col flex-wrap max-w-[780px] md:flex-row gap-8 mb-12">
                  {project?.projectImages?.length > 0 &&
                    project?.projectImages?.map((image, index) => {
                      return (
                        <Image
                          key={index}
                          className="w-full md:w-[370px] h-[390px] rounded-[20px] object-cover"
                          src={
                            image
                              ? image?.url
                              : "https://placehold.co/600x400.png?text=placeholder"
                          }
                          alt="image"
                          width={370}
                          height={390}
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col gap-[20px] --font-plus-jakarta-sans">
              <aside className="lg:flex-shrink-0 w-full lg:w-[309px] bg-portfolio-gradient p-6 rounded-[20px]">
                <h3 className="text-[22px] font-bold text-[#fff]">
                  Project Information
                </h3>

                <div className="flex space-x-3 mb-4">
                  <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2" />
                </div>

                <div>
                  <h4 className="text-[#fff] font-semibold">Client:</h4>
                  <span className="text-[#fff]">
                    {project?.projectInfo?.clientName}
                  </span>
                </div>

                <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />

                <div>
                  <h4 className="text-[#fff] font-semibold">Category:</h4>
                  <span className="text-[#fff]">
                    {project?.projectInfo?.category}
                  </span>
                </div>

                <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />

                <div>
                  <h4 className="text-[#fff] font-semibold">Start Date:</h4>
                  <span className="text-[#fff]">
                    {project?.projectInfo?.startDate}
                  </span>
                </div>

                <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />

                <div>
                  <h4 className="text-[#fff] font-semibold">End Date:</h4>
                  <span className="text-[#fff]">
                    {project?.projectInfo?.endDate}
                  </span>
                </div>

                <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />

                <div>
                  <h4 className="text-[#fff] font-semibold">Project Budget:</h4>
                  <span className="text-[#fff]">
                    {project?.projectInfo?.budget}
                  </span>
                </div>

                <hr className="border-t-1 border-[#FFFFFF15] w-full mt-2 mb-4" />

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
              <div className="flex flex-col gap-2 justify-center items-center bg-portfolio-custome-gradient w-full h-[351px] rounded-lg text-white --font-plus-jakarta-sans font-semibold">
                <Image
                  src={
                    project?.contact?.icon
                      ? project?.contact?.icon?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt="Rectangle"
                  width={70}
                  height={70}
                />
                <h3>{project?.contact?.title}</h3>
                <h3>{project?.contact?.phoneNumbers}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
