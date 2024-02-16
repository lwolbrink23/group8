import React, { useState } from "react";
import "../App.css";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [confPwValue, setConfPwValue] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneValue(phoneNumber);

    // Validate phone number format
    const isValidPhone = /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
    setPhoneError(!isValidPhone);
  };

  const handleEmailInputChange = (event) => {
    const email = event.target.value;
    setEmailValue(email);

    // Validate email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!isValidEmail);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
    // Reset passwords match error when password changes
    setPasswordsMatchError(false);
  };

  const handleConfPwInputChange = (event) => {
    const confirmPassword = event.target.value;
    setConfPwValue(confirmPassword);

    // Check if passwords match
    setPasswordsMatchError(confirmPassword !== pwValue);
  };
  const resetForm = () => {
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setPwValue("");
    setConfPwValue("");
    setPasswordsMatchError(false);
  };

  const handleSignUp = async () => {
    // Check if passwords match
    if (pwValue !== confPwValue) {
      setPasswordsMatchError(true);
      return; // Stop sign-up process if passwords don't match
    }
    // Create user data object
    const userData = {
      name: `${firstNameValue} ${lastNameValue}`,
      phoneNumber: phoneValue,
      email: emailValue,
      password: pwValue,
    };

    try {
      // Make a POST request to the backend API to create a new user
      const response = await fetch("http://localhost:3003/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json(); // Assuming your server responds with the new user data
        // Check if the response data contains user information
        if (responseData.user) {
          const newUser = responseData.user;
          // Now you should have user data in the newUser object
          console.log("new user:", newUser);
          console.log("nnewUser._id: ", newUser._id);
          // Reset form after successful sign-up
          resetForm();
          // Redirect to the Account page with the user data
          navigate(`/Account/${newUser._id}`, {
            state: {
              id: newUser._id,
              name: newUser.name,
              phoneNumber: newUser.phoneNumber,
              email: newUser.email,
              password: newUser.password,
            },
          });
        } else {
          // Handle case where user data is not returned
          console.error("Error creating user: User data not found in response");
        }
      } else {
        // Handle error response
        console.error("Error creating user:", response.statusText);
        // Display an error message to the user or perform other error-handling logic
      }
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle network error or other unexpected errors
    }
  };

  const buttonStyle = {
    color:
      firstNameValue &&
      lastNameValue &&
      emailValue &&
      phoneValue &&
      pwValue &&
      confPwValue &&
      !passwordsMatchError &&
      !phoneError &&
      !emailError
        ? "black"
        : "#646464",
  };

  return (
    <div>
      <h1 className="signupTitle">Sign Up</h1>
      <div className="contain">
        <form className="signupform">
          <p className="wonkyName">Name</p>
          <div className="inlineSignUp">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              className="nameField"
              placeholder=" First Name*"
              id="first"
              value={firstNameValue}
              onChange={handleFirstNameInputChange}
            />

            <label htmlFor="lastname"></label>
            <input
              type="text"
              className="nameField"
              id="last"
              placeholder=" Last Name*"
              value={lastNameValue}
              onChange={handleLastNameInputChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                className="section1"
                id="phone"
                placeholder=" (xxx) xxx-xxxx*"
                value={phoneValue}
                onChange={handlePhoneInputChange}
              />
              {phoneError && (
                <p style={{ color: "red" }}>
                  Please enter a phone number in the following format: (xxx)
                  xxx-xxxx.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="section1"
                id="emailInput"
                placeholder=" Email Address*"
                value={emailValue}
                onChange={handleEmailInputChange}
              />
              {emailError && (
                <p style={{ color: "red" }}>
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password" // Change type to password for secure input
            className="section1"
            placeholder=" Password*"
            id="password"
            value={pwValue}
            onChange={handlePwInputChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password" // Change type to password for secure input
            className="section1"
            placeholder=" Confirm Password*"
            id="confirm"
            value={confPwValue}
            onChange={handleConfPwInputChange}
          />
          {passwordsMatchError && (
            <p style={{ color: "red" }}>
              Passwords do not match. Please try again.
            </p>
          )}

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
              phoneError ||
              emailError
            }
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="text-container">
        <p>
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
