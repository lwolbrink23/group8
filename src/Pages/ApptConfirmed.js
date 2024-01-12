import React from "react";
import "../App.css";

function Confirmed() {
return(
    <div>
         <div className="shop-name">
            <h1>Simply Chic Hair</h1>
        </div>
        <div className="confimed-container">
             {/*purple check mark*/}
             <img src="assets/logo/TSS Circle logo Transparent.png" alt="purple check mark" />
             <h1><strong>Confirmed</strong></h1>
             <p>
                Thank you for choosing The Suite Spot Salon for your beauty
                and grooming needs.
                Your appointment has been successfully booked.
                We can't wait to help you look and feel your best.
            </p>
        </div>
        <div className="appt-details">
            <h1><strong>Appointment Details</strong></h1>
            <div id="appt-date-time-service">
                <h4><b>Appointment</b></h4>
                <p> Friday, 10/27/23 at 4:00pm (EST) Classic Blowout; 30 minutes</p>
            </div>
            <div id="company">
                <h4><b>Company</b></h4>
                <p>Simply Chic Hair, (234) 214-5678</p>
            </div>
            <div id="location">
                <h4><b>Location</b></h4>
                <p>The Suite Spot Suite #1</p>
            </div>
                <button type="button" onclick="alert('Goes back to home')">Back to Home</button>
            </div>
    </div>
)
}

export default Confirmed