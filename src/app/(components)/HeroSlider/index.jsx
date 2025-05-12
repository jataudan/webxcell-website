import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/assets/Slider/slide-1.png";
import image2 from "../../../../public/assets/Slider/slide-2.png";
import image3 from "../../../../public/assets/Slider/slide-3.png";

const fallbackImages = [image1, image2, image3];

const HeroSlider = ({ sliderImages = [], onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imagesToUse =
    sliderImages.length > 0
      ? sliderImages.map((item) => item.sliderImages1920x1000?.url)
      : fallbackImages;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % imagesToUse.length;
      if (onSlideChange) {
        onSlideChange(newIndex);
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative w-full">
      <div
        className="relative h-[100vh]"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {typeof imagesToUse[currentIndex] === "string" ? (
          <Image
            src={imagesToUse[currentIndex]}
            alt={`Slider Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 ease-in-out cursor-pointer"
          />
        ) : (
          <Image
            src={imagesToUse[currentIndex]}
            alt={`Fallback Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 ease-in-out cursor-pointer"
          />
        )}
      </div>

      <div className="absolute flex justify-center z-40 bottom-0 left-1/2 transform -translate-x-1/2 mb-[28px]">
        {imagesToUse?.map((_, index) => (
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
