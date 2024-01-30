import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/account.css";
import profilepic from "../assets/icons/icons8-person-female-100.png";
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import lock from "../assets/icons/icons8-password-100.png";
import apptActionIcon from "../assets/icons/apptaction.svg";
import PopupPassword from "../Components/PopUpPassword";
import PopupSignOut from "../Components/PopUpSignOut.js";

function Account() {
  function showAppointmentDetails() {
    const dropdown = document.querySelector(".apptDropdown");
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  }

  const navigateToAppointmentDetails = () =>
    console.log("inside navigateToAppointmentDetails");

  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const openButton = () => setIsButtonOpen(true);
  const closeButton = () => setIsButtonOpen(false);

  const [selectedCategory, setSelectedCategory] = useState("Past 1 month"); // Default to show all posts

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["Past 6 months", "Past Year", "All Time"];

  return (
    <div>
      <div className="profileContainer">
        <div className="profileTop">
          <div class="profile-picture-container">
            <img
              src={profilepic}
              alt="Profile picture"
              className="profile-picture"
            />
          </div>
          <h2>Bob Smith</h2>
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
              <p>(xxx) xxx-xxxx</p>
            </div>
            <div className="infoRow">
              <img src={email} alt="email icon" className="persIcons"></img>
              <p>email@gmail.com</p>
            </div>
            <div className="infoRow">
              <img src={lock} alt="password icon" className="persIcons"></img>
              <p>password</p>
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
            <tbody>
              {/* Fake appointment */}
              <tr>
                <td>May 15, 2024</td>
                <td>Simply Chic Hair</td>
                <td>Haircut</td>
                <td>Marissa S.</td>
                <td>
                  <div className="apptActionContainer">
                    <img
                      src={apptActionIcon}
                      alt="appointment menu"
                      className="apptActionIcon"
                      onClick={() => showAppointmentDetails()}
                    />
                    <Link to="/appointment/:id">
                      <button
                        onClick={() => navigateToAppointmentDetails()}
                        className="apptDropdown"
                      >
                        Cancel Appointment
                      </button>
                    </Link>
                    {/* Couldnt figure out how to put reschedule appt on dropdown. Maybe just have cancel option? */}
                  </div>
                </td>
              </tr>
              {/* Display "No Appointments" if there are no real appointments 
              <tr>
                <td colSpan="5" className="noAppts">
                  No Appointments
                </td>
              </tr>
              */}
            </tbody>
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
            <tbody>
              {/* Fake appointment */}
              <tr>
                <td>Sep 3, 2023</td>
                <td>Simply Chic Hair</td>
                <td>Full Balayage</td>
                <td>Jean C.</td>
                <td>
                  <div className="apptActionContainer">
                    <img
                      src={apptActionIcon}
                      alt="appointment menu"
                      className="apptActionIcon"
                      onClick={() => showAppointmentDetails()}
                    />
                    <Link to="/appointment/:id">
                      <button
                        onClick={() => navigateToAppointmentDetails()}
                        className="apptDropdown"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>

              {/* Display "No Appointments" if there are no real appointments 
              <tr>
                <td colSpan="5" className="noAppts">
                  No Appointments
                </td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="orderInfoContainer">
        <div className="infoRowTitle">
          <h3>Order History</h3>
        </div>
        <div className="orderHistory">
          <div className="order-dropdown">
            <select
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

            <div className="orderContainer">
              <p className="orderDate">11/15/23</p>
              <p>
                <strong>Processing</strong>
              </p>
              <Link to="/order_details" className="purp">
                View Details
              </Link>
            </div>
          </div>
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
