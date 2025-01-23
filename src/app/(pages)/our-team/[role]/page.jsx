"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TeamHero from "@/app/(components)/About/HeroSection";

// data
const teamMembers = [
  {
    name: "Dan k jatau Ph.D.",
    desgination: "CTO & Founder",
    image: "/assets/about/Circle-lg.png",
    role: "founder",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
  {
    name: "Ismail Saleem",
    desgination: "CMO",
    image: "/assets/about/Circle-lg.png",
    role: "cmo",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
  {
    name: "ashikur Rahman",
    desgination: "Head of Engineering",
    image: "/assets/about/Circle-lg.png",
    role: "engineering",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
  {
    name: "Jermaine Jatau",
    desgination: "Software Engineer",
    image: "/assets/about/Circle-lg.png",
    role: "engineer",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
  {
    name: "Dan K Jatau",
    desgination: "Chief Solutions Architect",
    image: "/assets/about/Circle-lg.png",
    role: "chief-solutions-architect",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
  {
    name: "Robert Hartburn",
    desgination: "Product Design",
    image: "/assets/about/Circle-lg.png",
    role: "product-design",
    socials: [
      {
        icon: "/assets/about/facebook.png",
        hoverIcon: "/assets/about/facebook-orange.png",
        width: 10.74,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/instagram.png",
        hoverIcon: "/assets/about/instagram-orange.png",
        width: 20,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/twitter.png",
        hoverIcon: "/assets/about/twitter-orange.png",
        width: 24.63,
        height: 20,
        link: "#",
      },
      {
        icon: "/assets/about/pinterest.png",
        hoverIcon: "/assets/about/pinterest-orange.png",
        width: 15.38,
        height: 20,
        link: "#",
      },
    ],
  },
];

export default function TeamDetail() {
  const params = useParams();
  const router = useRouter();
  const { role } = params;

  const team = teamMembers.find((item) => item.role === role);

  if (!team) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#000] mt-[90px]">
          Team Detial Not Found
        </h1>
      </div>
    );
  }
  const [activePortfolio, setActivePortfolio] = useState(role);

  useEffect(() => {
    setActivePortfolio(role);
  }, [role]);

  const handleClick = (item) => {
    setActivePortfolio(item.id);
    router.push(`/portfolio/${item.id}`);
  };

  const skills = [
    { name: "Skill 1", percentage: 95 },
    { name: "Skill 2", percentage: 45 },
    { name: "Skill 3", percentage: 55 },
    { name: "Skill 4", percentage: 25 },
  ];

  return (
    <>
      <TeamHero />

      <div className="relative container mx-auto bg-white lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px]">
        <div className="w-full text-[var(--black)] p-4 md:p-8 relative border border-[var(--light-sky-blue)]">
          {/* Profile Section */}
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:space-x-8">
            {/* Image Placeholder */}
            <div className="w-full lg:w-[391px] h-[300px] lg:h-[474px] bg-[#C4C4C4]"></div>

            {/* Content Section */}
            <div className="flex-1">
              {/* Name and Role */}
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--black)]">
                    {team.name}
                  </h2>
                  <p className="text-sm text-[var(--black)]">
                    {team.desgination}
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
              <p className="text-sm leading-relaxed">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                interdum libero vitae pretium aliquam donec nibh purus laoreet
                in ullamcorper vel malesuada sit amet enim.
              </p>
              <p className="text-sm leading-relaxed mt-9">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                interdum libero vitae pretium aliquam donec nibh purus laoreet
                in ullamcorper vel malesuada sit amet enim.
              </p>

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
                    <span>+44 7540 460322</span>
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
                    <span>Dan.Jatau@Webxcell.com</span>
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
                    <span>Nottingham, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--light-sky-blue)]">
        <div className="relative container mx-auto lg:py-12 md:px-14 2xl-custom:px-48 mb-[100px] font-plus-jakarta">
          <div className="p-6 bg-[var(--light-sky-blue)] rounded-lg space-y-8">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-[24px] font-bold mb-4">
                Personal Information
              </h2>
              <p className="text-[var(--black)] leading-relaxed">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                interdum libero vitae pretium aliquam donec nibh purus laoreet
                in ullamcorper vel malesuada sit amet enim. Nullam interdum
                libero vitae pretium aliquam donec nibh purus laoreet in
                ullamcorper vel malesuada sit amet enim. Nullam interdum libero
                vitae pretium aliquam donec nibh purus laoreet in ullamcorper
                vel malesuada sit amet enim.
              </p>
              <p className="text-[var(--black)] leading-relaxed mt-4">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                interdum libero vitae pretium aliquam donec nibh purus laoreet
                in ullamcorper vel malesuada sit amet enim. Nullam interdum
                libero vitae pretium aliquam donec nibh purus laoreet in
                ullamcorper vel malesuada sit amet enim. Nullam interdum libero
                vitae pretium aliquam donec nibh purus laoreet in ullamcorper
                vel malesuada sit amet enim.
              </p>
            </div>

            {/* Personal Skills Section */}
            <div className="p-6 bg-white">
              <h2 className="text-lg font-bold mb-4">Personal Skills</h2>
              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-orange-500">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="relative w-full h-4 mt-2 bg-blue-100">
                      <div
                        className="absolute top-0 left-0 h-4 bg-orange-500 transition-all duration-700 ease-in-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[var(--black)] leading-relaxed mt-6">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim. Nullam
                interdum libero vitae pretium aliquam donec nibh purus laoreet
                in ullamcorper vel malesuada sit amet enim. Nullam interdum
                libero vitae pretium aliquam donec nibh purus laoreet in
                ullamcorper vel malesuada sit amet enim. Nullam interdum libero
                vitae pretium aliquam donec nibh purus laoreet in ullamcorper
                vel malesuada sit amet enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
