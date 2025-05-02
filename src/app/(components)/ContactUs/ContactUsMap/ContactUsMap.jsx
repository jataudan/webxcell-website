import Image from "next/image";
import React from "react";

const MapWithInfo = ({ contact }) => {
  const contactInfo = [
    {
      icon: "/assets/contact-info/white-location.png",
      text: contact?.location,
      alt: "location",
    },
    {
      icon: "/assets/contact-info/white-phone.png",
      text: contact?.phoneNumber,
      alt: "phone",
    },
    {
      icon: "/assets/contact-info/white-message.png",
      text: contact?.email,
      alt: "message",
    },
  ];

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-300">
      {/* Full-Width Map */}
      <iframe
        src="https://www.google.com/maps?q=12+Southwold+Dr,+Nottingham+NG8+1PA,+UK&output=embed&z=17"
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>

      {/* Information Box with Triangular Shape */}
      <div className="hidden md:block absolute top-10 right-10 bg-[#00BFFF] text-white p-6 w-[300px] shadow-lg font-montserrat">
        {/* Triangular Shape */}
        {/* <div className="absolute -top-[10px] left-[-20px] rotate-[135.9deg] w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[18px] border-b-[#00BFFF]" /> */}
        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
        <hr className="bg-white opacity-15 h-[1px] border-none mb-4" />
        <ul className="space-y-3 list-none p-0">
          {contactInfo.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <div className="flex items-center">
                  <Image
                    src={item.icon}
                    width={38}
                    height={38}
                    alt={item.alt || "icon"}
                  />
                  <span className="ml-3">{item.text}</span>
                </div>
              </li>
              {index < contactInfo.length - 1 && (
                <hr className="bg-white opacity-15 h-[1px] border-none" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapWithInfo;
