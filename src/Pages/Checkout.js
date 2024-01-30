import "../Styles/checkout.css";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import { useEffect, useState } from "react";

function Checkout() {
  // backend: check if user logged in. if logged in, get their info from the database and autofill in userAns
  const [enableSubmit, setEnableSubmit] = useState(false);

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
  const areAllFieldsEntered = () => {
    // Check if all fields are non-empty
    return (
      Object.values(personalInfo).every((value) => value !== "") &&
      Object.values(addressInfo).every((value) => value !== "") &&
      Object.values(paymentInfo).every((value) => value !== "")
    );
  };
  const areAllErrorsEmpty = () => {
    // Check if all strings in error states are empty
    return (
      Object.values(personalErr).every((value) => value === "") &&
      Object.values(addressErr).every((value) => value === "") &&
      Object.values(paymentErr).every((value) => value === "")
    );
  };

  useEffect(() => {
    console.log(`all err: ${areAllErrorsEmpty()}`);
    console.log(`all fields: ${areAllFieldsEntered()}`);
    areAllErrorsEmpty() && areAllFieldsEntered()
      ? setEnableSubmit(true)
      : setEnableSubmit(false);
  }, [
    personalInfo,
    addressInfo,
    paymentInfo,
    personalErr,
    addressErr,
    paymentErr,
  ]);

  // update states
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
    let errMsg = "";
    switch (type) {
      // --------personal info--------
      case "personal":
        updatePersonalInfo(propertyName, value);
        // make sure no numbers
        if (propertyName === "firstName" || propertyName === "lastName") {
          /\d/.test(value) && (errMsg = "Names must not contain numbers.");
        }
        // make sure 10 digits
        else {
          !/^\d{10}$/.test(value) &&
            (errMsg = "Please enter a 10-digit number.");
        }
        updatePersonalErr(propertyName, errMsg);
        break;
      // --------address info--------
      case "address":
        updateAddressInfo(propertyName, value);
        // make sure no numbers
        if (propertyName === "city") {
          /\d/.test(value) && (errMsg = "City name must not contain numbers.");
        }
        // make sure valid state --NOT DONE
        else if (propertyName === "state") {
          !/^\d{10}$/.test(value) && (errMsg = "Please enter a valid state");
        }
        // make sure 5 digits
        else if (propertyName === "zip") {
          !/^\d{5}$/.test(value) && (errMsg = "Please enter a 5-digit number.");
        }
        updateAddressErr(propertyName, errMsg);
        break;
      // --------payment info--------
      case "payment":
        updatePaymentInfo(propertyName, value);
        //make sure only certain amount of digits
        if (propertyName === "cardNum") {
          !/^\d{16}$/.test(value) &&
            (errMsg = "Please enter a 16-digit number.");
        }
        // make sure only numbers, 2 digits
        else if (propertyName === "mm" || propertyName === "yy") {
          !/^\d{2}$/.test(value) && (errMsg = "Please enter a 2-digit number.");
        }
        // make sure only numbers, 3 digits
        else if (propertyName === "cvc") {
          !/^\d{3}$/.test(value) && (errMsg = "Please enter a 3-digit number.");
        }
        updatePaymentErr(propertyName, errMsg);
        break;
      default:
    }
  };
  // debug handle change function.
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
          {/* first name input */}
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
          {/* last name input */}
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
          {/* phone input */}
          <div>
            <input
              type="text"
              placeholder="Phone*"
              onChange={(e) =>
                handleChange("personal", "phone", e.target.value)
              }
            />
          </div>
          {personalErr.phone && (
            <p style={{ color: "red" }}>{personalErr.phone}</p>
          )}
          {/* street address input */}
          <div>
            <input
              type="text"
              placeholder="Street Address*"
              onChange={(e) =>
                handleChange("address", "street", e.target.value)
              }
            />
          </div>
          {/* city input */}
          <div className="ct-state">
            <input
              type="text"
              placeholder="City*"
              onChange={(e) => handleChange("address", "city", e.target.value)}
            />
            {addressErr.city && (
              <p style={{ color: "red" }}>{addressErr.city}</p>
            )}
            {/* state input */}
            <input
              type="text"
              placeholder="State*"
              onChange={(e) => handleChange("address", "state", e.target.value)}
            />
            {addressErr.state && (
              <p style={{ color: "red" }}>{addressErr.state}</p>
            )}
            {/* zip input */}
            <input
              type="text"
              placeholder="ZIP Code*"
              onChange={(e) => handleChange("address", "zip", e.target.value)}
            />
            {addressErr.zip && <p style={{ color: "red" }}>{addressErr.zip}</p>}
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
          {/* card input */}
          <div>
            <input
              type="text"
              placeholder="Card Number*"
              onChange={(e) =>
                handleChange("payment", "cardNum", e.target.value)
              }
            />
          </div>
          {paymentErr.cardNum && (
            <p style={{ color: "red" }}>{paymentErr.cardNum}</p>
          )}
          {/* mm/yy CVC */}
          <div className="cc-info">
            <input
              type="text"
              placeholder="mm*"
              onChange={(e) => handleChange("payment", "mm", e.target.value)}
            />
            {paymentErr.mm && <p style={{ color: "red" }}>{paymentErr.mm}</p>}
            <input
              type="text"
              placeholder="yy*"
              onChange={(e) => handleChange("payment", "yy", e.target.value)}
            />
            {paymentErr.yy && <p style={{ color: "red" }}>{paymentErr.yy}</p>}
            <input
              type="text"
              placeholder="CVC*"
              onChange={(e) => handleChange("payment", "cvc", e.target.value)}
            />
            {paymentErr.cvc && <p style={{ color: "red" }}>{paymentErr.cvc}</p>}
          </div>
          {/* name on card */}
          <div>
            <input
              type="text"
              placeholder="Name on Card*"
              onChange={(e) => handleChange("payment", "name", e.target.value)}
            />
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
              {/* submit button */}
              {/* BACKEND: make function to save order into database */}
              <Link to={`/order_placed`}>
                <button
                  disabled={!enableSubmit}
                  style={enableSubmit ? { opacity: "1" } : { opacity: "0.5" }}
                >
                  Place Order
                </button>
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
