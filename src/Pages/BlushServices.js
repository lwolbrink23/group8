import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import blowDry from "../assets/images/Blowdry.png";
import hairDye from "../assets/images/Hairdye.png";
import "../Styles/chicservices.css";
import "../App.css";
import { useState } from "react";

// updating services on screen
const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("makeup"); // Updated category name

  // make categories
  const categories = {
    makeup: [
      "Classic Makeup Application\n$40\nA timeless and elegant makeup look suitable for any occasion. Includes foundation, eyeshadow, eyeliner, mascara, blush, and lipstick.",
      "Glamorous Evening Makeup\n$75\nPerfect for special events or a night out. This service includes a more dramatic eye look, contouring, false eyelashes, and a bold lip color.",
      "Natural Makeup Look\n$45\nEnhance your features with a subtle and natural makeup application. Ideal for a fresh and understated appearance.",
      "Bridal Makeup Package\n$150\nA comprehensive service tailored for brides on their special day. Includes a trial session, consultation, and the final bridal makeup application with long-lasting products for a flawless look in photos.",
      "Editorial/Fashion Makeup\n$70\nBold and creative makeup for photoshoots, runway shows, or fashion events. This service includes high-impact looks that stand out in a professional setting.",
      "Special Effects Makeup\n$80\nTransform your look with special effects makeup for costume parties, Halloween, or the complexity of the design.",
      "Makeup Lesson\n$60\nA one-on-one session to learn about makeup techniques, product application, and personalized tips. Perfect for those wanting to improve their own makeup skills.",
      "Group Makeup Session\n$150\nIdeal for bridal parties, prom groups, or any special occasion. Create a fun and memorable experience for you and your friends, with group discounts available.",
      "Men's Grooming\n$40\nTailored makeup services for men, including concealing blemishes, evening skin tone, and enhancing facial features for photoshoots or events.",
    ],
  };


  const clickCategory = (category) => {
    setCurrentCategory(category);
  };

  const addToSelectedServices = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const removeFromSelectedServices = (service) => {
    const updatedServices = selectedServices.filter((s) => s !== service);
    setSelectedServices(updatedServices);
  };

  const navigate = useNavigate();

  const calculateTotalCost = () => {
    return selectedServices.reduce((total, service) => {
      const pricePart = service.split("\n").pop(); // Extracts the last line (e.g., "$75")
      const price = parseInt(pricePart.replace(/[^0-9]/g, "")); // Extracts numerical value
      return total + price;
    }, 0);
  };

  const navigateToTime = () => {
    const totalCost = calculateTotalCost();
    navigate("/selecttime", {
      state: { service: selectedServices, totalCost: totalCost },
    });
  };

  return (
    <div>
      <div className="titles-containers trans-white">
        <BackButton />
        <h1>Brush & Blush Beauty </h1>
      </div>
      <div className="image-div">
        <img
          src={blowDry}
          className="focus-image"
          alt="woman getting her hair blow dried by a hair dresser"
        />
        <div className="side-images-container">
          <img
            src={hairDye}
            className="side-images"
            alt="woman getting her hair dyed by a hair dresser"
          />
        </div>
      </div>
      <div className="select-serv">
        <h3>Select Services</h3>
      </div>
      <div className="overview-container">
        <div className="tabs-cat-list">
          <div className="tabs">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => clickCategory(category)}
                className={currentCategory === category ? "active" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div id={currentCategory} className="category-list">
            {categories[currentCategory].map((service, index) => (
              <div key={index} className={`item-${index + 1}`}>
                <p>{service}</p>
                {selectedServices.includes(service) ? (
                  <div className="button-container">
                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => removeFromSelectedServices(service)}
                    >
                      <img
                        src={minusICON}
                        className="plus-minus"
                        alt="minus sign"
                      />
                    </button>
                    <img
                      src={purpCheck}
                      className="check-mark"
                      alt="check mark"
                    />
                  </div>
                ) : (
                  <button
                    className="plus-button"
                    type="button"
                    onClick={() => addToSelectedServices(service)}
                  >
                    <img
                      src={plusICON}
                      className="plus-minus"
                      alt="plus sign"
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="services-selected">
          <h2 className="service-title">{`${selectedServices.length} services selected`}</h2>
          <div className="line"></div>
          <ul>
            {selectedServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <button onClick={navigateToTime} className="continue" type="button">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectServices;
