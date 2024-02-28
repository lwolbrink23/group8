import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../App.css";
import "../Styles/apptdetails.css";
import calendaricon from "../assets/icons/calendaricon.png";
import BackButton from "../Components/BackButton";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function ApptDetails({ props }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(getUser());

  console.log("location.state: ", location.state);

  if (!location.state) {
    return <p>Error...</p>; // or handle the absence of data in some way
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "#e6e3e3";
      case "cancelled":
        return "red";
      case "complete":
        return "#89E569";
      default:
        return ""; // Default color or handle unknown status
    }
  };

  const getStatusCancelBtn = (status) => {
    switch (status) {
      case "scheduled":
        return "block";
      case "cancelled":
        return "none";
      case "complete":
        return "none";
      default:
        return ""; // Default color or handle unknown status
    }
  };

  const getStatusRebookBtn = (status) => {
    switch (status) {
      case "scheduled":
        return "none";
      case "cancelled":
        return "none";
      case "complete":
        return "block";
      default:
        return ""; // Default color or handle unknown status
    }
  };

  const getStatusRescheduleBtn = (status) => {
    switch (status) {
      case "scheduled":
        return "block";
      case "cancelled":
        return "none";
      case "complete":
        return "none";
      default:
        return ""; // Default color or handle unknown status
    }
  };

  // Function to rescheudle appointment
  const rescheduleAppt = () => {
    console.log("Rescheduled Appointment clicked for ID:", location.state.id);
    // INSERT LOGIC HERE TO CANCEL THE APPOINTMENT
    // THEN REROUTE THEM TO SPECIFIC PROVIDER PROFILE PAGE
    navigate(`/providerprofile/${location.state.provProfId}`);
  };

  // Path for the image
  const provProfPic = location.state.provProfPic;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const date = new Date(location.state.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <BackButton className="apptDetBackbtn"></BackButton>
      <div className="appt-heading">
        <h1 className="appt-title">Appointment Details</h1>
      </div>
      <div className="appt-form">
        <div className="top-section">
          <div className="prof-image">
            <img
              src={require("../assets/images/" + provProfPic + ".png")}
              alt="Provider Profile"
            />
          </div>

          <div className="middle-section">
            <p className="bolded-title">{location.state.location}</p>
            <div className="icon-move">
              <img
                src={calendaricon}
                alt="Calendar Icon"
                className="calendar-icon"
              />
              <div className="icon-with-text">
                <p>{formattedDate}</p>
                <p>{location.state.time}</p>
              </div>
            </div>

            <div className="status-container">
              <p className="bolded-status">Status:</p>
              <p
                className="complete"
                style={{
                  backgroundColor: getStatusColor(location.state.status),
                }}
              >
                {location.state.status.toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        <div className="apptDetails-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Services</th>
                <th>Price</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              <tr key={location.state.id}>
                <td>{formattedDate}</td>
                <td>{location.state.time}</td>
                <td>{location.state.duration}</td>
                <td>{truncateText(location.state.services, 24)}</td>
                <td>{location.state.price}</td>
                <td>{location.state.staff}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*MOBILE TABLE DISPLAY ONLY*/}
        <div className="bottom-section">
          <p className="bolded">Time</p>
          <p>{location.state.time}</p>
          <p className="bolded">Duration</p>
          <p>{location.state.duration}</p>
          <p className="bolded">Services</p>
          <p>{truncateText(location.state.services, 24)}</p>
          <p className="bolded">Price</p>
          <p>{location.state.price}</p>
          <p className="bolded">Staff</p>
          <p>{location.state.staff}</p>
        </div>
        <div className="btns-container">
          <div className="cancelApptBtnContainer">
            <button
              type="button"
              className="cancelApptBtn"
              style={{
                display: getStatusCancelBtn(location.state.status),
              }}
            >
              Cancel
            </button>
          </div>

          <button
            type="button"
            className="profile-button"
            onClick={() => rescheduleAppt()}
            style={{
              display: getStatusRescheduleBtn(location.state.status),
            }}
          >
            Reschedule
          </button>
          <button
            type="button"
            className="profile-button"
            onClick={() => rescheduleAppt()}
            style={{
              display: getStatusRebookBtn(location.state.status),
            }}
          >
            Rebook
          </button>
        </div>
      </div>

    </div>
  );
}

export default ApptDetails;
