// App.js or your desired component file

import React from "react";
import Header from "../Components/Header";
// import './App.css'; this was throwing an error
// import './styles/oursuites.css'; this was throwing an error

function OurSuites() {
  return (
    <div>
      <div className="home-title">
        <h1>Our Suites</h1>
        <ul>
          Step into our suites, and let the stress of the day melt away as you
          embark on a journey of beauty and well-being. Our suites are
          thoughtfully designed to provide a relaxing and comfortable
          environment for both our providers and their clients. Your comfort is
          our priority.
        </ul>
      </div>
      <div className="blurb-container">
        <div className="blurb1">
          <h2>Quality Relaxation</h2>
          <ul>
            From serene lighting to plush seating, we've thought of everything
            to ensure a quality experience.
          </ul>
        </div>
        <div className="blurb2">
          <h2>Impeccable Design</h2>
          <ul>
            Each suite is meticulously designed to create a welcoming and
            aesthetically pleasing space. You'll find comfort and sophistication
            in every corner.
          </ul>
        </div>
      </div>
      <div className="rent-section">
        <h1>Rent a Suite</h1>
        <ul className="center">
          Are you a Lifestyle Professional looking to lease a suite? Contact us
          below, and a manager will get back to you.
        </ul>
        <form className="inline">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <br />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
          <br />
          <label htmlFor="message">Message</label>
          <textarea rows="5" cols="50"></textarea>
          <button type="button" onClick={() => alert("Send Message")}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default OurSuites;
