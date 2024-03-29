import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PopupInvalid from "../Components/invalidEmail.js";
import PopUpBlog from "../Components/PopUpBlog.js";
import "../App.css";
import "../Styles/blog.css";
import hairWashing from "../assets/images/hairwashing.jpg";
import kneadRelax from "../assets/images/relax.jpeg";
import allAges from "../assets/images/allages.jpeg";
import nailBlog from "../assets/images/nails-blog.webp";
import { BACKEND_ADDRESS } from "../App";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blog/blogpost/:category/:index") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Blog() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [selectedCategory, setSelectedCategory] = useState("Filter by Topic"); // Default to show all posts

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["Hair", "Nails", "Makeup", "Massage"];

  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const openBlog = () => setIsBlogOpen(true);
  const closeBlog = () => setIsBlogOpen(false);

  const [isInvalidEmailPopupOpen, setIsInvalidEmailPopupOpen] = useState(false);

  const openInvalidEmailPopup = () => setIsInvalidEmailPopupOpen(true);
  const closeInvalidEmailPopup = () => setIsInvalidEmailPopupOpen(false);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const resetForm = () => {
    setInputValue("");
  };

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
      openInvalidEmailPopup();
      return;
    }

    try {
      const response = await fetch("http://localhost:3003/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue,
          type: "blog",
        }),
      });

      if (response.ok) {
        console.log("Successfully subscribed to blog");
        openBlog();
        resetForm();
      } else {
        console.error("Failed to subscribe to blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error subscribing to blog:", error);
    }
  };

  const buttonStyle = {
    color: inputValue ? "black" : "#646464",
  };

  const [BlogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async (endpoint, setDataFunction) => {
      try {
        const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
        const jsonData = await response.json();
        setDataFunction(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData("/blog", setBlogPosts);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <div className="main-blog-page">
        <div className="inner-container"></div>
        <div className="bg-image"></div>
        <div className="overlay-text">
          <h1 className="header-1">Blog</h1>
          <p className="sub-text">
            Stay up to date with the latest news from The Suite Spot!
          </p>
          <form className="subscribe">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="email"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="button"
              style={buttonStyle}
              disabled={!inputValue}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </form>
          <PopupInvalid
            isOpen={isInvalidEmailPopupOpen}
            closePopup={closeInvalidEmailPopup}
          />
          <PopUpBlog isOpen={isBlogOpen} closePopup={closeBlog} />
        </div>
        <div className="overlay-box"></div>
        <div className="filter-dropdown">
          <select
            id="category"
            onChange={(e) => handleFilter(e.target.value)}
            value={selectedCategory}
          >
            <option value="Filter by Topic">Filter by Topic</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="posts-container">
        {BlogPosts.filter(
          (post) =>
            selectedCategory === "Filter by Topic" ||
            post.category === selectedCategory
        ).map((post, index) => (
          <div key={index} className={`${post.category}`}>
            {post.category === "Hair" && (
              <img src={hairWashing} alt={`${post.title} - ${post.category}`} />
            )}
            {post.category === "Massage" && (
              <img src={kneadRelax} alt={`${post.title} - ${post.category}`} />
            )}
            {post.category === "Makeup" && (
              <img src={allAges} alt={`${post.title} - ${post.category}`} />
            )}
            {post.category === "Nails" && (
              <img src={nailBlog} alt={`${post.title} - ${post.category}`} />
            )}
            <h3>
              <b>{post.title}</b>
            </h3>
            <p>{post.blurb}</p>
            <Link
              to={`/blog/blogpost/${post.category}/${post.id}`}
              onClick={scrollToTop}
              style={{ textDecoration: "none" }}
            >
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
