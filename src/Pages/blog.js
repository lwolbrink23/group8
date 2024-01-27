import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css"
import "../Styles/blog.css";
import hairWashing from "../assets/images/hairwashing.jpg"
import kneadRelax from "../assets/images/relax.jpeg"
import allAges from "../assets/images/allages.jpeg"

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "blog/blogpost/:category/:index") {
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

  const posts = [
    {
      category: "hair",
      image: hairWashing,
      title: "Hair Care Secrets: Tips for Gorgeous Locks",
      content: "In this article, we'll delve into effective tips that will leave you with a mane to envy.",
    },
    {
      category: "massage",
      image: kneadRelax,
      title: "Knead to Relax: The Power of Massage",
      content: "Discover the healing touch of massage and its incredible power to improve well-being and relaxation.",
    },
    {
      category: "makeup",
      image: allAges,
      title: "Makeup for All Ages",
      content: "Celebrate the beauty of every stage of life.",
    }
    // Add more posts with categories as needed
  ];

  const categories = [ "hair", "nails", "makeup", "massage"];


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
        <div class="overlay-box"></div>
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
        {posts
          .filter((post) => selectedCategory === "Filter by Topic" || post.category === selectedCategory)
          .map((post, index) => (
            <div key={index} className={`${post.category}`}>
              <img src={post.image} alt={`${post.title} - ${post.category}`} />
              <h3>
                <b>{post.title}</b>
              </h3>
              <p>{post.content}</p>
              <Link to="/blogpost" onClick={scrollToTop}>
                <button type="button">Read More</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;