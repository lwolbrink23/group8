import React, { useState } from "react";
import "../App.css";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import PopUpPassword from "../Components/PopUpPassword";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/authActions"; // Update the path
import { loginUser } from "../Store/userSlice"; // Update the path

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

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

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

          // Reset form after successful login
          //resetForm();
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
          /*
          // Redirect to the Account page with the user data
          navigate(`/Account/${existingUser._id}`, {
            state: {
              id: existingUser._id,
              name: existingUser.name,
              phoneNumber: existingUser.phoneNumber,
              email: existingUser.email,
              password: existingUser.password,
            },
          }); */
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
            //to="/Account/:id"
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
              {loading ? "Loading..." : "Log In"}
            </button>
          </Link>
          {error && (
            <div style={{ color: "red" }} role="alert">
              {error}
            </div>
          )}
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
