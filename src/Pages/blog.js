import React from "react";
import "../App.css"
import hairWashing from "../assets/images/hairwashing.jpg"

function Blog() {
  return (
    <div>
      <div className="main-blog-page">
        <h1>Blog</h1>
        <p>Stay up to date with the latest news from The Suite Spot!</p>
        {/* Background image */}
        <img src="assets/logo/TSS Circle logo Transparent.png" alt="background" />
        <form className="subscribe">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" /><br />
          <button
            type="submit"
            onClick={() => alert('Thank you for subscribing to our blog!')}
          >
            Subscribe
          </button>
        </form>
      </div>
      <br />
      <div className="posts-container">
        <div className="hair-secrets">
           {/* post1 image */}
        <img src={hairWashing} alt="woman getting her hairwashed by a hairstylist." />
          <h3><b>Hair Care Secrets: Tips for Gorgeous Locks</b></h3>
          <p>
            In this article, we'll delve into effective tips that will leave you with a mane to envy.
          </p>
          <button
            type="button"
            onClick={() => alert('Directs to blog post')}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
