import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/ApptConfirmed.css";
import purpleCheck from "../assets/icons/icons8-check-100.png";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Confirmed() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  const staffName = location.state?.staff
  const serviceName = location.state?.serviceName || "Default Service Name";
  const totalCost = location.state?.totalCost || 0;
  const formattedDate = location.state?.date;
  const clickedTime = location.state?.time;
  const selectedServices = location.state?.service || [];

  return (
    <div>
      <div className="header-white">
        <h1>{serviceName}</h1>
      </div>
      <div className="conf-body">
        <ScrollToTop />

        <div className="confimed-container">
          <div id="confirmed-header">
            <img src={purpleCheck} alt="purple check mark" />
            <h1>
              <strong>Confirmed</strong>
            </h1>
          </div>
          <p id="conf-thanks">
            Thank you for choosing {serviceName} for your beauty and grooming
            needs. Your appointment has been successfully booked. We can't wait
            to help you look and feel your best.
          </p>
        </div>
        <div className="appt-details">
          <h2>
            <strong>Appointment Details</strong>
          </h2>
          <div id="appt-date-time-service">
            <h3>
              <b>Appointment</b>
            </h3>
            <p>
              <strong>
                {formattedDate} at {clickedTime}
              </strong>
            </p>
            {selectedServices.map((service, index) => (
              <p key={index}>{service}</p>
            ))}
          </div>
          <div id="company">
            <p><strong>Company:</strong></p>
            <p>{serviceName}</p>
            <p><strong>Service Provider:</strong></p>
            <p>{staffName}</p>
          </div>
        </div>
        <Link to="/" onClick={scrollToTop}>
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmed;
