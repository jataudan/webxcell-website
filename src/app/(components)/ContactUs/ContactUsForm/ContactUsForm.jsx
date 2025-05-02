"use client";
import { createContactUsForm } from "@/lib/queries/createContactUsForm";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ContactUsForm = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      const response = await createContactUsForm(formData);
      if (response) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    };
    fetchData();
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-8 font-montserrat">
      {/* Left Section: Image and Text */}
      <div className="flex flex-col items-center gap-7 md:gap-[60px] lg:items-start w-full lg:w-1/2">
        {/* Placeholder for Image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={
              contact?.image453x349
                ? contact?.image453x349?.url
                : "https://placehold.co/600x400.png?text=placeholder"
            }
            alt="customer service"
            className="object-cover"
            width={515}
            height={305}
          />
        </div>

        {/* Placeholder for Video Play Button */}

        <div className="p-4 shadow-custom bg-white w-full rounded-lg relative">
          {/* Gray Background (Hide when video plays) */}
          {!isPlaying && (
            <div className="bg-[#C4C4C4] w-full md:w-[690px] h-[332px] absolute z-10 inset-0 rounded-3xl hidden md:blcok"></div>
          )}

          {/* Play Icon (Hide when video plays) */}
          {!isPlaying && (
            <Image
              src="/assets/contact-info/video-icon.svg"
              alt="Play Video"
              width={70}
              height={70}
              className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] cursor-pointer"
              onClick={handlePlay} // Click to play video
            />
          )}

          {/* Video Container */}
          <button className="flex items-center justify-center bg-[#C4C4C4] rounded-lg shadow-custom w-full h-[300px] overflow-hidden">
            {contact?.video && (
              <video
                ref={videoRef} // Reference for controlling the video
                src={contact?.video && contact?.video?.url}
                className="object-cover w-full h-full"
                controls
                playsInline
                onPlay={() => setIsPlaying(true)} // Hide elements when playing
              />
            )}
          </button>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full lg:w-1/2 rounded-lg">
        <h2 className="text-2xl md:text-[33px] md:max-w-[590px] leading-[1.3] font-bold text-gray-900 mb-9">
          {contact?.title}{" "}
        </h2>

        <p className="text-gray-600 mb-9">{contact?.description}</p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-12 bg-white shadow-custom px-7 py-9 rounded-lg"
        >
          <h3 className="text-[#FF6700] font-bold">Get In touch</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData?.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full text-[#000] px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-[--primary]"
            />
            <input
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full text-[#000] px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-[--primary]"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleChange}
            placeholder="Write Message . . ."
            rows="4"
            className="w-full text-[#000] px-4 py-3 bg-[#ECF8FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-[--primary]"
          ></textarea>
          {/* Button */}
          <div className="mt-8 flex sm:flex-row justify-center lg:justify-start items-center">
            <button
              type="submit"
              className="bg-[#ECF8FF] text-[--primary] mr-4 px-6 py-3 rounded-full text-sm sm:text-lg font-bold"
            >
              GET STARTED
            </button>
            <Image
              src="/assets/digital-agency/up-right.png"
              alt="arrow"
              width={52}
              height={52}
              className="w-[42px] h-[42px] md:w-[52px] md:h-[52px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
