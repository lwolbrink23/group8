import React, { useState } from "react";
import "../Styles/maincarousel.css";

const MainCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="photo-carousel">
      <button onClick={prevSlide} className="leftbutt">
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide} className="rightbutt">
        &gt;
      </button>
    </div>
  );
};

export default MainCarousel;
