import React from "react";
import "../App.css";

function Overview() {
return (
    <div>
        <div className="shop-name">
            <h1>Simply Chic Hair</h1>
        </div>
        <div className="arrow-container">
             {/*back arrow*/}
             <img
            src="assets/logo/TSS Circle logo Transparent.png"
            alt="Image"
          />
             <p>Services &gt; Time &gt; <strong>Confirm</strong></p>
        </div>
        <div className="overview-container">
            <div className="payment-method">
                <h2>Payment Method</h2>
                {/*store icon*/}
                <img
            src="assets/logo/TSS Circle logo Transparent.png"
            alt="Image"
          />
             <p>Pay at venue</p>
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
                <label for="booking-text-box">Booking Notes</label>
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
                  <img src="assets/logo/TSS Circle logo Transparent.png" alt="Image"/>
                  <p>Your Info: Staff Member</p>
                  </div>
                  <div id="date-time">
                    {/*calendar icon*/}
                  <img src="assets/logo/TSS Circle logo Transparent.png" alt="Image"/>
                  <p id="appt-date">Wednesday January 22</p>
                  <p id="appt-time">10:00-10:30am</p>
                  </div>
                </div>
                <button type="button" onclick="alert('Directs to Appointment Confirmation')">Book Now</button>
            </div>
        </div>
    </div>
)
}

export default Overview