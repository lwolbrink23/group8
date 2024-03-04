import React from "react";
import "../Styles/WebGallery.css";

const WebGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={` ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default WebGallery;
