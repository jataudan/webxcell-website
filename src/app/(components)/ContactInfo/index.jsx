import Image from 'next/image';
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-black w-full h-auto md:h-[154px] relative overflow-hidden">
      <div className="absolute">
        <Image src="/assets/contact-info/effect.png" alt="circle" width={198} height={68} />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-10">
          <div className="flex flex-col items-center md:items-start md:border-r-[1px] md:px-4 mb-4 md:mb-0">
            <Image src="/assets/contact-info/location.png" alt="location" width={46} height={46} />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              Webxcell, Courtyard Ctr, Southwold Dr, Nottingham
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start md:border-r-[1px] md:px-4 mb-4 md:mb-0">
            <Image src="/assets/contact-info/phone.png" alt="phone" width={46} height={46} />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              44 (0) 800 195 7512
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start md:px-4">
            <Image src="/assets/contact-info/message.png" alt="message" width={46} height={46} />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              team@webxcell.com
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <Image src="/assets/contact-info/effect.png" className="rotate-180" alt="circle" width={198} height={68} />
      </div>
    </div>
  );
};

export default ContactInfo;
