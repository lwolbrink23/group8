import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BackButton from "../Components/BackButton";
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

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("featured");

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
    color: ["Highlights\n45 minutes\n$80", "Single Process Color\n30 minutes\n$60"],
    blowout: ["Express Blowout\n20 minutes\n$40", "Special Occasion\n45 minutes\n$70"],
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="title-container trans-white">
        <BackButton />
        <h1>Simply Chic Hair</h1>
      </div>
      <div className="overview-container">
        {/* ... (your other code) */}
        <div id="tabs">
          {Object.keys(categories).map((category) => (
            <button key={category} type="button" onClick={() => clickCategory(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div id={currentCategory} className="category-list">
          {categories[currentCategory].map((service, index) => (
            <div key={index} className={`item-${index + 1}`}>
              <p>{service}</p>
              {selectedServices.includes(service) ? (
                <button type="button" onClick={() => removeFromSelectedServices(service)}>
                  Remove
                </button>
              ) : (
                <button type="button" onClick={() => addToSelectedServices(service)}>
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
        <div>
          <h2>{`${selectedServices.length} services selected`}</h2>
          <ul>
            {selectedServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <Link to="/appointment_overview" onClick={scrollToTop}>
            <button type="button">CONTINUE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectServices;

