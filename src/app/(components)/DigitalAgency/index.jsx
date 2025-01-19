import React from 'react';
import Image from 'next/image';

const DigitalAgency = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Left Decorative Image */}
      <div className="absolute bottom-[52px] left-[-200px] lg:left-[-337px] hidden sm:block">
        <Image src="/assets/digital-agency/left-vector.png" alt="Spiral Image" width={522} height={587} />
      </div>

      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-10">
        {/* Right Side - Content */}
        <div className="relative lg:w-1/3 w-full px-4 text-center lg:text-left">
          <span className="title font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            your inventory is time
          </span>

          <div className="headline mt-4">
            <span className="text-[#000]">Digital Agency</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B01] to-[#F29F5C]">
              Excellence
            </span>{' '}
            <span className="text-[#000]">Services</span>
          </div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed">
            And you spend over half of it on non-core functions like Following up for Payments or Writing Proposals from
            scratch or sending Manual Updates to your Clients.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/digital-agency/digital-transformation.png"
                alt="Digital Transformation"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#17012c]">94%</h4>
                <p className="text-[#000] uppercase text-sm">Digital Transformation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/digital-agency/marketing-stra.png" alt="Marketing Strategy" width={60} height={60} />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#17012c]">65%</h4>
                <p className="text-[#000] uppercase text-sm">Marketing Strategy</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0">
            <a href="#" className="bg-[#fde9d9] text-[#f26b01] px-6 py-3 rounded-full text-sm sm:text-lg font-bold">
              GET STARTED
            </a>
            <Image src="/assets/digital-agency/up-right.png" alt="arrow" width={52} height={52} />
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-1/3 max-w-sm lg:max-w-none mx-auto md:mx-0">
          <Image
            src="/assets/digital-agency/marketing.png"
            alt="Experience Image"
            width={570}
            height={564}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Right Decorative Image */}
      <div className="absolute right-[-200px] lg:right-[-350px] bottom-[0px] hidden sm:block">
        <Image src="/assets/digital-agency/right-vector.png" alt="Heavy Waves Image" width={522} height={587} />
      </div>
    </div>
  );
};

export default DigitalAgency;
