import "../App.css";
import PopupContact from '../Components/PopUpContact';
import React, { useState } from 'react';
import '../Styles/oursuites.css';
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import location from "../assets/icons/icons8-location-100.png";


function ContactUs() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div>
      <div className="contactinfo-container">
        <h1>Contact Us</h1>
        <p className='p'>
          Phone:
        </p>
        <p className='p'>
          223-133-2948
        </p>
        <img
          src={phone}
          alt="phone icon"
          className="contact-icons"
        />
        <br />
        <p className='p'>
          Email:
        </p>
        <p className='p'>
          thesuitespot@gmail.com
        </p>
        <img
          src={email}
          alt="email icon"
          className="contact-icons"
        />
        <br />
        <p className='p'>
          Location:
        </p>
        <p className='p'>
          2343 Suite Spot Way
        </p>
        <p className='p'>
          Orlando, FL 32804
        </p>
        <img
          src={location}
          alt="location icon"
          className="contact-icons"
        />
        <br />
        <p className='p'>
          @TheSuiteSpot
        </p>
      </div>
      <div className='container'>
        <div className="rent-section">
          <h1>Contact Us</h1>
          <div className='pmain'>
            <p>
              Contact us below and a manager will get back to you.
            </p>
          </div>
          <form className="formarea">
            <label htmlFor='name'></label>
            <input type="text" className='fields' id="name" placeholder="Name" />
            <label htmlFor='email'></label>
            <input type="text" className='fields' id="email" placeholder="Email" />
            <label htmlFor='subject'></label>
            <input type="text" className='fields' id="subject" placeholder="Subject" />
            <label htmlFor='message'></label>
            <textarea className='fields' placeholder="Message"></textarea>
            <button type="button" onClick={openContact}>
              Send Message
            </button>
            <PopupContact isOpen={isContactOpen} closePopup={closeContact} />
          </form>
        </div>
      </div>
    </div >
  );
}

export default ContactUs;