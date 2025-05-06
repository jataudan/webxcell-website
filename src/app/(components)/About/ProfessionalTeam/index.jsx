"use client";
import { getTeams } from "@/lib/queries/getTeams";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfessionalTeam() {
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
    <div className="relative bg-white py-20 mb-[150px]">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-12">
          <div className="text-center lg:text-left">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D77C42] to-[#323332] font-montserrat">
              Our Digital Expert Team
            </span>

            <h2 className="text-[28px] sm:text-[36px] md:text-[46px] text-[#101010] font-montserrat font-semibold mt-2">
              Meet Our Professional <br /> Team Members
            </h2>
          </div>

          <div className="mt-4 sm:mt-2">
            <a href="/our-team">
              <button className="rounded-full bg-gradient-to-r from-[#BF20FC] to-[#077EEC] p-[2px]">
                <div className="flex items-center justify-center px-6 py-2 bg-white rounded-full font-bold text-[#FF6700] uppercase text-sm">
                  View all Members
                </div>
              </button>{" "}
            </a>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
          {teamMember?.slice(0, 3)?.map((member, index) => (
            <div
              key={index}
              className="relative bg-white cursor-pointer border border-[#EAF3F8] rounded-lg text-center p-10 justify-between w-[370px] h-[510px]"
              onClick={() => router.push(`/our-team/${member?.slug}`)}
            >
              {/* Member Image */}
              <div className="w-[294px] h-[300px] rounded-full  mx-auto overflow-hidden mb-4">
                <Image
                  src={
                    member?.teamImage294x294
                      ? member?.teamImage294x294?.url
                      : "https://placehold.co/600x400.png?text=placeholder"
                  }
                  alt={member?.name || "placeholder"}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <h3 className="font-semibold text-[22px] text-[#101010] font-montserrat">
                {member?.name}
              </h3>
              <p className="text-base text-[#101010] font-montserrat mb-4">
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
