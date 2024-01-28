import "../Styles/checkout.css";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import { useState } from "react";

function Checkout() {
  // backend: check if user logged in. if logged in, get their info from the database and autofill in userAns
  // const [userAns, setUserAns] = useState({
  //   personal: {
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //   },
  //   address: { street: "", city: "", state: "", zip: "" },
  //   payment: {
  //     option: "",
  //     cardNumber: "",
  //     mm: "",
  //     yy: "",
  //     cvc: "",
  //     name: "",
  //   },
  // });

  const [selectedOption, setSelectedOption] = useState(null);

  // form val
  // const isAnyFieldEmpty = Object.values(userAns)
  //   .flat(Infinity)
  //   .some((value) => value === "");

  const validateValues = () => {};

  // radio button stuff
  const options = [
    { id: "applePay", label: "Pay with Apple Pay" },
    { id: "paypal", label: "Pay with Paypal" },
    { id: "card", label: "Add a new credit or debit card" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // dropdown content for cart
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
                <span>{itemName}</span>
                <br></br>
                <span style={{ fontSize: "13px" }}>quantity</span>
                <br></br>
                <span id="item-qty" className="bold poppins-bigger">
                  {item.qty}
                </span>
              </p>
            </div>
            <p className="align-right">${item.price}</p>
          </li>
        );
      })}
    </ul>
  );
  // drop down button
  const [dropdownVisible, setdropdownVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(270);

  const CartDropdown = () => {
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
          <h3>Items ordered ({tempData.length})</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {dropdownVisible && <OrderedItems />}
      </div>
    );
  };
  // calc totals
  const subtotal = () => {
    let t = 0;
    for (const cartItem of tempData) {
      for (const shopItem of tempShopData) {
        if (cartItem.id === shopItem.id) {
          t += shopItem.price;
        }
      }
    }
    return t;
  };
  const taxes = subtotal() * 0.06;
  const shipCost = 14;
  const total = subtotal() + taxes + shipCost;
  // console.log(`${subtotal()}, ${taxes}, ${shipCost}, ${total}`);

  // main stuff
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
          {options.map((option) => (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  name="options"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={handleOptionChange}
                />

                {option.label}
              </label>
            </div>
          ))}
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
                <p>${subtotal().toFixed(2)}</p>
                <p>Shipping & Handling</p>
                <p>${shipCost}</p>
                <p>Taxes</p>
                <p>${taxes.toFixed(2)}</p>
              </div>
              <hr />
              <div className="bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Link to={`/order_placed`}>
                <button disabled={false}>Place Order</button>
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
