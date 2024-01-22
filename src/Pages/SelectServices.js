import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import purpCheck from "../assets/icons/icons8-check-100.png";
import "../Styles/selectservices.css";
import "../App.css";
import { useState } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}
//updating services on screen
const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");
  //make categories
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
  //change catergory to category clicked
  const clickCategory = (category) => {
    setCurrentCategory(category);
  };
  //add clicked service to list
  const addToSelectedServices = (service) => {
    setSelectedServices([...selectedServices, service]);
  };
  //click to remove the service added
  const removeFromSelectedServices = (service) => {
    const updatedServices = selectedServices.filter((s) => s !== service);
    setSelectedServices(updatedServices);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();

  const calculateTotalCost = () => {
    return selectedServices.reduce((total, service) => {
      const pricePart = service.split('\n').pop(); // Extracts the last line (e.g., "$75")
      const price = parseInt(pricePart.replace(/[^0-9]/g, '')); // Extracts numerical value
      return total + price;
    }, 0);
  };

  const navigateToTime = () => {
    const totalCost = calculateTotalCost();
    navigate('/selecttime', { state: { service: selectedServices, totalCost: totalCost } });
  };

  return (
    <div>
      <ScrollToTop />
      <div className="title-container trans-white">
        <BackButton />
        <h1>Simply Chic Hair</h1>
      </div>
      <div className="overview-container">
        <div className="tabs-cat-list">
          <div className="tabs">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => clickCategory(category)}
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
