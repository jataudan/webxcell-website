"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TeamHero from "@/app/(components)/About/HeroSection";
import { getTeamByID } from "@/lib/queries/getTeamByID";
import RichText from "@/lib/richText";

export default function TeamDetail() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [teamMember, setTeamMember] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getTeamByID(slug);
        if (response) {
          setIsLoading(false);
          setTeamMember(response?.data[0]);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const handleClick = (item) => {
    setActivePortfolio(item.id);
    router.push(`/portfolio/${item.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!teamMember) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#000] mt-[90px]">
          Team Detial Not Found
        </h1>
      </div>
    );
  }
  return (
    <>
      <TeamHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <div className="w-full text-[--black] p-4 md:p-8 relative border border-[--sky-blue]">
          {/* Profile Section */}
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:space-x-8">
            {/* Image Placeholder */}
            <Image
              src={
                teamMember?.image
                  ? teamMember?.image?.url
                  : "https://placehold.co/600x400.png?text=placeholder"
              }
              alt={teamMember?.name}
              width={294}
              height={294}
              className="object-cover"
            />
            {/* Content Section */}
            <div className="flex-1">
              {/* Name and Role */}
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[--black]">
                    {teamMember?.name}
                  </h2>
                  <p className="text-sm text-[--black]">
                    {teamMember?.designation}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a href="#">
                    <Image
                      src="/assets/team-details/fb.png"
                      alt="facebook"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/team-details/twitter.png"
                      alt="twitter"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/team-details/linkedIn.png"
                      alt="linkedIn"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/team-details/youtube.png"
                      alt="youtube"
                      width={36}
                      height={36}
                    />
                  </a>
                </div>
              </div>

              {/* Separator */}
              <hr className="my-4 border-gray-600" />

              {/* Description */}
              <div className="text-sm leading-relaxed">
                <RichText content={teamMember?.description} />
              </div>

              {/* Contact Information */}
              <div className="flex flex-col justify-end h-[183px]">
                <hr className="my-4 border-gray-600 mb-3 nd:mb-12" />
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-start md:space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <a href="#">
                      <Image
                        src="/assets/team-details/phone.png"
                        alt="phone"
                        width={36}
                        height={36}
                      />
                    </a>
                    <span>{teamMember?.contactDetails?.phoneNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href="#">
                      <Image
                        src="/assets/team-details/message.png"
                        alt="message"
                        width={36}
                        height={36}
                      />
                    </a>
                    <span>{teamMember?.contactDetails?.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href="#">
                      <Image
                        src="/assets/team-details/location.png"
                        alt="location"
                        width={36}
                        height={36}
                      />
                    </a>
                    <span>{teamMember?.contactDetails?.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[--sky-blue]">
        <div className="relative container mx-auto lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px] --font-plus-jakarta-sans">
          <div className="p-6 bg-[--sky-blue] rounded-lg space-y-8">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-[24px] text-[#000] font-bold mb-4">
                Personal Information
              </h2>
              <p className="text-[--black] leading-relaxed">
                {teamMember?.personalInformation}
              </p>
            </div>

            {/* Personal Skills Section */}
            <div className="p-6 bg-white">
              <h2 className="text-lg text-[#000] font-bold mb-4">
                Personal Skills
              </h2>
              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {teamMember?.skills?.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">
                        {skill?.name}
                      </span>
                      <span className="text-sm font-semibold text-[--primary]">
                        {skill?.percentage}%
                      </span>
                    </div>
                    <div className="relative w-full h-4 mt-2 bg-blue-100">
                      <div
                        className="absolute top-0 left-0 h-4 bg-[--primary] transition-all duration-700 ease-in-out"
                        style={{ width: `${skill?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
