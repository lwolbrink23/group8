import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import blowDry from "../assets/images/Blowdry.png";
import barber from "../assets/images/barber.png";
import hairDye from "../assets/images/Hairdye.png";
import "../Styles/chicservices.css";
import "../App.css";
import { useState } from "react";

// updating services on screen
const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");

  // make categories
  const categories = {
    featured: [
      "Classic Blowout\n30 minutes\n$75",
      "Keratin Treatment\n30 minutes\n$200",
      "Sew-in Extensions\n30 minutes\n$500",
      "Partial Balayage\n30 minutes\n$70",
      "Full Balayage\n30 minutes\n$200",
      "Root Touchup\n30 minutes\n$75",
      "Box Braids\n30 minutes\n$100",
    ],
    cut: ["Haircut\n30 minutes\n$50", "Trim\n15 minutes\n$30"],
    color: [
      "Highlights\n45 minutes\n$80",
      "Single Process Color\n30 minutes\n$60",
    ],
    blowout: [
      "Express Blowout\n20 minutes\n$40",
      "Special Occasion\n45 minutes\n$70",
    ],
  };
  // change category to category clicked
  const clickCategory = (category) => {
    setCurrentCategory(category);
  };
  // add clicked service to list
  const addToSelectedServices = (service) => {
    setSelectedServices([...selectedServices, service]);
  };
  // click to remove the service added
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
  // ------------------------ // Make another function here to add the total amount of minutes // ----------------------------//

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
      const pricePart = service.split("\n").pop(); // Extracts the last line (e.g., "$75")
      const price = parseInt(pricePart.replace(/[^0-9]/g, "")); // Extracts numerical value
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
        serviceName: "Simply Chic Hair",
        provProfPic: "SimplyChicHair",
        provProfId: "iID0",
        staff: "Marissa S.",
      },
    });
  };

  return (
    <div>
      <div className="titles-containers trans-white">
        <BackButton />
        <h1>Simply Chic Hair</h1>
      </div>
      <div className="image-div">
        <img
          src={blowDry}
          className="focus-image"
          alt="woman getting her hair blow dried by a hair dresser"
        />
        <div className="side-images-containerC">
          <img
            src={hairDye}
            className="side-images"
            alt="woman getting her hair dyed by a hair dresser"
          />
          <img
            src={barber}
            className="side-images"
            alt="man getting his hair cut my a barber"
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
                      alt="checkmark"
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
