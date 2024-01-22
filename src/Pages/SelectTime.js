import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css"
import BackButton from "../Components/BackButton";



function SelectTime() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const location = useLocation();
    const selectedServices = location.state?.service || [];
    const totalCost = location.state?.totalCost || 0;

    const navigate = useNavigate();
    const navigateToOverview = () => {
    navigate('/appointment_overview', { state: { service: selectedServices, totalCost: totalCost } });
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
                    {selectedServices.map((service, index) => {
                        const parts = service.split('\n'); // Split the service string into parts
                        return (
                            <div key={index} id="booked-service" className="OverviewDeats">
                                <p>{parts[0]}<br />{parts[1]}</p> {/* Service name */}
                                <p>{parts[2]}</p> {/* Service duration and price */}
                            </div>
                        );
                    })}
                    <hr />
                    <p id="total"><strong>Total: ${totalCost}</strong></p>
                    <div className="appointment" id="appt-container">
                    </div>
                    {/*book now button*/}
                    <button onClick={navigateToOverview} type="button">
                    CONTINUE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelectTime