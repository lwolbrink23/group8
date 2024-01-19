import React, { useState } from "react";
import logoWeb from "../assets/logo/TSS Circle logo Transparent.png";
import logoMobile from "../assets/logo/TSS Horizontal Logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../Styles/header.css"; // main stylesheet
import "../Styles/responsiveHeader.css"; // responsive stylesheet

function Header() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prevValue) => !prevValue);
  };
  return (
    <header>
      <div
        className={`header-container ${isHamburgerOpen ? "mobile-open" : ""}`}
      >
        <img src={logoWeb} alt="logo" className="logo-web" />
        <img src={logoMobile} alt="logo" className="logo-mobile" />
        <div className="profile-container">
          <Link to="/account">
            {" "}
            <img
              src={profileicon}
              alt="profile icon"
              className="profile-icon-web"
            />
          </Link>
        </div>
        {/* Hamburger menu icon */}
        <div id="hamburger-menu" onClick={toggleHamburger}></div>
        <Link to="/account">
          {" "}
          <img
            src={profileicon}
            alt="profile icon"
            className="profile-icon-mobile"
          />
        </Link>
        <nav>
          <ul className={isHamburgerOpen ? "show" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#" className="about-link">
                About
              </a>
              <ul>
                <li>
                  <CustomLink to="/ourstory">Our Story</CustomLink>
                </li>
                <li>
                  <CustomLink to="/oursuites">Our Suites</CustomLink>
                </li>
                <li>
                  <CustomLink to="/ourservices">Our Services</CustomLink>
                </li>
                <li>
                  <CustomLink to="/">Photo Gallery</CustomLink>
                </li>
              </ul>
            </li>
            <li>
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
            <li>
              <CustomLink to="/faqs">FAQ's</CustomLink>
            </li>
            <li>
              <CustomLink to="/shop">Shop</CustomLink>
            </li>
            <li>
              <CustomLink to="/contactus" className="contact-link">
                Contact Us
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/account">Account</CustomLink>
            </li>
            <li>
              <CustomLink to="/booknow" className="purp-button">
                Book Now
              </CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
