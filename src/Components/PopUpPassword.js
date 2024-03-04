import React, { useState } from "react";
import "../Styles/Popup.css";

const PopupPassword = ({ isOpen, closePopup }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  if (!isOpen) return null;

  // reset user errors
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = () => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Implement submission logic here if needed
    setSubmitted(true);
    // Here you can also trigger the email sending logic
  };

  if (submitted) {
    return (
      <div className="popup-background">
        <div className="popup-container">
          <p>Please click the link in your email to change your password.</p>
          <button onClick={closePopup} className="closebtnemail">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-background">
      <div className="popup-container">
        <label>
          Enter Your Email <br />
        </label>
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="popup-input"
        />
        <button onClick={handleSubmit} disabled={!email}>
          Submit
        </button>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopupPassword;
