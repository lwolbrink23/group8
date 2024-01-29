import React from "react";
import "../App.css";
import "../Styles/apptdetails.css";
import SimplyChicHair from "../assets/images/SimplyChicHair.png";
import calendaricon from "../assets/icons/calendaricon.png";
import { Link } from "react-router-dom";

function ApptDetails() {
  return (
    <div>
      <div className="appt-heading">
        <h1>Appointment Details</h1>
      </div>
      <div className="appt-form">
        <div className="prof-image">
          <img src={SimplyChicHair} alt="Simply Chic Hair" />
        </div>
        <p>Simply Chic Hair</p>
        <img src={calendaricon} alt="Calendar Icon" />
        <p>Sep 03, 2023</p>
        <p>2:00pm-4:00pm</p>
        <p>Status:</p>
        <p>COMPLETE</p>
        <p>Time</p>
        <p>2:00pm</p>
        <p>Duration</p>
        <p>2hrs</p>
        <p>Services</p>
        <p>Full Balayage</p>
        <p>Price</p>
        <p>$200</p>
        <p>Staff</p>
        <p>Jean C.</p>
        <Link to="/Account">
          <button type="button">View Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default ApptDetails;
