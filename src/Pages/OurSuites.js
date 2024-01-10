// App.js or your desired component file

import React from 'react';
import './styles/App.css';
import './styles/oursuites.css';

function OurSuites() {
  return (
    <div>
      <div classname="profile-icon-container">
        {/* profile icon */}
        <img src="assets/icons/icons8-person-female-100.png" alt="profile icon" classname="profile-icon"/>
      </div>
      <header>
        {/* nav bar */}
        <div classname="nav">
          {/* logo and navigation links container */}
          <div classname="logo-and-nav">
            {/* logo */}
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="Logo" classname="logo" />
            {/* hamburger menu */}
            <ul>
              <li><a href="default.asp">Home</a></li>
              <li>
                <a href="linkhere">About</a>
                <ul classname="subpages">
                  <li><a href="our-story.html">Our Story</a></li>
                  <li><a href="our-suites.html">Our Suites</a></li>
                  <li><a href="our-services.html">Our Services</a></li>
                  <li><a href="photo-gallery.html">Photo Gallery</a></li>
                </ul>
              </li>
              <li><a href="linkhere">Blog</a></li>
              <li><a href="linkhere">FAQ's</a></li>
              <li><a href="linkhere">Shop</a></li>
              <li><a href="linkhere">Contact Us</a></li>
              <li><a href="linkhere">Account</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Button clicked!')}
                  classname="purp-button">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="home-title">
        <h1>Our Suites</h1>
        <ul>
          Step into our suites, and let the stress of the day melt away as you
          embark on a journey of beauty and well-being. Our suites are
          thoughtfully designed to provide a relaxing and comfortable environment for both our
          providers and their clients. Your comfort is our priority.
        </ul>
      </div>
      <div className="blurb-container">
        <div className="blurb1">
          <h2>Quality Relaxation</h2>
          <ul>From serene lighting to plush seating, we've thought
            of everything to ensure a quality experience.</ul>
        </div>
        <div className="blurb2">
          <h2>Impeccable Design</h2>
          <ul>Each suite is meticulously designed to create a welcoming and aesthetically pleasing space.
            You'll find comfort and sophistication in every corner.</ul>
        </div>
      </div>
      <div className="rent-section">
        <h1>Rent a Suite</h1>
        <ul className="center">Are you a Lifestyle Professional looking to lease a suite?
          Contact us below, and a manager will get back to you.</ul>
        <form className="inline">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" /><br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" /><br />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" /><br />
          <label htmlFor="message">Message</label>
          <textarea rows="5" cols="50"></textarea>
          <button type="button" onClick={() => alert('Send Message')}>
            Send Message
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer>
        <div className="footer-info">
          <p><strong>The Suite Spot</strong></p>
          <p><strong>Phone:</strong> 223-133-2948</p>
          <p><strong>Address:</strong> 2343 Suite Spot Way, Orlando, FL 32804</p>
          <p><strong>Hours of Operation:</strong></p>
          <ul>
            <li>Sunday: 12-6</li>
            <li>Monday-Friday: 10-7</li>
            <li>Saturday: 9-6</li>
          </ul>
        </div>
        <div className="newsletter">
          <p><strong>Join our Newsletter</strong></p>
          <form action="subscribe.php" method="post">
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="social-icons">
          {/* Add social media icons here- make them not clickable? */}
          <a href="a" target="_blank" rel="noopener noreferrer">
            <img src="social-icon-1.png" alt="Facebook" />
          </a>
          <a href="b" target="_blank" rel="noopener noreferrer">
            <img src="social-icon-2.png" alt="Instagram" />
          </a>
          <a href="c" target="_blank" rel="noopener noreferrer">
            <img src="social-icon-3.png" alt="TikTok" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default OurSuites;
