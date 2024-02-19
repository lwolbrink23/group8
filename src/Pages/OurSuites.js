// App.js or your desired component file
import PopupContact from "../Components/PopUpContact";
import React, { useState } from "react";
import "../App.css";
import "../Styles/oursuites.css";
import oursuitesimg1 from "../assets/images/oursuitesimg1.png";
import oursuitesimg2 from "../assets/images/oursuitesimg2.png";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function OurSuites() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

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

  const handleSendMessage = async () => {
    try {
      console.log("Form Data:", {
        nameValue,
        emailValue,
        subjectValue,
        messageValue,
      });
      // Create an object with the form data
      const formData = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      };

      // Make a POST request to your server endpoint
      const response = await fetch("http://localhost:3003/rent-a-suite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        openContact();
        resetForm();
      } else {
        const errorData = await response.json();
        console.error("Error submitting suite rental request:", errorData);
      }
    } catch (error) {
      console.error("Error submitting suite rental request:", error);
    }
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
      <div>
        <h1>Our Suites</h1>
        <p className="topOurSuitesp">
          Step into our suites, and let the stress of the day melt away as you
          embark on a journey of beauty and well-being. Our suites are
          thoughtfully designed to provide a relaxing and comfortable
          environment for both our providers and their clients. Your comfort is
          our priority.
        </p>
      </div>
      <div className="centerit">
        <div className="blurb-container">
          <div className="blurbs">
            <img src={oursuitesimg1} alt="Suite Pic 1" />
            <h2>Quality Relaxation</h2>
            <p>
              From serene lighting to plush seating, we've thought of everything
              to ensure a quality experience.
            </p>
          </div>
          <div className="blurbs">
            <img src={oursuitesimg2} alt="Suite Pic 2" />
            <h2>Impeccable Design</h2>
            <p>
              Each suite is meticulously designed to create a welcoming and
              aesthetically pleasing space. You'll find comfort and
              sophistication in every corner.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="rent-section">
          <h1>Rent a Suite</h1>
          <div className="pmain">
            <p>
              Are you a Lifestyle Professional looking to lease a suite? <br />{" "}
              Contact us below, and a manager will get back to you.
            </p>
          </div>
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
              id="input-email"
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
    </div>
  );
}

export default OurSuites;
