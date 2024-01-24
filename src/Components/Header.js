import React, { useState } from "react";
import logoWeb from "../assets/logo/TSS Circle logo Transparent.png";
import logoMobile from "../assets/logo/TSS Horizontal Logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";
import homeicon from "../assets/icons/icons8-home-96.png";
import abouticon from "../assets/icons/icons8-team-96.png";
import blogicon from "../assets/icons/icons8-article-96.png";
import faqicon from "../assets/icons/icons8-faq-96.png";
import shopicon from "../assets/icons/icons8-shop-96.png";
import contacticon from "../assets/icons/icons8-contact-96.png";
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
        <Link to="/">
          <img src={logoWeb} alt="logo" className="logo-web" />
          <img src={logoMobile} alt="logo" className="logo-mobile" />
        </Link>
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
              <Link to="/">
                <img src={homeicon} alt="home icon" className="icon-mobile" />
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="about-link">
                <img src={abouticon} alt="about icon" className="icon-mobile" />
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
              </ul>
            </li>
            <li>
              <CustomLink to="/blog">
                <img src={blogicon} alt="blog icon" className="icon-mobile" />
                Blog
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/faqs">
                <img src={faqicon} alt="FAQ icon" className="icon-mobile" />
                FAQ's
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/shop">
                <img src={shopicon} alt="shop icon" className="icon-mobile" />
                Shop
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/contactus" className="contact-link">
                <img
                  src={contacticon}
                  alt="contact us icon"
                  className="icon-mobile"
                />
                Contact Us
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/account">
                <img
                  src={profileicon}
                  alt="profile icon"
                  className="icon-mobile"
                />
                Account
              </CustomLink>
              <ul>
                <li>
                  <CustomLink to="/Login">Login</CustomLink>
                </li>
                <li>
                  <CustomLink to="/SignUp">Sign Up</CustomLink>
                </li>
                <li>
                  <CustomLink to="/Account">Account</CustomLink>
                </li>
              </ul>
            </li>
            <li>
              <CustomLink to="/booknow" className="purp-button centerbutton"> {/*I added centerbutton as a class for the book now button because the previous css was messing with the buttons on the entire site. -Lindsey*/}
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
