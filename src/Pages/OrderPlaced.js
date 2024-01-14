import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import checkICON from "../assets/icons/icons8-check-100.png";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import React, { useState } from "react";
import "../Styles/orderplaced.css";
import tempPic from "../assets/images/shop/color-protection-kit.png";

function OrderPlaced() {
  const OrderedItems = () => (
    <ul className="dropdown-content">
      {tempData.map((item, i) => {
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
                {itemName}
                <br></br>quantity<br></br>
                {item.qty}
              </p>
            </div>
            <p className="align-right">${item.price}</p>
          </li>
        );
      })}
    </ul>
  );
  const CartDropdown = () => {
    const [dropdownVisible, setdropdownVisible] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(270);

    const toggleVisibility = () => {
      setdropdownVisible(!dropdownVisible);
      setArrowRotation(arrowRotation === 0 ? 270 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={toggleVisibility}>
          <h2>Items ordered ({tempData.length})</h2>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {dropdownVisible && <OrderedItems />}
      </div>
    );
  };
  return (
    <div id="order-placed">
      {/* title */}
      <div className="title-container trans-white">
        <h1>Checkout</h1>
        <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
      </div>
      {/* blurb */}
      <main>
        <article className="center-text">
          <div className="icon-info">
            <img src={checkICON} alt=""></img>
            <h3>Order Placed</h3>
          </div>
          <p>
            Thank you for choosing The Suite Spot Salon <br></br>for your beauty
            and grooming needs.<br></br> You will receive a confirmation email
            shortly.
          </p>

          <button className="button">Back to Home</button>
        </article>
        {/* order summary */}
        <CartDropdown />
      </main>
      <div className="extra-space"></div>
      <div className="extra-space"></div>
    </div>
  );
}

export default OrderPlaced;
