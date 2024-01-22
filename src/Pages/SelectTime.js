import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css";
import "../Styles/SelectTime.css";
import BackButton from "../Components/BackButton";
import Calendar from "react-calendar";

function SelectTime() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const selectedServices = location.state?.service || [];
  const totalCost = location.state?.totalCost || 0;

  const navigate = useNavigate();
  const navigateToOverview = () => {
    navigate("/appointment_overview", {
      state: { service: selectedServices, totalCost: totalCost },
    });
  };

  // Step 1: State for the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Step 2: Update state on date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <div className="title-container trans-white">
        <BackButton />
        <h1>Simply Chic Hair</h1>
      </div>
      <div className="arrow-container">{/*back arrow*/}</div>
      <div className="overview-container">
        <div className="time">
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
          <h2>{formattedDate}</h2>
          <button
            className={isClicked ? "button-green" : ""}
            onClick={handleClick}
          >
            9:00 AM
          </button>{" "}
          {/* work on this */}
          <button>10:00 AM</button>
          <button>11:00 AM</button>
          <button>12:00 PM</button>
          <button>1:00 PM</button>
          <button>2:00 PM</button>
          <button>3:00 PM</button>
          <button>4:00 PM</button>
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
          <button onClick={navigateToOverview} type="button">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTime;
