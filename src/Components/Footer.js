import React, { useState } from "react";
import "../Styles/footer.css";
import Facebook from "../assets/icons/facebook.png";
import Insta from "../assets/icons/instagram.png";
import Tiktok from "../assets/icons/tiktok.png";
import PopupNews from "./PopUpNews";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // State to keep track of the input value
  const [inputValue, setInputValue] = useState("");

  // Function to update the state based on input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const resetForm = () => {
    setInputValue("");
  };

 const handleSub = async () => {
    try {
      const response = await fetch("http://localhost:3003/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue,
          type: "newsletter",
        }),
      });

      if (response.ok) {
        console.log("Successfully subscribed to newsletter");
        openPopup();
        resetForm();
      } else {
        console.error("Failed to subscribe to newsletter:", response.statusText);
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }
  };

  // change button text color when disabled
  const buttonStyle = {
    color: inputValue ? "black" : "#646464", // Black when clickable, light grey when not
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <h2>The Suite Spot</h2>
          <div className="contact-info">
            <p>
              <strong>Phone:</strong>
              <br />
              223-133-2948
              <br />
              <strong>Address:</strong>
              <br />
              2343 Suite Spot Way, <br />
              Orlando, FL 32804
            </p>

            <p>
              <strong>Hours of Operation:</strong> <br />
              Sunday: 12-6
              <br />
              Monday-Friday: 10-7
              <br />
              Saturday: 9-6
            </p>
          </div>
        </div>
        <div className="footer-section newsletter">
          <p>
            <strong>Join our Newsletter</strong>
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSub}
            style={buttonStyle}
            disabled={!inputValue}
          >
            Subscribe
          </button>
          <PopupNews isOpen={isPopupOpen} closePopup={closePopup} />
          <div className="social-icons">
            {/* Replace # with your social media links */}
            <a href="#">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={Insta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={Tiktok} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
