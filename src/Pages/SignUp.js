import React, { useState } from "react";
import "../App.css";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import AccountExistsPopup from "../Components/PopUpExistingUser";

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
  const [accountExistsError, setAccountExistsError] = useState(false); // State variable for account exists error
  const [user, setUser] = useState(getUser());
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [confPwValue, setConfPwValue] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  console.log("active user: ", user);

  const handleFirstNameInputChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    const digits = event.target.value.replace(/\D/g, '');
    let formattedPhoneNumber = '';

    // Format the digits according to the pattern
    if (digits.length <= 3) {
      formattedPhoneNumber = `(${digits}`;
    } else if (digits.length > 3 && digits.length <= 6) {
      formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 6) {
      formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }

    setPhoneValue(formattedPhoneNumber);
  };

  // Validate phone number format
  const handlePhoneInputBlur = () => {
    const isValidPhone = /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneValue);
    setPhoneError(!isValidPhone);
  };

  // Email input change handler
  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  // Email input blur handler for validation
  const handleEmailInputBlur = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setEmailError(!isValidEmail);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
    // Reset passwords match error when password changes
    setPasswordsMatchError(false);
  };

  const handleConfPwInputChange = (event) => {
    setConfPwValue(event.target.value);
  };

  // New confirm password input blur handler for validation
  const handleConfPwInputBlur = () => {
    setPasswordsMatchError(confPwValue !== pwValue);
  };
  const resetForm = () => {
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setPwValue("");
    setConfPwValue("");
    setPasswordsMatchError(false);
    setAccountExistsError(false); // Reset account exists error state
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
      shoppingCart: [],
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
          console.log("newUser._id: ", newUser._id);
          // Reset form after successful sign-up
          resetForm();
          // Need logic to log them in as the active user in order to navigate to their account page
          navigate(`/Login`);
        } else {
          // Handle case where user data is not returned
          console.error("Error creating user: User data not found in response");
        }
      } else if (response.status === 409) {
        // Account already exists
        console.error("Error creating user:", response.statusText);
        // Display error message to the user
        setAccountExistsError(true); // Set account exists error state
        // You might also want to reset the form fields here
        resetForm();
      } else {
        // Handle other error responses
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
                onBlur={handlePhoneInputBlur}
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
                onBlur={handleEmailInputBlur}
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
            type="password" // secure input
            className="section1"
            placeholder=" Password*"
            id="password"
            value={pwValue}
            onChange={handlePwInputChange}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password" // secure input
            className="section1"
            placeholder=" Confirm Password*"
            id="confirm"
            value={confPwValue}
            onChange={handleConfPwInputChange}
            onBlur={handleConfPwInputBlur}
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
      <AccountExistsPopup isOpen={accountExistsError} closePopup={() => setAccountExistsError(false)} />
    </div>
  );
}
export default SignUp
