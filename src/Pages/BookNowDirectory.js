import "../App.css";
import "../Styles/booknow.css";
import SimplyChicHair from "../assets/images/SimplyChicHair.png";
import Polish from "../assets/images/PolishPerfection.png";
import Brush from "../assets/images/BrushBlushBeauty.png";
import Hands from "../assets/images/HealingHandsSpa.png";
import { Link } from "react-router-dom";
// import suiteData from "../data/providers.json";
import React, { useEffect, useState } from "react";
import { BACKEND_ADDRESS } from "../App";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function BookNowDirectory() {
  const [suiteData, setSuiteData] = useState([]);
  useEffect(() => {
    const fetchData = async (endpoint, setDataFunction) => {
      try {
        // Fetch data from the backend
        const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
        const jsonData = await response.json();
        setDataFunction(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Usage example:
    fetchData("/providers", setSuiteData);
    // TODO: fetch cart data from database here
    // fetch data from cookie
  }, []);

  return (
    <div>
      <h1 className="center">Directory</h1>
      <div className="dropdown dropdown-content">
        {suiteData.map((item) => (
          <div className="suites">
            <div className="top">
              <img
                src={require("../assets/images/" + item.image + ".png")}
                alt={item.image}
              />
              <div className="description">
                <h3>{item.provider}</h3>
                <p>
                  {item.suite}
                  <br />
                  {item.phone}
                  <br />
                  Specialties: {item.specialties}
                </p>
                <div className="buttons">
                  <Link to={`/providerprofile/${item.id}`}>
                    <button>View Profile</button>
                  </Link>
                  <Link to={item.booknow}>
                    <button className="purp-button">Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="extra-space"></div>
    </div>
  );
}

export default BookNowDirectory;
