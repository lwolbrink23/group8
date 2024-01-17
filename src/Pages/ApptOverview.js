import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../Styles/ApptOverview.css"
import store from "../assets/icons/icons8-shop-96.png";
import purpleLady from "../assets/icons/icons8-person-female-100.png";
import calendar from "../assets/icons/icons8-event-accepted-tentatively-96.png";
import Arrow from "../assets/icons/circlearrow.png"
import { useNavigate } from 'react-router-dom';


function Overview() {
    function BackButton() {

    let navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <div><img src={Arrow} alt="back arrow" onClick={handleBack} id="backarrow" style={{ cursor: 'pointer' }}></img></div>
    );}
return (
    <div>
        <div className="title-container trans-white">
            <BackButton />
            <h1>Simply Chic Hair</h1>
        </div>
        <div className="arrow-container">
             {/*back arrow*/}
            
             
        </div>
        <div className="overview-container">
            <p>Services &gt; Time &gt; <strong>Confirm</strong></p>
            <div className="payment-method">
                <h2>Payment Method</h2>
                {/*store/shop icon*/}
                <div id="payment-method">
                <img src={store} alt="Purple shop icon"/>
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
                <label for="booking-text-box">Booking Notes</label><br/>
                <input type="text" id="booking-text-box" name="booking-text-box" />
            </div>
            <div className="overview" id="booking-overview">
                <h2>Overview</h2>
                <p id="booked-service">Classic Blowout $75</p>
                <p id="booked-time">30 minutes</p>
                <p id="total">Total $75</p>
                <div className="appointment" id="appt-container">
                  <h3>Appointment:</h3>
                  <div id="staff">
                    {/*woman icon*/}
                  <img src={purpleLady} alt="Purple woman icon"/>
                  <p>Your Info: Staff Member</p>
                  </div>
                  <div id="date-time">
                    {/*calendar icon*/}
                  <img src={calendar} alt="Purple calendar icon"/>
                  <p id="appt-date">Wednesday January 22</p>
                  <p id="appt-time">10:00-10:30am</p>
                  </div>
                </div>
                 {/*book now button*/}
            <Link to="/appointment_confirmed">
                <button type="button">Book Now</button>
            </Link>
            </div>
        </div>
    </div>
)
}

export default Overview