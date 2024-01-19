import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css"
import BackButton from "../Components/BackButton";



function SelectTime() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


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
                <div className="time">
                    <p>Services &gt; <strong>Time</strong> &gt; Confirm</p>
                </div>
                <div className="overview" id="booking-overview">
                    <h2>Overview</h2>
                    <p id="booked-service">Classic Blowout $75</p>
                    <p id="booked-time">30 minutes</p>
                    <div className="appointment" id="appt-container">
                    </div>
                    {/*book now button*/}
                    <Link to="/appointment_overview" onClick={scrollToTop}>
                        <button type="button">Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectTime