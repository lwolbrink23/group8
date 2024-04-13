import React, { useState } from "react";
import "../App.css";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";
import PopUpExistingUser from "../Components/PopUpExistingUser";
import { BACKEND_ADDRESS } from "../App";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [accountExistsError, setAccountExistsError] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [confPwValue, setConfPwValue] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confPasswordShow, setConfPasswordShow] = useState(false);

  //console.log("active user: ", user);

  const handleFirstNameInputChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "");
    let formattedPhoneNumber = "";

    if (digits.length <= 3) {
      formattedPhoneNumber = `(${digits}`;
    } else if (digits.length > 3 && digits.length <= 6) {
      formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 6) {
      formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(
        3,
        6
      )}-${digits.slice(6, 10)}`;
    }

    setPhoneValue(formattedPhoneNumber);
  };

  const handlePhoneInputBlur = () => {
    const isValidPhone = /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneValue);
    setPhoneError(!isValidPhone);
  };

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleEmailInputBlur = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setEmailError(!isValidEmail);
  };

  const handlePwInputChange = (event) => {
    setPwValue(event.target.value);
    setPasswordsMatchError(false);
  };

  const handleConfPwInputChange = (event) => {
    setConfPwValue(event.target.value);
  };

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
    setAccountExistsError(false);
  };

  const handleSignUp = async () => {
    if (pwValue !== confPwValue) {
      setPasswordsMatchError(true);
      return;
    }

    const userData = {
      name: `${firstNameValue} ${lastNameValue}`,
      phoneNumber: phoneValue,
      email: emailValue,
      password: pwValue,
      appointments: [],
      shoppingCart: {
        items: [],
        giftcards: [],
      },
    };

    try {
      const response = await fetch(`${BACKEND_ADDRESS}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.user) {
          const newUser = responseData.user;

          let userCredential = {
            id: newUser._id,
            name: newUser.name,
            phoneNumber: newUser.phoneNumber,
            email: newUser.email,
            password: newUser.password,
          };

          await dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
              resetForm();
              navigate(`/Account/${newUser._id}`);
            }
          });
          return;
        }

        console.error("Error creating user: User data not found in response");
      } else if (response.status === 400) {
        console.error("Error creating user:", response.statusText);
        resetForm();
        setAccountExistsError(true);
        return;
      } else {
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const passwordVisible = () => {
    setPasswordShow(!passwordShow);
  };

  const isConfirmPasswordVisible = () => {
    setConfPasswordShow(!confPasswordShow);
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
          <div className="passcontain2">
            <input
              type={passwordShow ? "text" : "password"}
              className="section1"
              placeholder=" Password*"
              id="password"
              value={pwValue}
              onChange={handlePwInputChange}
            />
            <span
              className="eye-icon"
              onClick={passwordVisible} // This function should control only the password visibility
              style={{ cursor: "pointer" }}
            >
              {passwordShow ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>
          <label htmlFor="confirm">Confirm Password</label>
          <div className="passcontain">
            <input
              type={confPasswordShow ? "text" : "password"} // Change this to use confPasswordShow
              className="section2"
              placeholder=" Confirm Password*"
              id="confirm"
              value={confPwValue}
              onChange={handleConfPwInputChange}
              onBlur={handleConfPwInputBlur}
            />
            <span
              className="eye-icon"
              onClick={isConfirmPasswordVisible} // This function should control only the confirm password visibility
              style={{ cursor: "pointer" }}
            >
              {confPasswordShow ? ( // Change this to use confPasswordShow
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>

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
      <PopUpExistingUser
        isOpen={accountExistsError}
        closePopup={() => setAccountExistsError(false)}
      />
    </div>
  );
}

export default SignUp;
