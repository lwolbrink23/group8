import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import mugSpa from "../assets/images/mugspa.jpg";
import spaBlue from "../assets/images/spa_bluebg.jpg";
import relaxMassage from "../assets/images/relax_massage.jpg";
import "../Styles/chicservices.css";
import "../App.css";
import { useState } from "react";

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");

  const categories = {
    featured: [
      "Swedish Massage\n60 minutes\n$80",
      "Deep Tissue Massage\n60 minutes\n$90",
      "Hot Stone Massage\n60 minutes\n$90",
      "Aromatherapy Massage\n60 minutes\n$100",
      "Prenatal Massage\n60 minutes\n$80",
      "Sports Massage\n60 minutes\n$80",
      "Couples Massage\n60 minutes\n$150",
      "Reflexology\n60 minutes\n$100",
      "Custom Massage\n60 minutes\n$150",
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

  // Function to calculate and format the total amount of time for selected services
  const totalTimeFormatted = () => {
    const totalMinutes = selectedServices.reduce((total, service) => {
      const timePart = service.split("\n")[1]; // Extracts the line with the time (e.g., "30 minutes")
      const minutes = parseInt(timePart); // Extracts numerical value
      return total + minutes;
    }, 0);

    // Convert total minutes into hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Format the result into a readable string
    let formattedTime = "";
    if (hours > 0) {
      formattedTime += `${hours} hr${hours > 1 ? "s" : ""}`; // Handle plural
    }
    if (minutes > 0) {
      if (formattedTime.length > 0) formattedTime += ", "; // Add "and" if there are also hours
      formattedTime += `${minutes} min${minutes > 1 ? "s" : ""}`; // Handle plural
    }

    return formattedTime || "0 minutes"; // Return "0 minutes" if no services are selected
  };

  const calculateTotalCost = () => {
    return selectedServices.reduce((total, service) => {
      const pricePart = service.split("\n").pop();
      const price = parseInt(pricePart.replace(/[^0-9]/g, ""));
      return total + price;
    }, 0);
  };

  const extractServiceName = () => {
    // Check if there are selected services and return an empty array if none
    if (selectedServices.length === 0) return [];

    // Map over selectedServices to extract and return the service names
    return selectedServices.map((service) => service.split("\n")[0]);
  };

  const navigateToTime = () => {
    const totalCost = calculateTotalCost();
    const duration = totalTimeFormatted();
    const serviceTitle = extractServiceName();
    console.log(serviceTitle);
    navigate("/selecttime", {
      state: {
        service: selectedServices,
        serviceTitle: serviceTitle,
        totalCost: totalCost,
        duration: duration,
        serviceName: "Healing Hands Spa",
        provProfPic: "HealingHandsSpa",
        provProfId: "iID3",
        staff: "John M.",
      },
    });
  };

  return (
    <div>
      <div className="titles-containers trans-white">
        <BackButton />
        <h1>Healing Hands Spa</h1>
      </div>
      <div className="image-div">
        <img
          src={mugSpa}
          className="focus-image"
          alt="woman relaxing in a spa"
        />
        <div className="side-images-container">
          <img
            src={spaBlue}
            className="side-imagesH"
            alt="woman using spa products"
          />
          <img
            src={relaxMassage}
            className="side-imagesH"
            alt="woman getting a massage"
          />
        </div>
      </div>
      <div className="select-serv">
        <h3>Select Services</h3>
      </div>
      <div className="overviews-containers">
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
