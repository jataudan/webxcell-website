"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTeams } from "@/lib/queries/getTeams";

export default function OurTeamSection() {
  const router = useRouter();

  const [teamMember, setTeamMember] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getTeams();
        if (response) {
          setIsLoading(false);
          setTeamMember(response?.data);
        }
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
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
    <div className="relative bg-white py-20 mb-[130px]">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
          {teamMember?.map((member, index) => (
            <div
              key={index}
              className="relative bg-white cursor-pointer border border-[#EAF3F8] rounded-lg text-center p-10 justify-between w-[370px] h-[510px]"
              onClick={() => router.push(`/our-team/${member?.slug}`)}
            >
              {/* Member Image */}
              <div className=" bg-[gray] w-[294px] h-[300px] rounded-full  mx-auto overflow-hidden mb-4">
                <Image
                  src={
                    member?.image
                      ? member?.image?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt={member?.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <h3 className="font-semibold text-[22px] text-[#101010] --font-plus-jakarta-sans">
                {member?.name}
              </h3>
              <p className="text-base text-[#101010] --font-plus-jakarta-sans mb-4">
                {member?.designation}
              </p>
              <hr className="mb-4 w-[270px] text-[#EAF3F8] px-4" />
              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {member?.socials?.length > 0 &&
                  member?.socials?.map((social, socialIndex) => {
                    return (
                      <a
                        key={socialIndex}
                        href={social?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex justify-center items-center transition relative"
                      >
                        <Image
                          src={
                            social?.icon
                              ? social?.icon?.url
                              : "https://placehold.co/600x400.png?text=placeholder"
                          }
                          alt="social icon"
                          width={social?.width}
                          height={social?.height}
                          className="absolute transition-opacity duration-300 opacity-100 hover:opacity-0"
                        />
                        <Image
                          src={
                            social?.hoverIcon
                              ? social?.hoverIcon?.url
                              : "https://placehold.co/600x400.png?text=placeholder"
                          }
                          alt="hover icon"
                          width={social?.width}
                          height={social?.height}
                          className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
                        />
                      </a>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
