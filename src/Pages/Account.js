import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/account.css";
import defaultProfilePic from "../assets/icons/icons8-person-female-100.png";
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import lock from "../assets/icons/icons8-password-100.png";
import apptActionIcon from "../assets/icons/apptaction.svg";
import PopupPassword from "../Components/PopUpPassword";
import PopupSignOut from "../Components/PopUpSignOut.js";
import OrderHistory from "../Components/OrderHistory.js";
import appointmentsData from "../data/appointments.json"; // Import your JSON file

function Account({ user }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(
    user || {
      name: "Jane Doe",
      phoneNumber: "123-456-7890",
      email: "email@email.com",
      password: "password",
    }
  );

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments or set them directly from the JSON file
    setAppointments(appointmentsData);
  }, []);

  // Function to render appointments
  const renderAppointments = (status) => {
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.status === status
    );

    if (filteredAppointments.length === 0) {
      return (
        <tr>
          <td colSpan="5" className="noAppts">
            No {status === "scheduled" ? "Scheduled" : "Appointment History"}{" "}
            Appointments
          </td>
        </tr>
      );
    }

    return filteredAppointments.map((appointment) => (
      <tr key={appointment.id}>
        <td>{appointment.date}</td>
        <td>{appointment.location}</td>
        <td>{appointment.services}</td>
        <td>{appointment.staff}</td>
        <td>
          <div className="apptActionContainer">
            <button
              className="apptActionButton"
              onClick={() => handleActionClick(appointment)}
            >
              {status === "scheduled" ? "Cancel Appointment" : "View Details"}
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  // Render scheduled appointments
  const renderScheduledAppointments = () => renderAppointments("scheduled");

  // Render appointment history
  const renderAppointmentHistory = () => renderAppointments("complete");

  // Function to handle appointment action click
  const handleActionClick = (appointment) => {
    if (appointment.status === "scheduled") {
      // Logic to cancel appointment
      console.log("Cancel Appointment clicked for ID:", appointment.id);
      navigate(`/appointment/${appointment.id}`);
    } else {
      // Logic to view appointment details
      console.log("View Details clicked for ID:", appointment.id);
      navigate(`/appointment/${appointment.id}`);
    }
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Past 1 month");
  const [selectedOrder, setSelectedOrder] = useState("Ascending");

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const openButton = () => setIsButtonOpen(true);
  const closeButton = () => setIsButtonOpen(false);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["Past 6 months", "Past Year", "All Time"];

  const handleOrder = (order) => {
    setSelectedOrder(order);
  };

  const orders = ["Descending"];

  return (
    <div>
      <div className="profileContainer">
        <div className="profileTop">
          <div class="profile-picture-container">
            <img
              src={defaultProfilePic}
              alt="Profile picture"
              className="profile-picture"
            />
          </div>
          <h2>{userData.name}</h2>
          <div className="buttonsContainer">
            <button type="button" className="editButton">
              Edit Profile
            </button>
            <button
              type="button"
              className="signoutButton"
              onClick={openButton}
            >
              Sign Out
            </button>
            <PopupSignOut isOpen={isButtonOpen} closePopup={closeButton} />
          </div>
        </div>
        <div className="persInfoContainer">
          <div className="linesofInfo">
            <div className="infoRowTitle">
              <h3>Personal Information</h3>
            </div>
            <div className="infoRow">
              <img src={phone} alt="phone icon" className="persIcons"></img>
              <p>{userData.phoneNumber}</p>
            </div>
            <div className="infoRow">
              <img src={email} alt="email icon" className="persIcons"></img>
              <p>{userData.email}</p>
            </div>
            <div className="infoRow">
              <img src={lock} alt="password icon" className="persIcons"></img>
              <p type="password">{"*".repeat(userData.password.length)}</p>{" "}
              {/* Hide password */}
              <button type="button" className="changePW" onClick={openContact}>
                Change
              </button>
              <PopupPassword isOpen={isContactOpen} closePopup={closeContact} />
            </div>
          </div>
        </div>
      </div>
      <div className="apptsInfoContainer">
        <div className="infoRowTitle">
          <h3>Scheduled Appointments</h3>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Services</th>
                <th>Staff</th>
                <th></th> {/* 3 dots column - DO NOT DELETE */}
              </tr>
            </thead>
            <tbody>{renderScheduledAppointments()}</tbody>
          </table>
        </div>

        <div className="infoRowTitle">
          <h3>Appointment History</h3>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Services</th>
                <th>Staff</th>
                <th></th> {/* 3 dots column - DO NOT DELETE */}
              </tr>
            </thead>
            <tbody>{renderAppointmentHistory()}</tbody>
          </table>
        </div>
      </div>

      <div className="orderInfoContainer">
        <div className="infoRowTitle">
          <h3>Order History</h3>
        </div>
        <div className="order-dropdown-container">
          <div className="order-dropdown">
            <select
              className="custom-dropdown"
              id="category"
              onChange={(e) => handleFilter(e.target.value)}
              value={selectedCategory}
            >
              <option value="Past 1 month">Past 1 month</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="order-dropdown">
            {/* ORDER: ASCENDING OR DESCENDING */}
            <select
              className="custom-dropdown"
              id="order"
              onChange={(e) => handleOrder(e.target.value)}
              value={selectedOrder}
            >
              <option value="Ascending">Ascending</option>
              {orders.map((order) => (
                <option key={order} value={order}>
                  {order.charAt(0).toUpperCase() + order.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="orderHistory">
          <OrderHistory></OrderHistory>
          {/* Display if there are no orders 
          <div className="noOrders">
            <p>No Order History</p>
            <Link to="/shop">
              <button class="shopButton">Shop Now</button>
            </Link>
          </div>
            */}
        </div>
      </div>
    </div>
  );
}

export default Account;
