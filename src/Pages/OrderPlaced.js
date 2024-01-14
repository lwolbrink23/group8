import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import checkICON from "../assets/icons/icons8-check-100.png";
import tempData from "../data/cart.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import React, { useState } from "react";
import "../Styles/orderplaced.css";

function OrderPlaced() {
  const OrderedItems = () => (
    <div class="dropdown-content">
      <p>img</p>
      <p>item name</p>
      <p>quantity</p>
      <p>#</p>
      <p>price</p>
    </div>
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
      <div class="dropdown">
        <div class="dropdown-btn" onClick={toggleVisibility}>
          <h2>Items ordered (#)</h2>
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
        <article>
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
    </div>
  );
}

export default OrderPlaced;
