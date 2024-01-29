import React, { useState } from "react";
import "../App.css";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
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
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="text"
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
