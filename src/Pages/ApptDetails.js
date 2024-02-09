import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/apptdetails.css";
import SimplyChicHair from "../assets/images/SimplyChicHair.png";
import calendaricon from "../assets/icons/calendaricon.png";

function ApptDetails({ props }) {
  const location = useLocation();
  console.log(location);

  if (!location.state) {
    return <p>Error...</p>; // or handle the absence of data in some way
  }

  return (
    <div>
      <p>hello!</p>
      {/*
      <div className="appt-heading">
        <h1 className="appt-title">Appointment Details</h1>
      </div>
      <div className="appt-form">
        <div className="top-section">
          <div className="prof-image">
            <img src={SimplyChicHair} alt="Simply Chic Hair" />
          </div>

          <div className="middle-section">
            <p className="bolded-title">{location}</p>
            <div className="icon-move">
              <img
                src={calendaricon}
                alt="Calendar Icon"
                className="calendar-icon"
              />
              <div className="icon-with-text">
                <p>{location}</p>
                <p>{location}</p>
              </div>
            </div>

            <div className="status-container">
              <p className="bolded-status">Status:</p>
              <p className="complete">{location}</p>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <p className="bolded-time">Time</p>
          <p>{location}</p>
          <p className="bolded">Duration</p>
          <p>{location}</p>
          <p className="bolded">Services</p>
          <p>{location}</p>
          <p className="bolded">Price</p>
          <p>{location}</p>
          <p className="bolded">Staff</p>
          <p>{location}</p>
        </div>
        <Link to="/Account">
          <button type="button" className="profile-">
            Back to Profile
          </button>
        </Link>
  </div> */}
    </div>
  );
}

export default ApptDetails;
