import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  return (
    /**
     * Main container with black background
     * Responsive height: auto on mobile, fixed on desktop
     * Bottom margin creates space for subsequent content
     */
    <div className="bg-black w-full h-auto md:h-[154px] relative overflow-hidden mb-[173px]">
      {/* Top decorative element */}
      <div className="absolute">
        <Image
          src="/assets/contact-info/effect.png"
          alt="Decorative circle element"
          width={198}
          height={68}
        />
      </div>

      {/* Content container with responsive padding */}
      <div className="container mx-auto">
        {/**
         * Flex container for contact items
         * Column layout on mobile, row on desktop
         * Even spacing around items on desktop
         */}
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-10">
          {/* Address section with right border on desktop */}
          <div className="flex flex-col items-center md:items-start md:border-r-[1px] md:px-4 mb-4 md:mb-0">
            <Image
              src="/assets/contact-info/location.png"
              alt="Location pin icon"
              width={46}
              height={46}
            />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              Webxcell, Courtyard Ctr, Southwold Dr, Nottingham
            </p>
          </div>

          {/* Phone section with right border on desktop */}
          <div className="flex flex-col items-center md:items-start md:border-r-[1px] md:px-4 mb-4 md:mb-0">
            <Image
              src="/assets/contact-info/phone.png"
              alt="Phone handset icon"
              width={46}
              height={46}
            />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              44 (0) 800 195 7512
            </p>
          </div>

          {/* Email section without border */}
          <div className="flex flex-col items-center md:items-start md:px-4">
            <Image
              src="/assets/contact-info/message.png"
              alt="Email envelope icon"
              width={46}
              height={46}
            />
            <p className="text-[#fff] text-center md:text-left md:text-[20px] contact-info-title md:pr-16">
              team@webxcell.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element (rotated version) */}
      <div className="absolute right-0 bottom-0">
        <Image
          src="/assets/contact-info/effect.png"
          className="rotate-180"
          alt="Flipped decorative circle element"
          width={198}
          height={68}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
