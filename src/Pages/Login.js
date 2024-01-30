import React, { useState } from "react";
import "../App.css";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailInputChange = (event) => {
    const value = event.target.value;
    setEmailValue(value);

    // Validate the email address
    const isValid = isValidEmail(value);
    // Set an error state or handle the validation result as needed
    // For example:
    setEmailError(!isValid);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
  };

  const isValidEmail = (email) => {
    // Basic check for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetForm = () => {
    setEmailValue("");
    setPwValue("");
  };

  const handleLogin = () => {
    resetForm();
  };

  const buttonStyle = {
    color: emailValue && pwValue ? "black" : "#646464",
  };

  return (
    <div>
      <h1>Log In</h1>
      <div className="contain">
        <form className="loginform">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="textarea"
            id="email"
            value={emailValue}
            onChange={handleEmailInputChange}
          />
          {emailError && (
            <p style={{ color: "red" }}>Please enter a valid email address.</p>
          )}
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="textarea"
            id="password"
            value={pwValue}
            onChange={handlePwInputChange}
          />
          <br />
          <div className="checkbox-container">
            <input type="checkbox" className="check" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
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
              className="logbutton"
              style={buttonStyle}
              disabled={!emailValue || !pwValue}
              onClick={handleLogin}
            >
              LOG IN
            </button>
          </Link>
        </form>
      </div>
      <p className="purp">Forgot your password?</p>

      <div className="text-container">
        <p classname="reg">
          Not registered?{" "}
          <Link to="/SignUp" className="purp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
