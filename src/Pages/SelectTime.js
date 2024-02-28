import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css";
import "../Styles/SelectTime.css";
import BackButton from "../Components/BackButton";
import Calendar from "react-calendar";
import suiteData from "../data/providers.json";

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
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const selectedServices = location.state?.service || [];
  const totalCost = location.state?.totalCost || 0;
  const duration = location.state?.duration || 0;
  const serviceName = location.state?.serviceName || "Default Service Name";
  const provProfPic = location.state?.provProfPic
  const provProfId = location.state?.provProfId
  const staff = location.state?.staff

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
        totalCost: totalCost,
        duration: duration,
        date: formattedDate,
        time: clickedTime,
        serviceName: serviceName,
        provProfPic: provProfPic,
        provProfId: provProfId,
        staff: staff
      },
    });
  };

  // State to track the clicked time button
  const [clickedTime, setClickedTime] = useState(null);

  // Click handler that sets the clicked time
  const handleTimeClick = (time) => {
    setClickedTime(time);
  };

  return (
    <div>
      <div className="title-container trans-white">
        <BackButton />
        <h1>{serviceName}</h1> {/*make the provider name display here instead*/}
      </div>
      <div className="arrow-container">{/*back arrow*/}</div>
      <div className="overview-container">
        <div className="time extra-space">
          <p>
            Services &gt; <strong>Time</strong> &gt; Confirm
          </p>
          <Calendar
            className="calendar"
            onChange={handleDateChange} // Handle date change
            value={selectedDate} // Step 3: Control calendar's selected date
          />
        </div>
        <div className="times">
          <h3>{formattedDate}</h3>
          {/* List of time buttons */}
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
            const parts = service.split("\n"); // Split the service string into parts
            return (
              <div key={index} id="booked-service" className="OverviewDeats">
                <p>
                  {parts[0]}
                  <br />
                  {parts[1]}
                </p>{" "}
                {/* Service name */}
                <p>{parts[2]}</p> {/* Service duration and price */}
              </div>
            );
          })}
          <hr />
          <p id="total">
            <strong>Total: ${totalCost}</strong>
          </p>
          <div className="appointment" id="appt-container"></div>
          {/*book now button*/}
          <button
            onClick={navigateToOverview}
            type="button"
            disabled={!clickedTime}
            style={{ color: !clickedTime ? "grey" : "initial" }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTime;
