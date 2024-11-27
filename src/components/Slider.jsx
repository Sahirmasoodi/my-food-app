// src/components/Slider.js
import React, { useState } from 'react';

const Slider = () => {
  // Sample food images
  const images = [
    'https://t4.ftcdn.net/jpg/01/68/21/01/360_F_168210118_HWgLB3ZCJS9w9qjdpzy37itHZcopgyon.jpg',
    'https://c8.alamy.com/comp/2B1HFW7/assorted-chinese-food-on-dark-background-asian-food-concept-panorama-banner-2B1HFW7.jpg',
    'https://www.shutterstock.com/image-photo/homemade-fresh-salmon-starter-vegetables-600nw-1907910403.jpg',
    'https://www.shutterstock.com/image-photo/large-table-assorted-take-out-260nw-2485955105.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto shadow-lg mt-5">
      {/* Slider Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Food item ${currentIndex + 1}`}
          className="w-full h-48 md:h-60 transition-all duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &#9654;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
