import React, { useState } from "react";
import "../App.css";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [confPwValue, setConfPwValue] = useState("");

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
    setPhoneValue(event.target.value);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
  };

  const handleConfPwInputChange = (event) => {
    setConfPwValue(event.target.value);
  };

  const resetForm = () => {
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setPwValue("");
    setConfPwValue("");
  };

  const handleSignUp = () => {
    resetForm();
  };

  const buttonStyle = {
    color:
      firstNameValue && lastNameValue && emailValue && pwValue && confPwValue
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
            type="text"
            className="textarea"
            id="password"
            value={pwValue}
            onChange={handlePwInputChange}
          />
          <br></br>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="text"
            className="textarea"
            id="confirm"
            value={confPwValue}
            onChange={handleConfPwInputChange}
          />
          <br></br>
          <Link
            to="/Account"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecorationLine: "none",
            }}
          >
            <button
              type="button"
              style={buttonStyle}
              disabled={
                !firstNameValue ||
                !lastNameValue ||
                !emailValue ||
                !phoneValue ||
                !pwValue ||
                !confPwValue
              }
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </Link>
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
