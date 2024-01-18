import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/ourstory.css";
import scissors from "../assets/icons/scissors-whitebg.png";
import diamond from "../assets/icons/diamond-whitebg.png";
import shootingStar from "../assets/icons/star-whitebg.png";


function OurStory() {
  return (
    <div>
      <ScrollToTop />
      <div class="page-title">
        <h2 class="about-text">
          <u>About</u>
        </h2>
        <h1 class="title-text">Our Story</h1>
        {/*Background image added in CSS*/}
      </div>
      <br />
      <div class="story-mission-container">
        <div class="our-story">
          <h1>Our Story</h1>
          <p class="sm-p">
            "The Suite Spot" was founded with a vision to create a space where
            beauty providers could thrive and clients could indulge in a world
            of beauty and relaxation. Our story is one of innovation and
            empowerment, a journey that continues to unfold. Discover how our
            humble beginnings have led to a thriving community where beauty meets
            inspiration.
          </p>
        </div>
        <div class="our-mission">
          <h1>Our Mission</h1>
          <p class="sm-p">
            At "The Suite Spot," our mission is simple yet profound: to empower
            providers and elevate the beauty and wellness experience for our
            clients. We are committed to providing a nurturing environment where
            talent flourishes, creativity is celebrated, and the pursuit of
            excellence is unwavering. Our aim is to be the catalyst for your
            personal and professional success. Join us in our mission to create a
            world where beauty knows no bounds.
          </p>
        </div>
      </div>
      <div class="awards-container">
        <h1>Awards</h1>
        <div class="items-container">
          <div class="golden-scissors">
            <h2>Golden Scissors Award</h2>
            <img src={scissors} alt="Clip art of barber scissors" />
            <ul>
              Voted the #1 Salon for Exceptional Haircuts and Styles in 2022.
            </ul>
          </div>
          <div class="diamond-spa">
            <h2>Diamond Spa Award</h2>
            <img src={diamond} alt="Clip art of a diamond" />
            <ul>
              Recognized as the #1 Destination for Relaxation and Pampering by
              Spa Enthusiasts in 2023.
            </ul>
          </div>
          <div class="platinum-innovators">
            <h2>Platinum Innovators Award</h2>
            <img src={shootingStar} alt=" Clip art of the star of Bethlehem" />
            <ul>
              Voted Top Choice for Innovative Beauty Services by the Beauty
              Innovators Association in 2024.
            </ul>
          </div>
        </div>
        <br />
        <Link to="/oursuites">
          <button type="button" className="suite-button">
            Learn More About Our Suites!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurStory;
