import React from "react";
import logo from "../assets/logo/TSS Circle logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Header() {
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
      {/* nav bar */}
      <div className="nav">
        {/* <!--logo and navigation links container--> */}
        <div className="logo-and-nav">
          {/* <!--logo--> */}
          <img src={logo} alt="logo" className="logo" />
          {/* <!--hamburger menu--> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <a href="#" className="about-link">
                About
              </a>
              <ul className="subpages">
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
              <CustomLink to="/contactus">Contact Us</CustomLink>
            </li>
            <li>
              <CustomLink to="/account">Account</CustomLink>
            </li>
            <li>
              <CustomLink to="/booknow" className="purp-button">Book Now</CustomLink>
            </li>
          </ul>
          <div
            className="profile-icon-container"
            style={profileIconContainerStyle}
          >
            {/* profile icon*/}
            <img
              src={profileicon}
              alt="profile icon"
              className="profile-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header;
