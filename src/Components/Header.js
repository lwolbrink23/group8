import React, { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef();

  {
    /* making side bar slide in and out */
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      sidebarRef.current.style.animationName = "slideOut";
      setTimeout(() => {
        setIsSidebarOpen(false);
        setHamburgerOpen(false);
      }, 800);
    } else {
      setIsSidebarOpen(true);
      setHamburgerOpen(true);
      sidebarRef.current.style.animationName = "slideIn";
    }
  };

  const handleHamburgerClick = () => {
    toggleSidebar(); // Call toggleSidebar to handle both state and animation
  };

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef.current.style.animationName = "slideIn";
    } else {
      sidebarRef.current.style.animationName = "slideOut";
    }
  }, [isSidebarOpen]);

  return (
    <header>
      <div
        ref={menuRef}
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
        <div id="hamburger-menu" onClick={toggleSidebar}></div>
        <Link to="/account">
          {" "}
          <img
            src={profileicon}
            alt="profile icon"
            className="profile-icon-mobile"
          />
        </Link>
        <nav
          ref={sidebarRef}
          className={`sidebar ${isSidebarOpen ? "show" : ""}`}
        >
          <ul className={isHamburgerOpen ? "show" : ""}>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                <img src={homeicon} alt="home icon" className="icon-mobile" />
                Home
              </Link>
            </li>
            <li>
              <div id="about-web">
                <a href="/ourstory" className="about-link">
                  <img
                    src={abouticon}
                    alt="about icon"
                    className="icon-mobile"
                  />
                  About
                </a>
              </div>
              <div id="about-mobile">
                <a href="#" className="about-link">
                  <img
                    src={abouticon}
                    alt="about icon"
                    className="icon-mobile"
                  />
                  About
                </a>
              </div>
              <ul>
                <li>
                  <CustomLink to="/ourstory" onClick={toggleSidebar}>
                    Our Story
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/oursuites" onClick={toggleSidebar}>
                    Our Suites
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/ourservices" onClick={toggleSidebar}>
                    Our Services
                  </CustomLink>
                </li>
              </ul>
            </li>
            <li>
              <CustomLink to="/blog" onClick={toggleSidebar}>
                <img src={blogicon} alt="blog icon" className="icon-mobile" />
                Blog
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/faqs" onClick={toggleSidebar}>
                <img src={faqicon} alt="FAQ icon" className="icon-mobile" />
                FAQ's
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/shop" onClick={toggleSidebar}>
                <img src={shopicon} alt="shop icon" className="icon-mobile" />
                Shop
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/contact_us"
                className="contact-link"
                onClick={toggleSidebar}
              >
                <img
                  src={contacticon}
                  alt="contact us icon"
                  className="icon-mobile"
                />
                Contact Us
              </CustomLink>
            </li>
            <li>
              <div id="account-web">
                <CustomLink to="/account">
                  <img
                    src={profileicon}
                    alt="profile icon"
                    className="icon-mobile"
                  />
                  Account
                </CustomLink>
              </div>
              <div id="account-mobile">
                <CustomLink to="#">
                  <img
                    src={profileicon}
                    alt="profile icon"
                    className="icon-mobile"
                  />
                  Account
                </CustomLink>
              </div>
              <ul>
                <li>
                  <CustomLink to="/Login" onClick={toggleSidebar}>
                    Login
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/SignUp" onClick={toggleSidebar}>
                    Sign Up
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/Account" onClick={toggleSidebar}>
                    Account
                  </CustomLink>
                </li>
              </ul>
            </li>
            <li>
              <CustomLink to="/booknow" className="purp-button centerbutton">
                {" "}
                {/*I added centerbutton as a class for the book now button because the previous css was messing with the buttons on the entire site. -Lindsey*/}
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
