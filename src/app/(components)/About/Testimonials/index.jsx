"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
  // Testimonial data array containing client information
  const testimonials = [
    {
      name: "Kristin Watson",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Walk",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Mike",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Jason",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
    {
      name: "Kristin Watson",
      role: "Web Designer",
      review:
        "when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into",
    },
  ];

  // Carousel configuration settings
  const settings = {
    dots: false, // Hide navigation dots
    arrows: false, // Hide navigation arrows
    autoplay: true, // Enable auto-play
    speed: 4000, // Transition animation speed (ms)
    autoplaySpeed: 2000, // Time between slide transitions (ms)
    cssEase: "linear", // Animation timing function
    slidesToShow: 3, // Number of slides to show simultaneously
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      // Responsive breakpoint configurations
      {
        breakpoint: 1380, // Screen width breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 640, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <section
      className="relative w-full h-auto bg-cover bg-center flex flex-row lg:flex-row justify-between items-center px-6 md:px-10 lg:px-20 gap-12 mb-4"
      style={{
        backgroundImage: `url(/assets/about/testimonial-bg.png)`,
      }}
    >
      {/* Left Section - Decorative Image (hidden on mobile) */}
      <div className="relative max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 justify-center hidden md:flex">
        <Image
          src="/assets/about/african-woman.png"
          alt="Happy client"
          width={528}
          height={686}
          priority
        />
      </div>

      {/* Right Section - Content and Testimonials */}
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
        {/* Gradient Subheading */}
        <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
          Testimonials
        </span>

        {/* Main Heading */}
        <div className="text-[46px] font-poppins mb-8">
          <span className="text-[#000]">What</span>{" "}
          <span className="text-[#000] font-extrabold">Happy Clients Say</span>{" "}
          <span className="highlight orange font-extrabold">About Us</span>
        </div>

        {/* Testimonials Carousel */}
        <Slider {...settings} className="h-[357px] rounded-xl space-x-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg px-6 md:py-16 text-center border border-gray-200 w-full md:w-[410px] h-[327px]"
              style={{ margin: "0 10px" }}
            >
              {/* Decorative Quotation Mark */}
              <div className="absolute top-4 right-4">
                <Image
                  src="/assets/about/comma.png"
                  alt="Quotation mark"
                  width={45}
                  height={45}
                />
              </div>

              {/* Star Rating Display */}
              <div className="text-[#FF6700] text-xl text-left mb-4">★★★★★</div>

              {/* Testimonial Text */}
              <p className="text-[14] md:text-[16px] text-left mb-4 text-[#101010] italic font-plus-jakarta">
                {testimonial.review}
              </p>

              {/* Client Profile Section */}
              <div className="flex flex-row items-center text-left mt-4 gap-2">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/assets/about/testimonial-circle.png"
                    alt="Client profile"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <span className="text-gray-500 text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
