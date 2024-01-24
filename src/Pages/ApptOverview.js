import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/ApptOverview.css"
import store from "../assets/icons/icons8-shop-96.png";
import purpleLady from "../assets/icons/icons8-person-female-100.png";
import calendar from "../assets/icons/icons8-event-accepted-tentatively-96.png";
import BackButton from "../Components/BackButton";

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
    const location = useLocation();
    const selectedServices = location.state?.service || [];
    const totalCost = location.state?.totalCost || 0;
    const formattedDate = location.state?.date;
    const clickedTime = location.state?.time;
    const serviceName = location.state?.serviceName || 'Default Service Name';

    const navigate = useNavigate();
    const navigateToConfirmed = () => {
        navigate('/appointment_confirmed', { state: { service: selectedServices, totalCost: totalCost, date: formattedDate, time: clickedTime, serviceName: serviceName } });
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
                    {selectedServices.map((service, index) => {
                        const parts = service.split('\n'); // Split the service string into parts
                        return (
                            <div key={index} id="booked-service">
                                <p>{parts[0]}<br />{parts[1]}</p> {/* Service name */}
                                <p>{parts[2]}</p> {/* Service duration and price */}
                            </div>
                        );
                    })}


                    <hr />
                    <p id="total"><strong>Total: ${totalCost}</strong></p>
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
                                    <p id="appt-date">{formattedDate}<br />{clickedTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*book now button*/}
                        <button type="button" className="purp-button" onClick={navigateToConfirmed}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Overview