import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css"
import "../Styles/blog.css";
import hairWashing from "../assets/images/hairwashing.jpg"

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Blog() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="main-blog-page">
        <h1>Blog</h1>
        <p>Stay up to date with the latest news from The Suite Spot!</p>
        {/* Background image added in CSS*/}
        <form className="subscribe">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" /><br />
          <button
            type="button"
            onClick={() => alert('Thank you for subscribing to our blog!')}
          >
            Subscribe
          </button>
        </form>
        <div class="overlay-box"></div>
      </div>
      <br />
      <div className="posts-container">
        <div className="hair-secrets">
           {/* post1 image */}
        <img src={hairWashing} alt="woman getting her hair washed by a hairstylist." />
          <h3><b>Hair Care Secrets: Tips for Gorgeous Locks</b></h3>
          <p>
            In this article, we'll delve into effective tips that will leave you with a mane to envy.
          </p>
          <Link to="/blogpost" onClick={scrollToTop}>
                  <button
            type="button">
            Read More
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
