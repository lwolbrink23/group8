import React, { useState } from "react";
import logo from "../assets/logo/TSS Circle logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };


  const headerStyle = {
    position: "relative",
  };

  const profileIconContainerStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: "1000",
  };

  return (
    <header style={headerStyle}>
      {/* Hamburger button */}
      <button className="hamburger" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* nav bar */}
      <div className="nav">
        {/* <!--logo and navigation links container--> */}
        <div className="logo-and-nav">
          {/* <!--logo--> */}
          <img src={logo} alt="logo" className="logo" />
          {/* Navigation links container */}
          <div className={`nav-container ${showNav ? 'show' : ''}`}>
            <ul>
              <li>
                <a href="default.asp">Home</a>
              </li>
              <li className="dropdown">
                <a href="#" className="about-link">
                  About
                </a>
                <ul class="subpages">
                  <li>
                    <a href="our-story.html">Our Story</a>
                  </li>
                  <li>
                    <a href="our-suites.html">Our Suites</a>
                  </li>
                  <li>
                    <a href="our-services.html">Our Services</a>
                  </li>
                  <li>
                    <a href="photo-gallery.html">Photo Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="linkhere">Blog</a>
              </li>
              <li>
                <a href="linkhere">FAQ's</a>
              </li>
              <li>
                <a href="linkhere">Shop</a>
              </li>
              <li>
                <a href="linkhere">Contact Us</a>
              </li>
              <li>
                <a href="linkhere">Account</a>
              </li>
              <li>
                <button
                  type="button"
                  onclick="alert('Button clicked!')"
                  className="purp-button"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          <div
            className="profile-icon-container"
            style={profileIconContainerStyle}
          >
            {/* profile icon*/}
            <img src={profileicon} alt="profile icon" className="profile-icon" />
          </div>
        </div>
      </div>

      
    </header>
  );
}

export default Header;
