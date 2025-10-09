import React, { useState } from "react";
import { icons, slider } from "../assets/assets";

const Slider = () => {
  const slides = Object.values(slider);
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };



  return (
    <div className="h-screen max-h-[800px] relative bg-green-400">

      <div className="hidden lg:flex justify-between w-full f-full z-4 px-10 absolute top-[40vh] z-20">
        <img onClick={handlePrev} className="rotate-180" src={icons.iconNext} alt="" />
        <img onClick={handleNext} src={icons.iconNext} alt="" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
        {/* <div className="absolute inset-0 bg-dark-overlay mix-blend-multiply"></div> */}
        
        <img
          src={slides[currentIndex]}
          alt="Elegant model wearing new season clothing"
          className="w-full h-full object-cover object-center transition-opacity duration-500"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-start text-gray-800 p-6 sm:p-10 lg:p-[160px]">
                   
        <div className="max-w-xl text-left">
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-sans font-medium mb-2 uppercase tracking-widest">
            Women New-Season
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
            NEW SEASON
          </h1>
          
          {/* Button */}
          <button 
            className="px-8 py-3 bg-primary text-white text-sm font-semibold uppercase 
                       rounded-full shadow-lg hover:bg-indigo-600 transition-all 
                       duration-300 transform hover:scale-105 tracking-wider"
          >
            SHOP NOW
          </button>
        </div>
      </div>

    </div>
  );
};

export default Slider;