import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import ringLight from "../assets/images/ringlight.jpg";
import lashes from "../assets/images/lashes.jpg";
import weddingDreamz from "../assets/images/wedding_dreams.jpg";
import "../Styles/chicservices.css";
import "../App.css";
import { useState } from "react";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

// updating services on screen
const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  // make categories
  const categories = {
    featured: [
      "Classic Makeup Application\n$40",
      "Glamorous Evening Makeup\n$75",
      "Natural Makeup Look\n$45",
      "Bridal Makeup Package\n$150",
      "Editorial/\nFashion Makeup\n$70",
      "Special Effects Makeup\n$80",
      "Makeup Lesson\n$60",
      "Group Makeup Session\n$150",
      "Men's Grooming\n$40",
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

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      removeFromSelectedServices(service);
    } else {
      addToSelectedServices(service);
    }
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
      state: {
        service: selectedServices,
        totalCost: totalCost,
        serviceName: "Brush & Blush Beauty",
      },
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
          src={weddingDreamz}
          className="focus-image"
          alt="Bride getting a touch up for her makeup"
        />
        <div className="side-images-containerB">
          <img
            src={lashes}
            className="side-imagesB"
            alt="woman getting her lashes done"
          />
          <div className="side-images-containerB">
            <img
              src={ringLight}
              className="side-imagesB"
              alt="Professionals doing hair and makeup"
            />
          </div>
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
              <div
                key={index}
                className={`item-${index + 1}`}
                onClick={() => toggleService(service)}
              >
                <p>{service}</p>
                {selectedServices.includes(service) ? (
                  <div className="button-container">
                    <button
                      className="remove-button"
                      type="button"
                      onClick={(e) => {
                        // Stop parent div click
                        e.stopPropagation();
                        removeFromSelectedServices(service);
                      }}
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
                    onClick={(e) => {
                      // Stop parent div click
                      e.stopPropagation();
                      addToSelectedServices(service);
                    }}
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
          <div className="text-style">
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <button
              onClick={navigateToTime}
              className="continue"
              type="button"
              disabled={selectedServices.length === 0}
              style={{
                color: selectedServices.length === 0 ? "grey" : "initial",
              }}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServices;
