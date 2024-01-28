import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/blog.css";
import BlogPosts from "../data/blogposts.json";
import hairWashing from "../assets/images/hairwashing.jpg";
import kneadRelax from "../assets/images/relax.jpeg";
import allAges from "../assets/images/allages.jpeg";

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

  const categories = ["hair", "nails", "makeup", "massage"];

  return (
    <div>
      <div>
        <ScrollToTop />
        <div className="main-blog-page">
          <div className="inner-container"></div>
          <div className="bg-image"></div>
          <div className="overlay-text">
            <h1 className="header-1">Blog</h1>
            <p className="sub-text">Stay up to date with the latest news from The Suite Spot!</p>
            {/* Background image added in CSS*/}
            <form className="subscribe">
              <input type="text" id="email" placeholder="Enter your email" className="email" />
              <button
                type="button" className="sub-button"
                onClick={() => alert('Thank you for subscribing to our blog!')}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="overlay-box"></div>
        </div>
        <br />
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
      <br />
      <div className="posts-container">
        {BlogPosts.filter((post) => selectedCategory === "Filter by Topic" || post.category === selectedCategory)
          .map((post, index) => (
            <div key={index} className={`${post.category}`}>
              {post.category === "hair" && <img src={hairWashing} alt={`${post.title} - ${post.category}`} />}
              {post.category === "massage" && <img src={kneadRelax} alt={`${post.title} - ${post.category}`} />}
              {post.category === "makeup" && <img src={allAges} alt={`${post.title} - ${post.category}`} />}
              <h3>
                <b>{post.title}</b>
              </h3>
              <p>{post.blurb}</p>
              <Link to={`/blog/blogpost/${post.category}/${post.id}`} onClick={scrollToTop}>
                <button type="button">Read More</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
