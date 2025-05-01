"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative w-full h-[650px] bg-cover bg-center flex flex-row lg:flex-row justify-between items-center px-6 md:px-10 lg:px-20 gap-12 mb-60 overflow-hidden"
      style={{
        backgroundImage: `url(/assets/about/testimonial-bg.png)`,
      }}
    >
      {/* Left Side - Image */}
      <div className="relative max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 justify-center hidden md:flex">
        <Image
          src={
            data?.sideImage528x686
              ? data?.sideImage528x686?.url
              : "https://placehold.co/600x400.png?text=placeholder"
          }
          alt="happy Image"
          width={528}
          height={686}
        />
      </div>

      {/* Right Side - Content */}
      <div className="relative w-full lg:w-[60%] mt-8 lg:mt-0 text-center lg:text-left">
        <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] --font-plus-jakarta-sans">
          Testimonials
        </span>

        {/* <div className="text-[46px] --plus-jakarta mb-8">
          <span className="text-[#000] font-extrabold">{data?.h2}</span>{" "}
        </div> */}

        <div className="text-2xl md:text-[46px] plus-jakarta mb-8">
          <span className="text-[#000]">{data?.heading || "What"}</span>{" "}
          <span className="text-[#000] font-extrabold">
            {data?.boldHeading || "Happy Clients Say"}
          </span>{" "}
          <span className="highlight orange font-extrabold">
            {data?.highlighted || "About Us"}
          </span>
        </div>

        {/* Testimonials Cards */}

        <Slider {...settings} className="h-[357px] rounded-xl space-x-2">
          {data?.card?.length > 0 &&
            data?.card?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="relative bg-white shadow-lg rounded-lg px-6 md:py-6 text-center border border-gray-200 w-full md:w-[700px] h-[340px]"
                style={{ margin: "0 10px" }}
              >
                {/* Inverted Comma Image */}
                <div className="absolute top-4 right-4">
                  <Image
                    src={
                      testimonial?.quoteImage45x45
                        ? testimonial?.quoteImage45x45?.url
                        : "https://placehold.co/600x400.png?text=placeholder"
                    }
                    alt="comma"
                    width={44}
                    height={44}
                  />
                </div>

                {/* Review Text */}
                <div className="text-[#FF6700] text-xl text-left mb-2 mt-4">
                  ★★★★★
                </div>
                <p className="text-[14] md:text-[16px] text-left mb-4 text-[#101010] italic --font-plus-jakarta-sans">
                  {testimonial?.comments}
                </p>

                {/* Client Image, Name, and Role */}
                <div className="flex flex-row items-center text-left mt-4 gap-2">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={
                        testimonial?.clientImage60x60
                          ? testimonial?.clientImage60x60?.url
                          : "/assets/user.png"
                      }
                      alt="client"
                      width={44}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-gray-800">
                      {testimonial?.name}
                    </h4>
                    <span className="text-gray-500 text-sm">
                      {testimonial?.role}
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
