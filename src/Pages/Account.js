import React from "react";
import "../App.css";
import "../Styles/account.css";
import profilepic from "../assets/icons/icons8-person-female-100.png";

function Account() {
  return (
    <div className="profileTop">
      <img src={profilepic} alt="Profile picture" />
      <h2>Bob Smith</h2>
      <button type="button">Edit Profile</button>
      <button type="button">Sign Out</button>
    </div>
  );
}

export default Account;
