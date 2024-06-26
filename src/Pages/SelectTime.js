import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css";
import "../Styles/SelectTime.css";
import BackButton from "../Components/BackButton";
import Calendar from "react-calendar";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function SelectTime() {
  const user = useState(getUser());
  console.log("active user: ", user);

  const location = useLocation();
  const selectedServices = location.state?.service || [];
  const totalCost = location.state?.totalCost || 0;
  const duration = location.state?.duration || 0;
  const serviceName = location.state?.serviceName || "Default Service Name";
  const provProfPic = location.state?.provProfPic;
  const provProfId = location.state?.provProfId;
  const staff = location.state?.staff;
  const serviceTitle = location.state?.serviceTitle;

  console.log(location.state);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const navigate = useNavigate();
  const navigateToOverview = () => {
    navigate("/appointment_overview", {
      state: {
        service: selectedServices,
        serviceTitle: serviceTitle,
        totalCost: totalCost,
        duration: duration,
        date: formattedDate,
        time: clickedTime,
        serviceName: serviceName,
        provProfPic: provProfPic,
        provProfId: provProfId,
        staff: staff,
      },
    });
  };

  const [clickedTime, setClickedTime] = useState(null);

  const handleTimeClick = (time) => {
    setClickedTime(time);
  };

  const isPastDate = (date) => {
    const today = new Date();
    return date < today;
  };

  return (
    <div>
      <div className="title-container trans-white">
        <BackButton className="viewBackbutn" />
        <h1 className="mobiletitle">{serviceName}</h1>
      </div>
      <div className="arrow-container"></div>
      <div className="overview-container">
        <div className="time extra-space">
          <p>
            Services &gt; <strong>Time</strong> &gt; Confirm
          </p>
          <Calendar
            className="calendar"
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={({ date }) =>
              isPastDate(date) ? "past-date" : null
            } // Apply CSS class to past dates
          />
        </div>
        <div className="times">
          <h3>{formattedDate}</h3>
          {[
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
          ].map((time, index) => (
            <button
              key={index}
              className={clickedTime === time ? "button-green" : ""}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="overview" id="booking-overview">
          <h2>Overview</h2>
          {selectedServices.map((service, index) => {
            const parts = service.split("\n");
            return (
              <div key={index} id="booked-service" className="OverviewDeats">
                <p>
                  {parts[0]}
                  <br />
                  {parts[1]}
                </p>
                <p>{parts[2]}</p>
              </div>
            );
          })}
          <hr />
          <p id="total">
            <strong>Total: ${totalCost}</strong>
          </p>
          <div className="appointment" id="appt-container"></div>
          <button
            onClick={navigateToOverview}
            type="button"
            disabled={!clickedTime}
            style={{ color: !clickedTime ? "grey" : "initial" }}
            className="continuebutton"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTime;
