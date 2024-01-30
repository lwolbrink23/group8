import "../App.css";
import PopupContact from "../Components/PopUpContact";
import React, { useState } from "react";
import "../Styles/oursuites.css";
import "../Styles/ContactUs.css";
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import location from "../assets/icons/icons8-location-100.png";
import fb from "../assets/icons/facebook.png";
import insta from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";

function ContactUs() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // State variables for each input field
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  // Function to update the state based on input changes for each input field
  const handleNameInputChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubjectInputChange = (event) => {
    setSubjectValue(event.target.value);
  };

  const handleMessageInputChange = (event) => {
    setMessageValue(event.target.value);
  };

  const resetForm = () => {
    setNameValue("");
    setEmailValue("");
    setSubjectValue("");
    setMessageValue("");
  };

  const handleSendMessage = () => {
    openContact();
    resetForm();
  };

  // change button text color when disabled
  const buttonStyle = {
    color:
      nameValue && emailValue && subjectValue && messageValue
        ? "black"
        : "#646464",
  };

  return (
    <div>
      <div className="contactinfo-container">
        <h1 className="toph1">Contact Us</h1>
        <div className="inlineWeb">
          <img src={phone} alt="phone icon" className="contact-icons" />
          <p className="p">Phone:</p>
          <p className="p">223-133-2948</p>
        </div>

        <div className="inlineWeb">
          <img src={email} alt="email icon" className="contact-icons" />
          <p className="p">Email:</p>
          <p className="p">thesuitespot@gmail.com</p>
        </div>

        <div className="inlineWeb">
          <img src={location} alt="location icon" className="contact-icons" />
          <p className="p">Location:</p>
          <p className="p">2343 Suite Spot Way</p>
          <p className="p">Orlando, FL 32804</p>
        </div>

        <div className="social-icons">
          <img src={fb} alt="facebook icon" className="contact-icons" />
          <img src={insta} alt="instagram icon" className="contact-icons" />
          <img src={tiktok} alt="TikTok icon" className="contact-icons" />
        </div>
        <p className="mobileHandle">@TheSuiteSpot</p>
      </div>
      <div className="container">
        <div className="contact-us-mobile">
          <h1>Contact Us</h1>

          <p>Contact us below and a manager will get back to you.</p>
          <form className="formarea">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="fields"
              id="name"
              placeholder="Name*"
              value={nameValue}
              onChange={handleNameInputChange}
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              className="fields"
              id="email"
              placeholder="Email*"
              value={emailValue}
              onChange={handleEmailInputChange}
            />
            <label htmlFor="subject"></label>
            <input
              type="text"
              className="fields"
              id="subject"
              placeholder="Subject*"
              value={subjectValue}
              onChange={handleSubjectInputChange}
            />
            <label htmlFor="message"></label>
            <textarea
              className="fields"
              placeholder=" Message*"
              value={messageValue}
              onChange={handleMessageInputChange}
            ></textarea>
            <button
              type="button"
              onClick={handleSendMessage}
              style={buttonStyle}
              disabled={
                !nameValue || !emailValue || !subjectValue || !messageValue
              }
            >
              Send Message
            </button>
            <PopupContact isOpen={isContactOpen} closePopup={closeContact} />
          </form>
        </div>
      </div>
      <div className="bottom-container">
        <div className="contact-bottom-div">
          <h1 className="bottomh1">Follow Us</h1>
          <p className="white-text-bottom-div">
            Stay updated with the latest trends - follow us on social media!
          </p>
          <div className="social-icons-web">
            <img src={fb} alt="facebook icon" className="contact-icons" />

            <p className="white-text-bottom-div">@TheSuiteSpotFB</p>
            <img src={insta} alt="instagram icon" className="contact-icons" />
            <p className="white-text-bottom-div">@TheSuiteSpotInsta</p>
            <img src={tiktok} alt="TikTok icon" className="contact-icons" />
            <p className="white-text-bottom-div">@TheSuiteSpot</p>
          </div>
        </div>
        <div className="contact-bottom-div">
          <h1 className="bottomh1">Contact Us</h1>

          <p className="white-text-bottom-div">
            Contact us below and a manager will get back to you.
          </p>

          <form className="bottom-formarea">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="web-fields"
              id="name"
              placeholder="Name*"
              value={nameValue}
              onChange={handleNameInputChange}
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              className="web-fields"
              id="contact-email"
              placeholder="Email*"
              value={emailValue}
              onChange={handleEmailInputChange}
            />
            <label htmlFor="subject"></label>
            <input
              type="text"
              className="web-fields"
              id="subject"
              placeholder="Subject*"
              value={subjectValue}
              onChange={handleSubjectInputChange}
            />
            <label htmlFor="message"></label>
            <textarea
              className="fields"
              placeholder=" Message*"
              value={messageValue}
              onChange={handleMessageInputChange}
            ></textarea>
            <button
              type="button"
              onClick={handleSendMessage}
              style={buttonStyle}
              disabled={
                !nameValue || !emailValue || !subjectValue || !messageValue
              }
            >
              Send Message
            </button>
            <PopupContact isOpen={isContactOpen} closePopup={closeContact} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
