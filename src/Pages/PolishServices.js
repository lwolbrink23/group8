import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import serviceNails from "../assets/images/servicenails.jpg";
import polishes from "../assets/images/polishes.jpg";
import acetone from "../assets/images/acetone.jpg";
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

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const categories = {
    featured: [
      "Classic Manicure\n45 minutes\n$40",
      "Classic Pedicure\n45 minutes\n$40",
      "Nail Art\n30 minutes\n$20",
    ],
    manicure: [
      "Basic Manicure\n45 minutes\n$40",
      "French Manicure\n45 minutes\n$60",
      "Spa Manicure\n45 minutes\n$60",
    ],
    pedicure: [
      "Basic Pedicure\n45 minutes\n$40",
      "French Pedicure\n45 minutes\n$60",
      "Spa Pedicure\n45 minutes\n$60",
    ],
    extensions: [
      "Acrylic Fill / Full Set\n60 minutes\n$40/$80",
      "Dip Full Set\n60 minutes\n$80",
      "Fiberglass Full Set\n60 minutes\n$100",
    ],
    addons: [
      "Hand-painted Designs\n15 minutes\n$20",
      "Ombre Nails\n15 minutes\n$30",
      "Marble Nails\n15 minutes\n$30",
      "Foiling\n15 minutes\n$20",
      "3D Nail Art\n15 minutes\n$20",
      "Paraffin Wax Treatment\n15 minutes\n$20",
      "Gel Polish\n15 minutes\n$10",
      "Soak-Off Removal\n15 minutes\n$20",
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

  const navigateToTime = () => {
    const totalCost = calculateTotalCost();
    const duration = totalTimeFormatted();
    navigate("/selecttime", {
      state: {
        service: selectedServices,
        totalCost: totalCost,
        serviceName: "Polish Perfection",
        duration: duration,
        serviceName: "Polish Perfection",
        provProfPic: "PolishPerfection",
        provProfId: "iID1",
        staff: "Polly W.",
      },
    });
  };

  return (
    <div>
      <div className="titles-containers trans-white">
        <BackButton />
        <h1>Polish Perfection</h1>
      </div>
      <div className="image-div">
        <img src={serviceNails} className="focus-image" alt="baby pink nails" />
        <div className="side-images-container">
          <img
            src={polishes}
            className="side-imagesP"
            alt="shelf full of different color nail polish"
          />
          <img
            src={acetone}
            className="side-imagesP"
            alt="nail technician using acetone on a customer's nails"
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
