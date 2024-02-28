import React, { useState } from "react";
import "../Styles/OrderDetails.css";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import { Link } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function OrderDetails() {
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const OrderedItems = () => (
    <div className="details">
      {/* make the "status:_____" dynamic later */}
      <p className="center">
        <strong>status: {tempData.status}</strong>
      </p>
      <ul className="dropdown-content width">
        {tempData.cart.items.map((item, i) => {
          let itemName = "";
          let itemPic = "";

          for (const shopItem of tempShopData) {
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
                  <span id="item-qty">{item.qty["$numberInt"]}</span>
                </p>
              </div>
              <p className="align-right">${item.price["$numberDouble"]}</p>
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
          <p>{new Date(Number(tempData.date["$numberDouble"])).toLocaleString()}</p>
          <p>${tempData.costs.subtotal["$numberDouble"]}</p>
          <p>${tempData.costs.shipCost["$numberInt"]}</p>
          <p>${tempData.costs.taxes["$numberDouble"]}</p>
          <p>${tempData.costs.total["$numberDouble"]}</p>
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
            {tempData.shippingInfo.name}
            <br />
            {tempData.shippingInfo.addressInfo.street}
            <br />
            {tempData.shippingInfo.addressInfo.city}, {tempData.shippingInfo.addressInfo.state} {tempData.shippingInfo.addressInfo.zip}
          </p>
        </div>
      </div>
    </div>
  );

  function OrderDetails() {
    return (
      <div>
        <OrderedItems />
      </div>
    );
  }

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

  return (
    <div className="order-details-container">
      <h1>Order Details</h1>
      <OrderDetails />
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
