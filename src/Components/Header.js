import React, { useState } from "react";
import logo from "../assets/logo/TSS Circle logo Transparent.png";
import profileicon from "../assets/icons/icons8-person-female-100.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>
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
              <CustomLink to="/contactus">Contact Us</CustomLink>
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
        <div className="profile-container">
          <img src={profileicon} alt="profile icon" className="profile-icon" />
        </div>
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
