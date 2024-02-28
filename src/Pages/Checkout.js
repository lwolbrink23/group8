import "../Styles/checkout.css";
import Shopheader from "../Components/Shopheader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isValidUSState } from "../data/validStates";
import CustomDropdown from "../Components/CustomDropdown";
import purplePlusIcon from "../assets/icons/purple-plus.svg";
import purpleCheckIcon from "../assets/icons/purple-check.svg";
import { BACKEND_ADDRESS } from "../App";
import { fetchData, updateUserCartDB } from "./functions/shopFunctions";
import Cookies from "js-cookie";
import { fetchCartData, countItems } from "./functions/shopFunctions";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Checkout() {
  // backend: check if user logged in. if logged in, get their info from the database and autofill in userAns
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [shopData, setShopData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [giftcards, setGiftcards] = useState([]);
  const [user, setUser] = useState(getUser());

  const navigate = useNavigate();
  console.log("active user: ", user);

  useEffect(() => {
    fetchData("/shop", setShopData);
    fetchCartData(setCartItems, user, "cart");
    fetchCartData(setGiftcards, user, "giftcard");
  }, []);

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

  const validateValues = () => {
    console.log("validate on blur & on clicking submit");
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
          const digits = value.replace(/\D/g, "");
          let formattedPhoneNumber = "";

          // Format the digits according to the pattern
          if (digits.length <= 3) {
            formattedPhoneNumber = `(${digits}`;
          } else if (digits.length > 3 && digits.length <= 6) {
            formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
          } else if (digits.length > 6) {
            formattedPhoneNumber = `(${digits.slice(0, 3)}) ${digits.slice(
              3,
              6
            )}-${digits.slice(6, 10)}`;
          }
          updatePersonalInfo(propertyName, formattedPhoneNumber);
        }
        updatePersonalErr(propertyName, errMsg);
        break;
      // --------address info--------
      case "address":
        updateAddressInfo(propertyName, value);
        // make sure no numbers
        if (propertyName === "city") {
          /\d/.test(value) && (errMsg = "City name must not contain numbers.");
        } else if (propertyName === "state") {
          !isValidUSState(value) && (errMsg = "Please enter a valid state");
        }
        // make sure 5 digits
        else if (propertyName === "zip") {
          let digits = value.replace(/\D/g, "");
          digits = digits.slice(0, 5);
          updateAddressInfo(propertyName, digits);
          !/^\d{5}$/.test(digits) &&
            (errMsg = "Please enter a 5-digit number.");
        }
        updateAddressErr(propertyName, errMsg);
        break;
      // --------payment info--------
      case "payment":
        updatePaymentInfo(propertyName, value);
        //make sure only certain amount of digits
        if (propertyName === "cardNum") {
          let digits = value.replace(/\D/g, "");
          let formattedString = "";
          if (digits.length <= 4) {
            formattedString = digits;
          } else if (digits.length > 4 && digits.length <= 8) {
            formattedString = `${digits.slice(0, 4)} ${digits.slice(4)}`;
          } else if (digits.length > 8 && digits.length <= 12) {
            formattedString = `${digits.slice(0, 4)} ${digits.slice(
              4,
              8
            )} ${digits.slice(8)}`;
          } else if (digits.length > 12) {
            formattedString = `${digits.slice(0, 4)} ${digits.slice(
              4,
              8
            )} ${digits.slice(8, 12)} ${digits.slice(12)}`;
          }
          formattedString = formattedString.slice(0, 19);
          updatePaymentInfo(propertyName, formattedString);
          // !/^\d{16}$/.test(value) &&
          //   (errMsg = "Please enter a 16-digit number.");
        }
        // make sure only numbers, 2 digits
        else if (propertyName === "mm" || propertyName === "yy") {
          let digits = value.replace(/\D/g, "");
          digits = digits.slice(0, 2);
          updatePaymentInfo(propertyName, digits);
          if (propertyName === "mm" && (digits < 1 || digits > 12)) {
            errMsg = "Please enter a valid month (1-12)";
          } else if (
            propertyName === "yy" &&
            digits < new Date().getFullYear() % 100
          ) {
            errMsg = "Please enter a valid year";
          }
        }
        // make sure only numbers, 3 digits
        else if (propertyName === "cvc") {
          let digits = value.replace(/\D/g, "");
          digits = digits.slice(0, 3);
          updatePaymentInfo(propertyName, digits);
          !/^\d{3}$/.test(digits) &&
            (errMsg = "Please enter a 3-digit number.");
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
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      option: event.target.value,
    }));
  };
  const addNewCard = () => {
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      option: "card",
    }));
  };
  // dropdown content for cart
  const OrderedItems = () => {
    const mergedItems = [...cartItems, ...giftcards];
    return (
      <ul className="dropdown-content">
        {mergedItems.map((item, i) => {
          const isGift = item.id === "giftcard";
          let itemName = isGift ? "Gift Card" : "";
          let itemPic = isGift ? "giftcard" : "";
          let itemPrice = isGift ? item.price : 0;
          if (!isGift) {
            for (const shopItem of shopData) {
              if (item.id === shopItem.id) {
                itemName = shopItem.name;
                itemPic = shopItem.file;
                itemPrice = shopItem.price;
              }
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
              <p className="align-right">${itemPrice}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  // calc totals
  const subtotal = () => {
    let t = 0;
    for (const cartItem of cartItems) {
      for (const shopItem of shopData) {
        if (cartItem.id === shopItem.id) {
          t += shopItem.price * cartItem.qty;
        }
      }
    }
    giftcards.forEach((item) => {
      t += item.price * item.qty;
    });
    return t;
  };
  const taxes = subtotal() * 0.06;
  const shipCost = 14;
  const total = subtotal() + taxes + shipCost;
  // console.log(`${subtotal()}, ${taxes}, ${shipCost}, ${total}`);

  // handle place order
  const handlePlaceOrder = async () => {
    // put a price in each item in cartItems
    const cartWithData = cartItems.map((item) => {
      const product = shopData.find((product) => product.id === item.id);
      return {
        ...item,
        price: product ? product.price : null,
      };
    });

    const newOrder = {
      userID: user ? user.id : "",
      status: "Processing",
      cart: { items: cartWithData, giftcards },
      costs: {
        subtotal: subtotal(),
        taxes: taxes,
        shipCost: shipCost,
        total: total,
      },
      shippingInfo: {
        name: `${personalInfo.firstName} ${personalInfo.lastName}`,
        phone: personalInfo.phone,
        addressInfo: {
          street: addressInfo.street,
          city: addressInfo.city,
          state: addressInfo.state,
          zip: addressInfo.zip,
        },
      },
      date: Date.now(),
    };

    fetch(`${BACKEND_ADDRESS}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to insert order into the database");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Order inserted successfully:", data);
        navigate(`/order_placed/${data.orderId}`);
        Cookies.remove("cart");
        Cookies.remove("giftcard");
        updateUserCartDB(user.id, [], "cart");
        updateUserCartDB(user.id, [], "giftcard");
      })
      .catch((error) => {
        console.error("Error inserting order:", error);
      });
  };

  // main stuff
  return (
    <div id="checkout">
      <Shopheader
        htitle={"Checkout"}
        qty={countItems([...cartItems, ...giftcards])}
      />
      <main>
        <div id="shipping-info" className="cardbox">
          <h3>Shipping Information</h3>
          {/* first name input */}
          <div>
            <input
              type="text"
              placeholder="First Name*"
              value={personalInfo.firstName}
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
              value={personalInfo.lastName}
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
              value={personalInfo.phone}
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
              value={addressInfo.street}
              onChange={(e) =>
                handleChange("address", "street", e.target.value)
              }
            />
          </div>
          {/* city input */}
          <div className="ct-state">
            <div>
              <input
                type="text"
                placeholder="City*"
                value={addressInfo.city}
                onChange={(e) =>
                  handleChange("address", "city", e.target.value)
                }
              />
              {addressErr.city && (
                <p style={{ color: "red" }}>{addressErr.city}</p>
              )}
            </div>
            {/* state input */}
            <div>
              <input
                type="text"
                placeholder="State*"
                value={addressInfo.state}
                onChange={(e) =>
                  handleChange("address", "state", e.target.value)
                }
              />
              {addressErr.state && (
                <p style={{ color: "red" }}>{addressErr.state}</p>
              )}
            </div>
            {/* zip input */}
            <div>
              <input
                type="text"
                placeholder="ZIP Code*"
                value={addressInfo.zip}
                onChange={(e) => handleChange("address", "zip", e.target.value)}
              />
              {addressErr.zip && (
                <p style={{ color: "red" }}>{addressErr.zip}</p>
              )}
            </div>
          </div>
        </div>
        <div id="payment-info" className="cardbox">
          <h3>Payment Method</h3>
          {/* payment method radio */}
          {options.map((option) => {
            const isCard = option.id === "card";
            return (
              <div className="radio-container" key={option.id}>
                {isCard && (
                  <img
                    src={
                      paymentInfo.option === option.id
                        ? purpleCheckIcon
                        : purplePlusIcon
                    }
                    alt=""
                    onClick={addNewCard}
                  ></img>
                )}
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={option.id}
                    checked={paymentInfo.option === option.id}
                    onChange={handleOptionChange}
                    className={isCard && "last-radio"}
                  />

                  {option.label}
                </label>
              </div>
            );
          })}
          {/* card input */}
          <div className={paymentInfo.option !== "card" && "hide-fields"}>
            <div>
              <input
                type="text"
                placeholder="Card Number*"
                value={paymentInfo.cardNum}
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
              <div>
                <input
                  type="text"
                  placeholder="mm*"
                  value={paymentInfo.mm}
                  onChange={(e) =>
                    handleChange("payment", "mm", e.target.value)
                  }
                />
                {paymentErr.mm && (
                  <p style={{ color: "red" }}>{paymentErr.mm}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="yy*"
                  value={paymentInfo.yy}
                  onChange={(e) =>
                    handleChange("payment", "yy", e.target.value)
                  }
                />
                {paymentErr.yy && (
                  <p style={{ color: "red" }}>{paymentErr.yy}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="CVC*"
                  value={paymentInfo.cvc}
                  onChange={(e) =>
                    handleChange("payment", "cvc", e.target.value)
                  }
                />
                {paymentErr.cvc && (
                  <p style={{ color: "red" }}>{paymentErr.cvc}</p>
                )}
              </div>
            </div>
            {/* name on card */}
            <div>
              <input
                type="text"
                placeholder="Name on Card*"
                value={paymentInfo.name}
                onChange={(e) =>
                  handleChange("payment", "name", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div id="summary">
          <div id="cart-items">
            <h3>Review Order</h3>
            <CustomDropdown
              title={`Items Ordered (${countItems([
                ...cartItems,
                ...giftcards,
              ])})`}
              ContentComponent={OrderedItems}
              icon={"white-arrow.svg"}
            />
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
              <button
                disabled={!enableSubmit}
                style={enableSubmit ? { opacity: "1" } : { opacity: "0.5" }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="extra-space"></div>
    </div>
  );
}
export default Checkout;
