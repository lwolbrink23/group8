import "../Styles/home.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import PopUpBlog from "../Components/PopUpBlog.js";
import PopUpNews from "../Components/PopUpNews.js";
import PopupInvalid from "../Components/invalidEmail.js";
import MainCarousel from "../Components/MainCarousel.js";
import WebGallery from "../Components/WebGallery.js";
import promoBottle from "../assets/images/promo_bottle.png";
import promoAroma from "../assets/images/promo_aroma.png";
import promoHair from "../assets/images/promo_hair.png";
import promoSpa from "../assets/images/promo_spa.png";
import promoWella from "../assets/images/promo_wella.png";
import webpromoBottle from "../assets/images/bigwebbottle.png";
import webaroma from "../assets/images/bigwebaroma.png";
import brownHair from "../assets/images/brownhair.jpg";
import spaProducts from "../assets/images/spaproducts.png";
import webglamour from "../assets/images/bigwebglamour.png";
import webrelax from "../assets/images/bigwebspa.png";
import webwella from "../assets/images/webwellapromo.png";
import eyeball from "../assets/images/eyeball.png";
import hands from "../assets/images/hands.png";
import facemask from "../assets/images/facemask.png";
import gall1 from "../assets/images/gall1.png";
import gall2 from "../assets/images/gall2.png";
import gall3 from "../assets/images/gall3.png";
import gall4 from "../assets/images/gall4.png";
import gall6 from "../assets/images/gall6.png";
import gall7 from "../assets/images/gall7.png";
import fivestars from "../assets/images/5stars.png";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Home() {
  const mobilecarouselImages = [
    promoBottle,
    promoAroma,
    promoHair,
    promoSpa,
    promoWella,
  ];

  const webcarouselImages = [
    webpromoBottle,
    webaroma,
    webglamour,
    webrelax,
    webwella,
  ];

  const mobilegallImages = [gall1, gall2, eyeball, hands, facemask];

  const webgallImages = [
    gall3,
    gall4,
    gall6,
    gall7,
    gall1,
    gall2,
    hands,
    facemask,
  ];

  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const openBlog = () => setIsBlogOpen(true);
  const closeBlog = () => setIsBlogOpen(false);

  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const openNews = () => setIsNewsOpen(true);
  const closeNews = () => setIsNewsOpen(false);

  const [isInvalidEmailPopupOpen, setIsInvalidEmailPopupOpen] = useState(false);
  const openInvalidEmailPopup = () => setIsInvalidEmailPopupOpen(true);
  const closeInvalidEmailPopup = () => setIsInvalidEmailPopupOpen(false);

  const [blogEmail, setBlogEmail] = useState("");
  const [newsEmail, setNewsEmail] = useState("");
  const user = useState(getUser());

  console.log("active user: ", user);

  // Functions to handle input changes
  const handleBlogEmailChange = (e) => {
    setBlogEmail(e.target.value);
  };

  const handleNewsEmailChange = (e) => {
    setNewsEmail(e.target.value);
  };

  const resetInput = () => {
    setBlogEmail("");
    setNewsEmail("");
  };

  // Email RegEx
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubBlog = async () => {
    if (!emailRegex.test(blogEmail)) {
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
          email: blogEmail,
          type: "blog",
        }),
      });

      if (response.ok) {
        console.log("Successfully subscribed to blog");
        openBlog();
        resetInput();
      } else {
        console.error("Failed to subscribe to blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error subscribing to blog:", error);
    }
  };

  const handleSubNews = async () => {
    if (!emailRegex.test(newsEmail)) {
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
          email: newsEmail,
          type: "newsletter",
        }),
      });

      if (response.ok) {
        console.log("Successfully subscribed to newsletter");
        openNews();
        resetInput();
      } else {
        console.error(
          "Failed to subscribe to newsletter:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }
  };

  const buttonBlogStyle = {
    color: blogEmail ? "black" : "#646464", // Black when clickable, light grey when not
  };

  const buttonNewsStyle = {
    color: newsEmail ? "black" : "#646464", // Black when clickable, light grey when not
  };

  return (
    <div className="App">
      <div className="carousel-container-mobile">
        {/* <!-- Promo Carousel mobile --> */}
        <MainCarousel images={mobilecarouselImages} className="mobileMainC" />
        <div className="suite-spot-overlay">
          <h1 className="title">The Suite Spot:</h1>
          <h3 className="center">Where Beauty Finds Its Home.</h3>
        </div>
      </div>
      <div className="carousel-container-web">
        {/* <!-- Promo Carousel web--> */}
        <MainCarousel images={webcarouselImages} className="webMainC" />
        <div className="suite-spot-overlay">
          <h1 className="title">The Suite Spot:</h1>
          <h3 className="center">Where Beauty Finds Its Home.</h3>
        </div>
      </div>
      <Link to="/shop">
        <button type="button" className="promoButton">
          View Our Products
        </button>
      </Link>

      {/* <!-- Book Now Section --> */}
      <div className="trans-white booknow-section">
        <h3>Pampering yourself is just one click away!</h3>
        <Link to="/booknow">
          <button type="button" className="purp-button">
            Book Now
          </button>
        </Link>
      </div>

      {/* <!-- "Why Choose Us?" Section --> */}
      <div className="wcu">
        <div className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          {/* <!-- I added a ul tag around the li elements - Lindsey --> */}
          <ul>
            <li>
              We're all about empowering you to be your own boss. Enjoy the
              freedom of setting your own hours and taking control of your
              career.
            </li>
            <li>
              Our platform is designed to support your professional growth. We
              provide the tools and infrastructure you need to focus on growing
              your client base and income.
            </li>
            <li>
              Decorate your suite in your unique, creative way! Your space is a
              canvas where you can showcase your style and personality, creating
              an inviting atmosphere for your clients.
            </li>
          </ul>
          <p>
            Unlock your potential and join "The Suite Spot" community. Discover
            how we can help you build your beauty business on your own terms.
          </p>
        </div>
        <img src={spaProducts} alt="Spa Products" className="webHomepic1" />
      </div>
      <div className="op">
        <img src={brownHair} alt="Hair" className="webHomepic2" />
        {/* <!-- "Our Providers" Section --> */}
        <div className="our-providers-section">
          <h2>Our Providers</h2>
          <p>
            Our location is the perfect hub for a wide range of beauty and
            wellness services. Here are some of the dedicated professionals
            you'll find here:
          </p>
          <ul>
            <li>Hairdressers</li>
            <li>Makeup Artists</li>
            <li>Nail Artists</li>
            <li>Massage Therapists</li>
          </ul>
          <p>
            Our community of Lifestyle Professionals is dedicated to helping you
            look and feel your best. Discover a wide range of services under one
            roof.
          </p>
          <Link to="/ourservices">
            <button type="button" className="viewServButton">
              View Our Services
            </button>
          </Link>
        </div>
      </div>

      {/* <!-- mobile Gallery --> */}
      <div className="gallery">
        <h2>Gallery</h2>
        {/* <!-- Add gallery carousel content here --> */}
        <MainCarousel images={mobilegallImages} className="mobileGall" />
      </div>
      {/* <!-- web Gallery --> */}
      <div className="webgallery">
        <h2>Gallery</h2>
        {/* <!-- Web gallery grid content here --> */}
        <WebGallery images={webgallImages} />
      </div>
      {/* <!-- Testimonials --> */}
      <div className="testimonialsContainer">
        <h2>Testimonials</h2>
        <div className="testDiv">
          <div className="test1">
            <p>"The Suite Spot is my new addiction. I feel beautiful!"</p>
            <img src={fivestars} alt="five stars" className="fivestarsTestis" />
            <p>Alex Turner</p>
          </div>
          <div className="test2">
            <p>"The Suite Spot is my go-to escape for beauty treatments."</p>
            <img src={fivestars} alt="five stars" className="fivestarsTestis" />
            <p>Sarah Davis</p>
          </div>
          <div className="test3">
            <p>
              "I always leave the Salon Suite feeling like a million bucks!"
            </p>
            <img src={fivestars} alt="five stars" className="fivestarsTestis" />
            <p>Michael Smith</p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="blog-div">
          <h2>Blog</h2>
          <div className="blog-content">
            <Link to="/blog">
              <img src={hands} alt="hands" className="blogphoto" />
            </Link>
            <div className="text-content">
              <p>
                Stay in the loop with our company news.
                <br />
                Find recent articles on:
              </p>
              <ul>
                <li>Hair care</li>
                <li>Tips & Tricks</li>
                <li>Industry Trends</li>
              </ul>
              <input
                type="email"
                placeholder="Enter your email"
                className="blogInput"
                value={blogEmail}
                onChange={handleBlogEmailChange}
              />
              <button
                type="button"
                className="blogButton"
                onClick={handleSubBlog}
                disabled={!blogEmail}
                style={buttonBlogStyle}
              >
                Subscribe
              </button>
              <PopUpBlog isOpen={isBlogOpen} closePopup={closeBlog} />
            </div>
          </div>
        </div>
        <div className="blog-div">
          <h2>Newsletter</h2>
          <div className="blog-content">
            <div className="text-content">
              <p>
                Stay in the loop with our company news. <br />
                Sign up to our newsletter and receive the freshest info.
              </p>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="newsInput"
                value={newsEmail}
                onChange={handleNewsEmailChange}
              />
              <button
                type="button"
                className="blogButton"
                onClick={handleSubNews}
                disabled={!newsEmail}
                style={buttonNewsStyle}
              >
                Subscribe
              </button>
              <PopUpNews isOpen={isNewsOpen} closePopup={closeNews} />
            </div>
          </div>
        </div>
      </div>

      {/* Invalid Email Popup */}
      <PopupInvalid
        isOpen={isInvalidEmailPopupOpen}
        closePopup={closeInvalidEmailPopup}
      />
    </div>
  );
}
export default Home;
