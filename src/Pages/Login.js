import React, { useState } from "react";
import "../App.css";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import PopUpPassword from "../Components/PopUpPassword";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const handleEmailInputChange = (event) => {
    const value = event.target.value;
    setEmailValue(value);

    // Validate the email address
    const isValid = isValidEmail(value);
    setEmailError(!isValid);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetForm = () => {
    setEmailValue("");
    setPwValue("");
  };

  const handleLogin = async () => {
    try {
      const userData = {
        email: emailValue,
        password: pwValue,
      };

      const response = await fetch("http://localhost:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.user) {
          const existingUser = responseData.user;
          console.log("Logged in user:", existingUser);

          const userID = existingUser._id;

          let userCredential = {
            id: existingUser._id,
            name: existingUser.name,
            phoneNumber: existingUser.phoneNumber,
            email: existingUser.email,
            password: existingUser.password,
          };

          dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
              resetForm();
              navigate(`/Account/${userID}`);
            }
          });
        } else {
          console.error("Error logging in: User data not found in response");
        }
      } else {
        console.error("Error logging in:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
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
              Log In
            </button>
          </Link>
        </form>
      </div>
      <p className="purp" onClick={openContact} style={{ cursor: "pointer" }}>
        Forgot your password?
      </p>
      <PopUpPassword isOpen={isContactOpen} closePopup={closeContact} />
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
