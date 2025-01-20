"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Landing1 from "../img/logistics.jpg";
import Landing2 from "../img/istcok2.jpg";
import Landing3 from "../img/istock4.jpg";
import Landing4 from "../img/istock3.jpg";
import Landing5 from "../img/istock5.jpg";

const SlideshowLandingPage: React.FC = () => {
  const images: StaticImageData[] = [
    Landing1,
    Landing2,
    Landing3,
    Landing4,
    Landing5,
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mt-11 w-full h-72 md:h-[450px] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => {
        const position =
          (index - currentIndex + images.length) % images.length;
        if (position > 2) return null;

        const isActive = position === 1;
        const scale = isActive
          ? "scale-110 opacity-100"
          : "scale-90 opacity-70";
        const zIndex = isActive ? "z-10" : "z-0";
        const shadow = isActive
          ? "shadow-xl shadow-white/50"
          : "shadow-md shadow-gray-500/30";

        return (
          <Image
            key={index}
            src={image}
            alt={`Slideshow ${index + 1}`}
            className={`absolute transition-all duration-1000 ${scale} ${zIndex} ${shadow} rounded-md`}
            style={{
              width: isActive ? "70%" : "50%",
              height: isActive ? "80%" : "60%",
              transform: `translateX(${(position - 1) * 100}%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SlideshowLandingPage;
