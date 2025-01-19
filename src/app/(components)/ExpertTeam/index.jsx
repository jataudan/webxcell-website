import React from 'react';
import Image from 'next/image';
import TestimonialSection from './TestimonialSection';

const ExpertTeam = () => {
  const teamMembers = [
    { name: 'Dan, J', role: 'Founder' },
    { name: 'Ismail, S', role: 'Marketing' },
    { name: 'Rabeel, R', role: 'Marketing' },
    { name: 'Ashikur, R', role: 'Marketing' },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Left Decorative Image */}
      <div className="absolute bottom-[190px] left-[-230px] hidden lg:block">
        <Image src="/assets/expert-team/left-side.png" alt="Spiral Image" width={522} height={587} />
      </div>

      {/* Title Section */}
      <div className="text-center mt-8 sm:mt-16 text-[14px] sm:text-[16px]">
        <span className="case-studies-sub-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          Our Expert Team
        </span>
      </div>
      <div className="text-center mt-4 sm:mt-5">
        <h1 className="text-3xl sm:text-5xl case-studies-title">
          <span className="text-black">Our Expert</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F29F5C]">Team</span>
        </h1>
      </div>

      {/* Team Members Section */}
      <section className="relative container mx-auto flex flex-col items-center justify-center py-8 sm:py-10 lg:py-20 gap-16 sm:gap-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-[250px] sm:w-[270px] h-[290px] sm:h-[316px] flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/assets/expert-team/Polygon.png')",
              }}>
              <span className="text-3xl sm:text-4xl font-bold text-orange-500">X</span>
              <div className="flex gap-2 mt-3 sm:mt-5">
                <a
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 border border-[#fff] rounded-full flex items-center justify-center">
                  <Image src="/assets/hero-section/fb.png" alt="facebook" width={7} height={14} />
                </a>
                <a
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 translate-y-4 sm:translate-y-5 border border-[#fff] bg-[#fff] rounded-full flex items-center justify-center">
                  <Image src="/assets/expert-team/x.png" alt="twitter" width={14} height={14} />
                </a>
                <a
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 border border-[#fff] rounded-full flex items-center justify-center">
                  <Image src="/assets/expert-team/linkedin.png" alt="twitter" width={14} height={14} />
                </a>
              </div>
              <p className="mt-5 sm:mt-7 text-[16px] sm:text-[20px] text-white">{member.name}</p>
              <p className="text-[16px] sm:text-[20px] text-white">{member.role}</p>
              <div className="absolute bottom-[-12px] right-[47px] hidden md:block">
                <Image src="/assets/expert-team/Vector-25.png" alt="vector" width={180} height={50} />
              </div>
            </div>
          ))}
        </div>
        <TestimonialSection />
      </section>

      {/* Right Decorative Image */}
      <div className="absolute right-[-250px] bottom-[590px] hidden lg:block">
        <Image src="/assets/expert-team/left-side.png" alt="Heavy Waves Image" width={522} height={587} />
      </div>
    </div>
  );
};

export default ExpertTeam;
