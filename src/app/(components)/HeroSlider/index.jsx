import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/assets/Slider/slide-1.png";
import image2 from "../../../../public/assets/Slider/slide-2.png";
import image3 from "../../../../public/assets/Slider/slide-3.png";

const images = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

const HeroSlider = ({ sliderImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative h-[100vh]"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={
            sliderImages?.sliderImages1920x1000
              ? sliderImages?.sliderImages1920x1000[currentIndex].url
              : image1
          }
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="absolute flex justify-center mt-4 z-40 bottom-0 left-1/2 transform -translate-x-1/2 mb-[28px]">
        {sliderImages?.sliderImages1920x1000?.map((_, index) => (
          <div
            key={index}
            className={`mx-1 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "h-3 w-10 rounded-xl bg-[var(--primary)]"
                : "h-3 w-3 rounded-full " +
                  (index === 0 ? "bg-gray-400" : "bg-gray-300")
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
