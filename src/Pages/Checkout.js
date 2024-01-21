import "../Styles/checkout.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import { useState } from "react";
function Checkout() {
  // dropdown content
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
  );
  // drop down
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
    <div id="checkout">
      <Shopheader htitle={"Checkout"} />
      <main>
        <div id="shipping-info" className="cardbox">
          <h3>Shipping Information</h3>
          <div>
            <input type="text" placeholder="First Name*" required />
          </div>
          <div>
            <input type="text" placeholder="Last Name*" required />
          </div>
          <div>
            <input type="text" placeholder="Phone*" required />
          </div>
          <div>
            <input type="text" placeholder="Street Address*" required />
          </div>
          <div className="ct-state">
            <input type="text" placeholder="City*" required />
            <input type="text" placeholder="State*" required />
            <input type="text" placeholder="ZIP Code*" required />
          </div>
        </div>
        <div id="payment-info" className="cardbox">
          <h3>Payment Method</h3>
          <p>options here</p>
          <div>
            <input type="text" placeholder="Card Number*" required />
          </div>
          <div className="cc-info">
            <input type="text" placeholder="mm*" required />

            <input type="text" placeholder="yy*" required />

            <input type="text" placeholder="CVC*" required />
          </div>
          <div>
            <input type="text" placeholder="Name on Card*" required />
          </div>
        </div>
        <div id="summary">
          <div id="cart-items">
            <h3>Review Order</h3>
            <CartDropdown />
          </div>
          <div id="checkout-sum">
            <h3>Finish Checkout</h3>
            <div className="cardbox">
              <div>
                <p>Subtotal</p>
                <p>$###</p>
                <p>Shipping & Handling</p>
                <p>$###</p>
                <p>Taxes</p>
                <p>$###</p>
              </div>
              <hr />
              <div>
                <p>Total</p>
                <p>$###</p>
              </div>
              <Link to={`/order_placed`}>
                <button>Place Order</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="extra-space"></div>
    </div>
  );
}
export default Checkout;
