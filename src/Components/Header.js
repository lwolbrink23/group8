import React, { useState, useRef, useEffect, useCallback } from "react";
import logoWeb from "../assets/logo/TSS Circle logo Transparent.png";
import logoMobile from "../assets/logo/TSS Horizontal Logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";
import homeicon from "../assets/icons/icons8-home-96.png";
import abouticon from "../assets/icons/icons8-team-96.png";
import blogicon from "../assets/icons/icons8-article-96.png";
import faqicon from "../assets/icons/icons8-faq-96.png";
import shopicon from "../assets/icons/icons8-shop-96.png";
import contacticon from "../assets/icons/icons8-contact-96.png";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "../Styles/header.css"; // main stylesheet
import "../Styles/responsiveHeader.css"; // responsive stylesheet

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Header() {
  const user = getUser();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const menuRef = useRef();

  /* making side bar slide in and out */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubpage, setActiveSubpage] = useState(null);
  const sidebarRef = useRef(null);
  const { pathname } = useLocation();

  const toggleSidebar = useCallback(() => {
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
  }, [isSidebarOpen, setIsSidebarOpen, setHamburgerOpen, sidebarRef]);

  useEffect(() => {
    // Reset activeSubpage when navigating to a new page
    setActiveSubpage(null);
  }, [pathname]);

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
  }, [isSidebarOpen, toggleSidebar, menuRef]);

  const toggleSubpage = (subpage) => {
    //console.log("in toggleSubpage");
    setActiveSubpage(activeSubpage === subpage ? null : subpage);
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
          <Link to="/account/:id">
            {" "}
            <img
              src={profileicon}
              alt="profile icon"
              className="profile-icon-web"
            />
          </Link>
        </div>
        {/* Hamburger menu icon */}
        <button onClick={toggleSidebar} id="hamburger-menu"></button>
        <Link to="/account/:id">
          {" "}
          <img
            src={profileicon}
            alt="profile icon"
            className="profile-icon-mobile"
          />
        </Link>
        {/* Nav links */}
        <nav ref={sidebarRef} className="sidebar">
          <ul className={isSidebarOpen ? "show" : ""}>
            <li key="home">
              <Link to="/" onClick={toggleSidebar}>
                <img src={homeicon} alt="home icon" className="icon-mobile" />
                Home
              </Link>
            </li>
            <li key="about">
              <div id="about-web">
                <button
                  className="about-link-button"
                  onClick={() => toggleSubpage("about")}
                >
                  <img
                    src={abouticon}
                    alt="about icon"
                    className="icon-mobile"
                  />
                  About
                </button>
              </div>
              <div id="about-mobile">
                <button
                  className="about-link-button"
                  onClick={() => toggleSubpage("about")}
                >
                  <img
                    src={abouticon}
                    alt="about icon"
                    className="icon-mobile"
                  />
                  About
                </button>
              </div>
              <ul
                style={{
                  display: activeSubpage === "about" ? "block" : "none",
                }}
              >
                <li key="our story">
                  <CustomLink to="/ourstory" onClick={toggleSidebar}>
                    Our Story
                  </CustomLink>
                </li>
                <li key="our suites">
                  <CustomLink to="/oursuites" onClick={toggleSidebar}>
                    Our Suites
                  </CustomLink>
                </li>
                <li key="services">
                  <CustomLink to="/ourservices" onClick={toggleSidebar}>
                    Our Services
                  </CustomLink>
                </li>
              </ul>
            </li>
            <li key="blog">
              <CustomLink to="/blog" onClick={toggleSidebar}>
                <img src={blogicon} alt="blog icon" className="icon-mobile" />
                Blog
              </CustomLink>
            </li>
            <li key="faq">
              <CustomLink to="/faqs" onClick={toggleSidebar}>
                <img src={faqicon} alt="FAQ icon" className="icon-mobile" />
                FAQ's
              </CustomLink>
            </li>
            <li key="shop">
              <CustomLink to="/shop" onClick={toggleSidebar}>
                <img src={shopicon} alt="shop icon" className="icon-mobile" />
                Shop
              </CustomLink>
            </li>
            <li key="contact">
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
            <li key="account">
              <div id="account-web">
                <button
                  className="account-link-button"
                  onClick={() => toggleSubpage("account")}
                >
                  <img
                    src={profileicon}
                    alt="profile icon"
                    className="icon-mobile"
                  />
                  Account
                </button>
              </div>
              <div id="account-mobile">
                <button
                  to="#"
                  className="account-link-button"
                  onClick={() => toggleSubpage("account")}
                >
                  <img
                    src={profileicon}
                    alt="profile icon"
                    className="icon-mobile"
                  />
                  Account
                </button>
              </div>
              <ul
                style={{
                  display: activeSubpage === "account" ? "block" : "none",
                }}
              >
                {/* Display "Login" and "Sign Up" links only if there is no active user */}
                {!user && (
                  <>
                    <li key="login">
                      <CustomLink to="/Login" onClick={toggleSidebar}>
                        Login
                      </CustomLink>
                    </li>
                    <li key="signup">
                      <CustomLink to="/SignUp" onClick={toggleSidebar}>
                        Sign Up
                      </CustomLink>
                    </li>
                  </>
                )}
                {/* Display "Account" link only if there is an active user */}
                {user && (
                  <li key="acct">
                    <CustomLink to="/account/:id" onClick={toggleSidebar}>
                      My Account
                    </CustomLink>
                  </li>
                )}
              </ul>
            </li>
            <li key="booknow">
              <CustomLink
                to="/booknow"
                className="purp-button centerbutton"
                onClick={toggleSidebar}
              >
                {" "}
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
