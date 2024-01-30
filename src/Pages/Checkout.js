import "../Styles/checkout.css";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import { useEffect, useState } from "react";

function Checkout() {
  // backend: check if user logged in. if logged in, get their info from the database and autofill in userAns

  // user inputs
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [addressInfo, setAddressInfo] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    option: "",
    cardNum: "",
    mm: "",
    yy: "",
    cvc: "",
    name: "",
  });

  // errors
  const [personalErr, setPersonalErr] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [addressErr, setAddressErr] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentErr, setPaymentErr] = useState({
    option: "",
    cardNum: "",
    mm: "",
    yy: "",
    cvc: "",
    name: "",
  });

  const [selectedOption, setSelectedOption] = useState(null);

  // form val
  // // make sure every field is filled & no errors
  // const isAnyFieldEmpty = Object.values(userAns)
  //   .flat(Infinity)
  //   .some((value) => value === "");
  const updatePersonalInfo = (propertyName, value) => {
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };
  const updateAddressInfo = (propertyName, value) => {
    setAddressInfo((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };
  const updatePaymentInfo = (propertyName, value) => {
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };
  const updatePersonalErr = (propertyName, value) => {
    setPersonalErr((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };
  const updateAddressErr = (propertyName, value) => {
    setAddressErr((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };
  const updatePaymentErr = (propertyName, value) => {
    setPaymentErr((prevInfo) => ({
      ...prevInfo,
      [propertyName]: value,
    }));
  };

  const handleChange = (type, propertyName, value) => {
    let errOccured = false;
    switch (type) {
      // --------personal info--------
      case "personal":
        updatePersonalInfo(propertyName, value);
        switch (propertyName) {
          case "firstName":
            // make sure no numbers
            if (/\d/.test(value)) {
              updatePersonalErr(propertyName, "Names must not contain numbers");
              errOccured = true;
            }
            break;
          case "phone":
            // make sure only numbers
            break;
          default:
            break;
        }
        !errOccured && updatePersonalErr(propertyName, "");
        break;
      // --------address info--------
      case "address":
        updateAddressInfo(propertyName, value);
        switch (propertyName) {
          case "city":
            // make sure no numbers
            break;
          case "state":
            // make sure only in certain values
            break;
          case "ZIP":
            // make sure only numbers
            break;
          default:
            break;
        }
        break;
      // --------payment info--------
      case "payment":
        updatePaymentInfo(propertyName, value);
        switch (propertyName) {
          case "cardNum":
            // make sure only numbers
            //make sure only certain amount of digits
            break;
          case "mm":
            // make sure only numbers, 2 digits
            break;
          case "yy":
            // make sure only numbers, 2 digits
            break;
          case "cvc":
            // make sure only numbers, 3 digits
            break;
          default:
            break;
        }
        break;
      default:
      // Handle default case or do nothing
    }
  };
  // debug handle change function
  // useEffect(() => {
  //   console.log(personalInfo);
  // }, [personalInfo]);

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
            <input
              type="text"
              placeholder="First Name*"
              required
              onChange={(e) =>
                handleChange("personal", "firstName", e.target.value)
              }
            />
          </div>
          {personalErr.firstName && (
            <p style={{ color: "red" }}>{personalErr.firstName}</p>
          )}
          <div>
            <input
              type="text"
              placeholder="Last Name*"
              onChange={(e) =>
                handleChange("personal", "lastName", e.target.value)
              }
            />
          </div>
          {personalErr.lastName && (
            <p style={{ color: "red" }}>{personalErr.lastName}</p>
          )}
          <div>
            <input
              type="text"
              placeholder="Phone*"
              onChange={(e) =>
                handleChange("personal", "phone", e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Street Address*"
              onChange={(e) =>
                handleChange("address", "street", e.target.value)
              }
            />
          </div>
          <div className="ct-state">
            <input
              type="text"
              placeholder="City*"
              onChange={(e) => handleChange("address", "city", e.target.value)}
            />
            <input
              type="text"
              placeholder="State*"
              onChange={(e) => handleChange("address", "state", e.target.value)}
            />

            <input
              type="text"
              placeholder="ZIP Code*"
              onChange={(e) => handleChange("address", "zip", e.target.value)}
            />
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
            <input
              type="text"
              placeholder="Card Number*"
              onChange={(e) =>
                handleChange("payment", "cardNum", e.target.value)
              }
            />
          </div>
          <div className="cc-info">
            <input
              type="text"
              placeholder="mm*"
              onChange={(e) => handleChange("payment", "mm", e.target.value)}
            />

            <input
              type="text"
              placeholder="yy*"
              onChange={(e) => handleChange("payment", "yy", e.target.value)}
            />

            <input
              type="text"
              placeholder="CVC*"
              onChange={(e) => handleChange("payment", "cvc", e.target.value)}
            />
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
