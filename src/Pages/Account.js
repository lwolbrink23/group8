import React from "react";
import "../App.css";
import "../Styles/account.css";
import profilepic from "../assets/icons/icons8-person-female-100.png";
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import lock from "../assets/icons/icons8-password-100.png";

function Account() {
  return (
    <div className="profileTop">
      <div class="profile-picture-container">
        <img
          src={profilepic}
          alt="Profile picture"
          className="profile-picture"
        />
      </div>
      <h2>Bob Smith</h2>
      <div className="buttonsContainer">
        <button type="button">Edit Profile</button>
        <button type="button" className="signoutButton">
          Sign Out
        </button>
      </div>
      <div className="persInfoContainer">
        <h3>Personal Information</h3>
        <img src={phone} alt="phone icon" className="persIcons"></img>
        <p>(xxx) xxx-xxxx</p>
        <img src={email} alt="email icon" className="persIcons"></img>
        <p>email@gmail.com</p>
        <img src={lock} alt="password icon" className="persIcons"></img>
        <p>password</p>
        <button type="button" className="changePW">
          Change
        </button>
      </div>
    </div>
  );
}

export default Account;
