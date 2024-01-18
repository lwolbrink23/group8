import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css"
import store from "../assets/icons/icons8-shop-96.png";
import purpleLady from "../assets/icons/icons8-person-female-100.png";
import calendar from "../assets/icons/icons8-event-accepted-tentatively-96.png";
import Arrow from "../assets/icons/circlearrow.png"
import { useNavigate } from 'react-router-dom';

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
    const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

    function BackButton() {

        let navigate = useNavigate();

        function handleBack() {
            navigate(-1);
        }

        return (
            <div><img src={Arrow} alt="back arrow" onClick={handleBack} id="backarrow" style={{ cursor: 'pointer' }}></img></div>
        );
    }
    return (
        <div>
            <ScrollToTop />
            <div className="title-container trans-white">
                <BackButton />
                <h1>Simply Chic Hair</h1>
            </div>
            <div className="arrow-container">
                {/*back arrow*/}


            </div>
            <div className="overview-container">
                <div className="payment">
                    <p>Services &gt; Time &gt; <strong>Confirm</strong></p>
                    <div className="payment-method">
                        <h2>Payment Method</h2>
                        {/*store/shop icon*/}
                        <div id="payment-method">
                            <img src={store} alt="Purple shop icon" />
                            <p>Pay at venue</p>
                        </div>
                    </div>
                    <div className="cancelation-policy">
                        <h2>Cancelation Policy</h2>
                        <p>
                            If you need to cancel or reschedule please let us know 24 hours
                            in advance. Cancellations made within 24 hours of the appointment
                            are subject to cancellation fees of 50% of the service. No-shows
                            are subject to a fee of 100% of the service.
                        </p>
                    </div>
                    <div className="booking-notes">
                        <label for="booking-text-box">Booking Notes</label><br />
                        <input type="text" id="booking-text-box" name="booking-text-box" />
                    </div>
                </div>
                <div className="overview" id="booking-overview">
                    <h2>Overview</h2>
                    <p id="booked-service">Classic Blowout $75</p>
                    <p id="booked-time">30 minutes</p>
                    <hr />
                    <p id="total"><strong>Total: $75</strong></p>
                    <div className="appointment" id="appt-container">
                        <p><strong>Appointment:</strong></p>
                        <div id="staff">
                            <div className="icon-container">
                                <img src={purpleLady} alt="Purple woman icon" />
                                <p>Your Info: Staff Member</p>
                            </div>
                        </div>
                        <div id="date-time">
                            <div className="icon-container">
                                <img src={calendar} alt="Purple calendar icon" />
                                <div>
                                    <p id="appt-date">Wednesday January 22<br />10:00-10:30am</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*book now button*/}
                    <Link to="/appointment_confirmed" onClick={scrollToTop}>
                        <button type="button" className="purp-button">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Overview