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
        <h1 className="appt-title">Appointment Details</h1>
      </div>
      <div className="appt-form">
        <div className="top-section">
          <div className="prof-image">
            <img src={SimplyChicHair} alt="Simply Chic Hair" />
          </div>

          <div className="middle-section">
            <p className="bolded-title">Simply Chic Hair</p>
            <div className="icon-move">
              <img src={calendaricon} alt="Calendar Icon" className="calendar-icon" />
              <div className="icon-with-text">
                <p>Sep 03, 2023</p>
                <p>2:00pm-4:00pm</p>
              </div>
            </div>
  

          <div className="status-container">
            <p className="bolded-status">Status:</p>
            <p className="complete">COMPLETE</p>
          </div>
          </div>
        </div>

        <div className="bottom-section">
          <p className="bolded-time">Time</p>
          <p>2:00pm</p>
          <p className="bolded">Duration</p>
          <p>2hrs</p>
          <p className="bolded">Services</p>
          <p>Full Balayage</p>
          <p className="bolded">Price</p>
          <p>$200</p>
          <p className="bolded">Staff</p>
          <p>Jean C.</p>
          </div>
          <Link to="/Account">
            <button type="button" className="profile-">
              Back to Profile
            </button>
          </Link>
        </div>
    </div>
  );
}

export default ApptDetails;
