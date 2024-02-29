import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../Styles/OrderDetails.css";
import ShopData from "../data/shop.json";
import { useParams } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function OrderDetails({ props }) {
  const location = useLocation();
  //const navigate = useNavigate();
  const [user, setUser] = useState(getUser());
  //const { id } = useParams();
  //console.log("active user: ", user);
  console.log("location.state: ", location.state);

  if (!location.state) {
    return <p>Error...</p>; // or handle the absence of data in some way
  }

  const order = location.state.order;

  const OrderedItems = () => (
    <div className="details">
      {/* make the "status:_____" dynamic later */}
      <p className="center">
        <strong>Status: {order.status}</strong>
      </p>
      <ul className="dropdown-content width">
        {order.cart.items.map((item, i) => {
          let itemName = "";
          let itemPic = "";

          for (const shopItem of ShopData) {
            if (item.id === shopItem.id) {
              itemName = shopItem.name;
              itemPic = shopItem.file;
            }
          }
          return (
            <li className="ordered-item" key={i}>
              <img
                src={require("../assets/images/shop/" + itemPic + ".png")}
                alt=""
              ></img>
              <div className="ordered-item-info">
                <p>
                  <span style={{ fontWeight: "bold" }}>{itemName}</span>
                  <br></br>
                  <span style={{ fontSize: "13px" }}>quantity</span>
                  <br></br>
                  <span id="item-qty">{item.qty}</span>
                </p>
              </div>
              <p className="align-right">${item.price}</p>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="payment-info">
        <div id="titles-left">
          <p>
            <strong>Order Placed:</strong>
          </p>
          <p>
            <strong>Subtotal:</strong>
          </p>
          <p>
            <strong>Shipping and Handling</strong>
          </p>
          <p>
            <strong>Taxes:</strong>
          </p>
          <p>
            <strong>Total:</strong>
          </p>
        </div>
        <div id="titles-right">
          <p>{new Date(Number(order.date)).toLocaleString()}</p>
          <p>${parseFloat(order.costs.subtotal).toFixed(2)}</p>
          <p>${parseFloat(order.costs.shipCost).toFixed(2)}</p>
          <p>${parseFloat(order.costs.taxes).toFixed(2)}</p>
          <p>${parseFloat(order.costs.total).toFixed(2)}</p>
        </div>
      </div>
      <hr />
      <div className="payment-info">
        <div id="titles-left">
          <p>
            <strong>Payment Method</strong>
          </p>
          <p>Visa ending in 1234</p>
        </div>
        <div id="titles-right">
          <p>
            <strong>Shipping Address</strong>
          </p>
          <p>
            {order.shippingInfo.name}
            <br />
            {order.shippingInfo.addressInfo.street}
            <br />
            {order.shippingInfo.addressInfo.city},{" "}
            {order.shippingInfo.addressInfo.state}{" "}
            {order.shippingInfo.addressInfo.zip}
          </p>
        </div>
      </div>
    </div>
  );

  {
    /* I don't think we need this funcitonality -Lilly 
  function CancelConfirm() {
    return (
      <div className="cancel-details">
        <p>Cancel this Order?</p>
        <p>
          This action cannot be undone. Please review your decision carefully
          before proceeding.
        </p>
        <div className="buttons">
          <button id="back">Go Back</button>
          <button id="confirm">Confirm</button>
        </div>
      </div>
    );
  }

  function Canceled() {
    return (
      <div className="cancel-details">
        <p>Your Order has been Canceled.</p>
        <p>
          Your order of 2 items has been canceled. A confirmation email will be
          sent within 24 hours.
        </p>
      </div>
    );
  }
  */
  }

  return (
    <div className="order-details-container">
      <h1>Order Details</h1>
      <OrderedItems />
      <Link
        to="/Account"
        style={{
          textDecorationLine: "none",
        }}
      >
        <button className="back-to-profile-btn">Back to Profile</button>
      </Link>
    </div>
  );
}

export default OrderDetails;
