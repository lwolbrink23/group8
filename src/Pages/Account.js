import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../Styles/account.css";
import defaultProfilePic from "../assets/icons/icons8-person-female-100.png";
import phone from "../assets/icons/icons8-phone-96.png";
import email from "../assets/icons/icons8-email-100 (1).png";
import lock from "../assets/icons/icons8-password-100.png";
import PopupPassword from "../Components/PopUpPassword";
import PopupSignOut from "../Components/PopUpSignOut.js";
import OrderHistory from "../Components/OrderHistory.js";
import { fetchApptsDB, fetchOrdersDB } from "./functions/accountFunctions";
import { getUser } from "./functions/generalFunctions";

function Account({ props }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(getUser());
  const [appointments, setAppointments] = useState([]);
  const [dbOrders, setdbOrders] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null); // do not delete this variable even though it says unused!
  // ****^ do not delete this variable even though it says unused! It is used in the handleActionClick function

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const userId = user.id;
          navigate(`/account/${userId}`); // always displays user id in URL

          // Call the fetch function when the component mounts
          const apptDBResult = await fetchApptsDB(user.id);
          setAppointments(apptDBResult);
          console.log("appointments: ", apptDBResult);

          const ordersDBResult = await fetchOrdersDB(user.id);
          setdbOrders(ordersDBResult);
          console.log("orders: ", ordersDBResult);

          setdbOrders(ordersDBResult);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, [user, navigate]);

  const handleLogout = () => {
    setIsButtonOpen(true);
    localStorage.removeItem("user");
    setUser(null);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Function to render appointments
  const renderAppointments = (status) => {
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.status === status
    );

    if (filteredAppointments.length === 0) {
      return (
        <tr key="noAppointments">
          <td colSpan="5" className="noAppts" key="noAppointmentsTd">
            No {status === "scheduled" ? "Scheduled" : "Appointments"}
          </td>
        </tr>
      );
    }

    return (
      <>
        {filteredAppointments.map((appointment) => {
          const date = new Date(appointment.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          return (
            <tr key={appointment.id}>
              <td key="filteredappts1">{formattedDate}</td>
              <td key="filteredappts2" >{truncateText(appointment.location, 16)}</td>
              <td key="filteredappts3" className="servicecolumn">
                {truncateText(appointment.services, 24)}
              </td>{" "}
              {/* Adjust the character limit as needed */}
              <td key="filteredappts4" className="staffcolumn">{appointment.staff}</td>
              <td key="filteredappts5">
                <div className="apptActionContainer">
                  <button
                    className="apptActionButton"
                    onClick={() => handleActionClick(appointment)}
                  >
                    {status === "scheduled" ? "View Details" : "View Details"}
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  const renderScheduledAppointments = () => renderAppointments("scheduled");
  const renderAppointmentHistory = () => renderAppointments("cancelled");

  // Function to handle appointment view details button click & pass state to next page
  const handleActionClick = (appointment) => {
    setSelectedAppointment(appointment);
    if (appointment.status === "scheduled") {
      console.log("View Details clicked for ID:", appointment.id);
      navigate(`/appointment/${appointment.id}`, {
        state: {
          id: appointment.id,
          status: appointment.status,
          action: "cancel",
          date: appointment.date,
          time: appointment.time,
          location: appointment.location,
          services: appointment.services,
          staff: appointment.staff,
          duration: appointment.duration,
          price: appointment.price,
          provProfId: appointment.provProfId,
          provProfPic: appointment.provProfPic,
        },
      });
    } else {
      console.log("View Details clicked for ID:", appointment.id);
      navigate(`/appointment/${appointment.id}`, {
        state: {
          id: appointment.id,
          status: appointment.status,
          action: "view",
          date: appointment.date,
          time: appointment.time,
          location: appointment.location,
          services: appointment.services,
          staff: appointment.staff,
          duration: appointment.duration,
          price: appointment.price,
          provProfId: appointment.provProfId, // the ID on the provider profile page
          provProfPic: appointment.provProfPic, // the profile picture of the provider
        },
      });
    }
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Past 1 month");
  const [selectedOrder, setSelectedOrder] = useState("Newest to Oldest");

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const closeButton = () => setIsButtonOpen(false);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["Past 6 months", "Past Year", "All Time"];

  const handleOrder = (order) => {
    setSelectedOrder(order);
  };

  const orders = ["Oldest to Newest"];

  return (
    <div>
      {user ? (
        <>
          {user && user.name ? ( // Check if user is not null and has the 'name' property
            <div>
              <div className="profileContainer">
                <div className="profileTop">
                  <div className="profile-picture-container">
                    <img
                      src={defaultProfilePic}
                      alt="Profile"
                      className="profile-picture"
                    />
                  </div>
                  <h2>{user.name}</h2>
                  <div className="buttonsContainer">
                    <button className="signoutButton" onClick={handleLogout}>
                      Sign Out
                    </button>
                    <PopupSignOut
                      isOpen={isButtonOpen}
                      closePopup={closeButton}
                    />
                  </div>
                </div>
                <div className="persInfoContainer">
                  <div className="linesofInfo">
                    <div className="infoRowTitle">
                      <h3>Personal Information</h3>
                    </div>
                    <div className="infoRow">
                      <img
                        src={phone}
                        alt="phone icon"
                        className="persIcons"
                      ></img>
                      <p>{user.phoneNumber}</p>
                    </div>
                    <div className="infoRow">
                      <img
                        src={email}
                        alt="email icon"
                        className="persIcons"
                      ></img>
                      <p>{user.email}</p>
                    </div>
                    <div className="infoRow">
                      <img
                        src={lock}
                        alt="password icon"
                        className="persIcons"
                      ></img>
                      <p type="password">{"*".repeat(user.password.length)}</p>{" "}
                      {/* Hide password */}
                      <button
                        type="button"
                        className="changePW"
                        onClick={openContact}
                      >
                        Change
                      </button>
                      <PopupPassword
                        isOpen={isContactOpen}
                        closePopup={closeContact}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="apptsInfoContainer">
                <div className="infoRowTitle">
                  <h3>Scheduled Appointments</h3>
                </div>
                <div className="table">
                  <table className="tablewidth">
                    <thead>
                      <tr key="schedTable">
                        <th key="schedTable1">Date</th>
                        <th key="schedTable2" >Location</th>
                        <th key="schedTable3" className="servicecolumn">Services</th>
                        <th key="schedTable4" className="staffcolumn">Staff</th>
                        <th key="schedTable5"></th>
                        {/* ^View Details Button Column - DO NOT DELETE */}
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
                      <tr key="historyTable">
                        <th key="historyTable1">Date</th>
                        <th key="historyTable2">Location</th>
                        <th key="historyTable3" className="servicecolumn">Services</th>
                        <th key="historyTable4" className="staffcolumn">Staff</th>
                        <th key="historyTable5"></th>{" "}
                        {/* ^View Details Button Column - DO NOT DELETE */}
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
                      <option value="Ascending">Newest to Oldest</option>
                      {orders.map((order) => (
                        <option key={order} value={order}>
                          {order.charAt(0).toUpperCase() + order.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="orderHistory">
                  <OrderHistory dbOrders={dbOrders}></OrderHistory>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading error... user data is null.</p> // or any loading indicator if userData is still null
          )}
        </>
      ) : (
        <div>
          <p>Please log in to view your account.</p>
          <Link to="/login">Log In</Link>
        </div>
      )}
    </div>
  );
}

export default Account;
