import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css";
import store from "../assets/icons/icons8-shop-96.png";
import purpleLady from "../assets/icons/icons8-person-female-100.png";
import calendar from "../assets/icons/icons8-event-accepted-tentatively-96.png";
import BackButton from "../Components/BackButton";
import { BACKEND_ADDRESS } from "../App";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Overview() {
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  useEffect(() => {
    const handleUserChange = () => {
      setUser(getUser());
    };

    // Assuming your login flow triggers a custom event when the user logs in
    window.addEventListener("userLoggedIn", handleUserChange);

    // Make sure to clean up the event listener to avoid memory leaks
    return () => {
      window.removeEventListener("userLoggedIn", handleUserChange);
    };
  }, [setUser]);

  /*const scrollToTop = () => {
    window.scrollTo(0, 0);
  }; */

  const location = useLocation();
  const selectedServices = location.state?.service || [];
  const totalCost = location.state?.totalCost || 0;
  const duration = location.state?.duration || 0;
  const formattedDate = location.state?.date;
  const clickedTime = location.state?.time;
  const serviceName = location.state?.serviceName || "Default Service Name";
  const bookStatus = "scheduled";
  const provProfPic = location.state?.provProfPic;
  const provProfId = location.state?.provProfId;
  const staff = location.state?.staff;
  const serviceTitle = location.state?.serviceTitle;

  console.log(duration);

  const navigate = useNavigate();

  // in progress of this:
  const handleBookNow = async () => {
    try {
      const user = getUser();
      console.log(user.id);
      if (!user || !user.id) {
        console.error("User not found. Please log in.");
        // Optionally, redirect to a login page or show an error message
        return;
      }
      // Prepare booking data
      const bookingData = {
        userId: user.id,
        serviceTitle,
        totalCost,
        date: formattedDate,
        time: clickedTime,
        duration: duration,
        bookStatus,
        serviceName,
        provProfPic,
        provProfId,
        staff,
      };

      console.log(bookingData);

      // Make a POST request to the backend booking route
      const response = await fetch(`${BACKEND_ADDRESS}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.status === 201) {
        // Handle success

        const data = await response.json();
        console.log("Booking successful:", data);
        navigate("/appointment_confirmed", {
          state: {
            service: selectedServices,
            totalCost: totalCost,
            date: formattedDate,
            time: clickedTime,
            serviceName: serviceName,
            staff: staff,
          },
        });
        // Navigate to confirmation page or do something else
      } else {
        // Handle error
        console.error("Error booking:", response.statusText);
        // Optionally, display an error message to the user
      }
    } catch (error) {
      // Handle network errors
      console.error("Error booking:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <ScrollToTop />
      <div className="title-container trans-white">
        <BackButton />
        <h1>{serviceName}</h1>
      </div>
      <div className="overview-container">
        <div className="payment">
          <p>
            Services &gt; Time &gt; <strong>Confirm</strong>
          </p>
          <div className="payment-method">
            <h2>Payment Method</h2>
            {/*store/shop icon*/}
            <div id="payment-method">
              <img src={store} alt="Purple shop icon" />
              <p>Pay at venue</p>
            </div>
          </div>
          <div className="cancelation-policy">
            <h2>Cancellation Policy</h2>
            <p className="appt_overview_text">
              If you need to cancel or reschedule please let us know 24 hours in
              advance. Cancellations made within 24 hours of the appointment are
              subject to cancellation fees of 50% of the service. No-shows are
              subject to a fee of 100% of the service.
            </p>
          </div>
          <div className="booking-notes">
            <label for="booking-text-box">Booking Notes</label>
            <br />
            <textarea
              id="booking-text-box"
              name="booking-text-box"
              rows="4"
              cols="70"
              className="appt_overview_textArea"
            ></textarea>
          </div>
        </div>
        <div className="overview" id="booking-overview">
          <div className="overview-content">
            <h2>Overview</h2>
            {selectedServices.map((service, index) => {
              const parts = service.split("\n"); // Split the service string into parts
              return (
                <div key={index} id="booked-service">
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
            <div className="appointment" id="appt-container">
              <p>
                <strong>Appointment:</strong>
              </p>
              <div id="staff">
                <div className="icon-container">
                  <img src={purpleLady} alt="Purple woman icon" />
                  <p>Service Provider: {staff}</p>
                </div>
              </div>
              <div id="date-time">
                <div className="icon-container">
                  <img src={calendar} alt="Purple calendar icon" />
                  <div>
                    <p id="appt-date">
                      {formattedDate}
                      <br />
                      {clickedTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*book now button*/}
            {/* Conditional rendering for error message */}
            {(!user || !user.id) && (
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Please log in to book an appointment.
              </div>
            )}
            <button
              type="button"
              className="purp-button"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
