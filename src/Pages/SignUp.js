import React, { useState } from "react";
import "../App.css";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [confPwValue, setConfPwValue] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    const value = event.target.value;
    setPhoneValue(value);

    // Validate the phone number
    const isValid = isValidPhoneNumber(value);
    setPhoneError(!isValid);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic check for a valid phone number (10 digits)
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
    // Reset passwords match error when password changes
    setPasswordsMatchError(false);
  };

  const handleConfPwInputChange = (event) => {
    setConfPwValue(event.target.value);
    // Reset passwords match error when confirm password changes
    setPasswordsMatchError(false);
  };

  const resetForm = () => {
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setPwValue("");
    setConfPwValue("");
    setPasswordsMatchError(false);
  };

  const handleSignUp = () => {
    // Check if passwords match
    if (pwValue !== confPwValue) {
      setPasswordsMatchError(true);
      return; // Stop sign-up process if passwords don't match
    }

    // Perform sign-up logic here
    // ...

    // Reset form after successful sign-up
    resetForm();
    // Redirect to the account page
    navigate("/Account");
  };

  const buttonStyle = {
    color:
      firstNameValue &&
      lastNameValue &&
      emailValue &&
      pwValue &&
      confPwValue &&
      !passwordsMatchError &&
      !phoneError
        ? "black"
        : "#646464",
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="contain">
        <form className="signupform">
          <div className="inline">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="section1"
                id="first"
                value={firstNameValue}
                onChange={handleFirstNameInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="section1"
                id="last"
                value={lastNameValue}
                onChange={handleLastNameInputChange}
              />
            </div>
          </div>
          <div className="inline">
            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                className="section1"
                id="phone"
                value={phoneValue}
                onChange={handlePhoneInputChange}
              />
              {phoneError && (
                <p style={{ color: "red" }}>
                  Please enter a 10-digit phone number.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="section1"
                id="email"
                value={emailValue}
                onChange={handleEmailInputChange}
              />
            </div>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password" // Change type to password for secure input
            className="textarea"
            id="password"
            value={pwValue}
            onChange={handlePwInputChange}
          />
          <br></br>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password" // Change type to password for secure input
            className="textarea"
            id="confirm"
            value={confPwValue}
            onChange={handleConfPwInputChange}
          />
          {passwordsMatchError && (
            <p style={{ color: "red" }}>
              Passwords do not match. Please try again.
            </p>
          )}
          <br></br>

          <button
            type="button"
            style={buttonStyle}
            disabled={
              !firstNameValue ||
              !lastNameValue ||
              !emailValue ||
              !phoneValue ||
              !pwValue ||
              !confPwValue ||
              passwordsMatchError ||
              phoneError
            }
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="text-container">
        <p classname="reg">
          Already have an account?{" "}
          <Link to="/login" className="purp">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
