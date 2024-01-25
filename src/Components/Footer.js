import React, { useState } from 'react';
import Popup from './PopUp';
import "../Styles/footer.css";
import Facebook from "../assets/icons/facebook.png";
import Insta from "../assets/icons/instagram.png";
import Tiktok from "../assets/icons/tiktok.png";

function Footer() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

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
          <input type="email" placeholder="Enter your email" />
          <button onClick={openPopup}>Subscribe</button>
          <Popup isOpen={isPopupOpen} closePopup={closePopup} />
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
