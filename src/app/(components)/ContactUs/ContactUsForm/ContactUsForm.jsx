import Image from "next/image";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-8">
      {/* Left Section: Image and Text */}
      <div className="flex flex-col items-center gap-7 md:gap-[60px] lg:items-start w-full lg:w-1/2">
        {/* Placeholder for Image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/contact-info/customer.png"
            alt="customer service"
            className="object-cover"
            width={515}
            height={305}
          />
        </div>
        {/* Placeholder for Video Play Button */}
        <div className="p-4 shadow-custom bg-white w-full rounded-lg">
          <button className="flex items-center justify-center bg-[#C4C4C4] rounded-lg shadow-custom w-full h-[300px]">
            <Image
              src="/assets/contact-info/video_icon.png"
              alt="customer service"
              className="object-cover"
              width={70}
              height={70}
            />
          </button>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full lg:w-1/2 rounded-lg">
        <h2 className="text-2xl md:text-[50px] md:max-w-[590px] leading-[1.3] font-bold text-gray-900 mb-9">
          We'll Respond To You In An Hour.
        </h2>

        <p className="text-gray-600 mb-9">
          Neque porro est qui dolorem ipsum quia quaed inventore veritatis et.
        </p>
        <form className="space-y-6 md:space-y-12 bg-white shadow-custom px-7 py-9 rounded-lg">
          <h3 className="text-[#FF6700] font-bold">Get In touch</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Write Message . . ."
            rows="4"
            className="w-full px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0">
            <a
              href="#"
              className="bg-[#ECF8FF] text-[#f26b01] mr-4 px-6 py-3 rounded-full text-sm sm:text-lg font-bold"
            >
              GET STARTED
            </a>
            <Image
              src="/assets/digital-agency/up-right.png"
              alt="arrow"
              width={52}
              height={52}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
