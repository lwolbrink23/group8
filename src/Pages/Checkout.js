import "../Styles/checkout.css";
import Shopheader from "../Components/Shopheader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isValidUSState } from "../data/validStates";
import CustomDropdown from "../Components/CustomDropdown";
import purplePlusIcon from "../assets/icons/purple-plus.svg";
import purpleCheckIcon from "../assets/icons/purple-check.svg";
import { BACKEND_ADDRESS } from "../App";
import dropDownArrow from "../assets/icons/purple-arrow.svg";
import {
  fetchData,
  updateUserCartDB,
  updateInfo,
  validateAddress,
} from "./functions/shopFunctions";
import Cookies from "js-cookie";
import { fetchCartData, countItems } from "./functions/shopFunctions";
import { getUser } from "./functions/generalFunctions";
import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_MAP_API_KEY = "AIzaSyB2LNpd3jJc9IAULUcx031ac2E2vQCIWOE";

function Checkout() {
  // backend: check if user logged in. if logged in, get their info from the database and autofill in userAns
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [shopData, setShopData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [giftcards, setGiftcards] = useState([]);
  const user = getUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("active user: ", user);
    fetchData("/shop", setShopData);
    fetchCartData(setCartItems, user, "cart");
    fetchCartData(setGiftcards, user, "giftcard");
  }, []);

  // user inputs
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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
    email: "",
  });
  const [addressErr, setAddressErr] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    address: "",
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
    let payment = paymentInfo.option;

    if (paymentInfo.option === "card") {
      payment = Object.values(paymentInfo).every((value) => value !== "");
    }
    return (
      Object.values(personalInfo).every((value) => value !== "") &&
      Object.values(addressInfo).every((value) => value !== "") &&
      payment
    );
  };
  const areAllErrorsEmpty = () => {
    // Check if all strings in error states are empty
    let paymentErrV = paymentInfo.option;
    if (paymentInfo.option === "card") {
      paymentErrV = Object.values(paymentErr).every((value) => value === "");
    }
    return (
      Object.values(personalErr).every((value) => value === "") &&
      Object.values(addressErr).every((value) => value === "") &&
      paymentErrV
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
  const validateValues = async (type) => {
    // console.log("validate on blur & on clicking submit: " + type);
    let err = false;
    switch (type) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
          updateInfo(setPersonalErr, "email", "Please enter a valid email");
          err = true;
        } else {
          updateInfo(setPersonalErr, "email", "");
        }
        break;
      case "phone":
        if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(personalInfo.phone)) {
          updateInfo(
            setPersonalErr,
            "phone",
            "Please enter a 10 digit phone number"
          );
          err = true;
        } else {
          updateInfo(setPersonalErr, "phone", "");
        }
        break;
      case "street":
        const street = async () => {
          const address = {
            street: addressInfo.street,
          };
          const { results } = await validateAddress(address);

          if (
            results &&
            results.length > 0 &&
            results[0].geometry.location_type === "ROOFTOP"
          ) {
            const addressComponents = results[0].address_components;
            addressComponents.forEach((component) => {
              if (component.types.includes("locality")) {
                updateInfo(setAddressInfo, "city", component.long_name);
              }
              if (component.types.includes("administrative_area_level_1")) {
                updateInfo(setAddressInfo, "state", component.short_name);
              }
              if (component.types.includes("postal_code")) {
                updateInfo(setAddressInfo, "zip", component.long_name);
              }
            });
          }
        };
        street();
        break;

      case "zip":
        if (!/^\d{5}$/.test(addressInfo.zip)) {
          updateInfo(setAddressErr, "zip", "Please enter a 5 digit number");
          err = true;
        } else {
          updateInfo(setAddressErr, "zip", "");
          updateInfo(setAddressErr, "address", "");
        }
        break;

      case "city":
        if (/\d/.test(addressInfo.city)) {
          updateInfo(setAddressErr, "city", "Please enter a valid city");
          err = true;
        } else {
          updateInfo(setAddressErr, "city", "");
          updateInfo(setAddressErr, "address", "");
        }
        break;

      case "state":
        if (!isValidUSState(addressInfo.state)) {
          updateInfo(setAddressErr, "state", "Please enter a valid state");
          err = true;
        } else {
          updateInfo(setAddressErr, "state", "");
          updateInfo(setAddressErr, "address", "");
        }
        break;

      case "cardNum":
        if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(paymentInfo.cardNum)) {
          updateInfo(
            setPaymentErr,
            "cardNum",
            "Please enter a 16-digit number"
          );
          err = true;
        } else {
          updateInfo(setPaymentErr, "cardNum", "");
        }
        break;
      case "validCard":
        const curDate = new Date();
        const curMonth = curDate.getMonth() + 1;
        const curYear = curDate.getFullYear() % 100;
        if (paymentInfo.mm <= curMonth && paymentInfo.yy <= curYear) {
          updateInfo(setPaymentErr, "name", "Please enter an unexpired card");
          err = true;
        } else {
          updateInfo(setPaymentErr, "name", "");
        }
        break;

      case "cvc":
        if (!/^\d{3}$/.test(paymentInfo.cvc)) {
          updateInfo(setPaymentErr, "cvc", "Please enter a 3-digit number");
          err = true;
        } else {
          updateInfo(setPaymentErr, "cvc", "");
        }
        break;
      case "address":
        const { results } = await validateAddress(addressInfo);
        // console.log(results);
        if (
          results &&
          results.length > 0 &&
          results[0].geometry.location_type === "ROOFTOP"
        ) {
          // const { lat, lng } = results[0].geometry.location;
          // console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          updateInfo(setAddressErr, "address", "");
        } else {
          console.error("No results found");
          updateInfo(setAddressErr, "address", "Please enter a valid address");
          err = true;
        }

        break;
      default:
        // err = true;
        break;
    }
    return err;
  };

  const handleChange = (type, propertyName, value) => {
    let errMsg = "";
    switch (type) {
      // --------personal info--------
      case "personal":
        updateInfo(setPersonalInfo, propertyName, value);
        // make sure no numbers
        if (propertyName === "firstName" || propertyName === "lastName") {
          const newVal = value.replace(/\d/g, "");
          updateInfo(setPersonalInfo, propertyName, newVal);
        }
        // make sure 10 digits
        else if (propertyName === "phone") {
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
          updateInfo(setPersonalInfo, propertyName, formattedPhoneNumber);
        }

        break;
      // --------address info--------
      case "address":
        updateInfo(setAddressInfo, propertyName, value);
        // make sure 5 digits
        if (propertyName === "zip") {
          let digits = value.replace(/\D/g, "");
          digits = digits.slice(0, 5);
          updateInfo(setAddressInfo, propertyName, digits);
        }
        break;
      // --------payment info--------
      case "payment":
        updateInfo(setPaymentInfo, propertyName, value);
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
          updateInfo(setPaymentInfo, propertyName, formattedString);
        }
        // make sure only numbers, 2 digits
        else if (propertyName === "mm" || propertyName === "yy") {
          let digits = value.replace(/\D/g, "");
          digits = digits.slice(0, 2);
          updateInfo(setPaymentInfo, propertyName, digits);
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
          updateInfo(setPaymentInfo, propertyName, digits);
        }
        updateInfo(setPaymentErr, propertyName, errMsg);
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
      <ul>
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
    if (
      (await validateValues("address")) ||
      (await validateValues("validCard")) ||
      (await validateValues("email")) ||
      (await validateValues("phone")) ||
      (await validateValues("zip")) ||
      (await validateValues("city")) ||
      (await validateValues("state")) ||
      (paymentInfo.option === "card" &&
        ((await validateValues("cc")) || (await validateValues("cvc")))) ||
      !paymentInfo.option
    ) {
      return;
    }

    let Ccity = "";
    let Cstate = "";
    let Czip = "";

    const address = {
      street: addressInfo.street,
    };
    const { results } = await validateAddress(address);

    if (
      results &&
      results.length > 0 &&
      results[0].geometry.location_type === "ROOFTOP"
    ) {
      const addressComponents = results[0].address_components;
      addressComponents.forEach((component) => {
        if (component.types.includes("locality")) {
          Ccity = component.long_name.toUpperCase();
        }
        if (component.types.includes("administrative_area_level_1")) {
          Cstate = component.short_name;
        }
        if (component.types.includes("postal_code")) {
          Czip = component.long_name;
        }
      });
    }

    // put a price in each item in cartItems

    const cartWithData = cartItems.map((item) => {
      const product = shopData.find((product) => product.id === item.id);
      return {
        ...item,
        price: product ? product.price : null,
      };
    });

    // create new order
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
        email: personalInfo.email,
        addressInfo: {
          street: addressInfo.street.toUpperCase(),
          city: Ccity,
          state: Cstate,
          zip: Czip,
        },
      },
      payment: {
        type: paymentInfo.option,
        cardEnd:
          paymentInfo.option === "card" ? paymentInfo.cardNum.slice(-4) : "",
      },
      date: Date.now(),
    };

    // put in database
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
  const [openShipInfo, setOpenShipInfo] = useState(true);
  const [openPayInfo, setOpenPayInfo] = useState(true);
  const containerVariants = {
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 100,
        mass: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 100,
        mass: 0.3,
      },
    },
  };

  // main stuff
  return (
    <div id="checkout">
      <Shopheader
        htitle={"Checkout"}
        qty={countItems([...cartItems, ...giftcards])}
      />
      <main>
        {/* SHIPPING DROPDOWN */}
        <div className="checkout-dropdown" id="shipping-info">
          <button
            onClick={() => setOpenShipInfo(!openShipInfo)}
            className="dropdown-btn"
          >
            <span>Shipping Information</span>
            <img
              src={dropDownArrow}
              className="dropdown-arrow"
              style={{ transform: `rotate(${openShipInfo ? 90 : 0}deg)` }}
              alt="toggle dropdown"
            />
          </button>
          <AnimatePresence>
            {openShipInfo && (
              <motion.div
                className="checkout-dropdown-content"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                {/* First name input */}
                <motion.div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={personalInfo.firstName}
                    onBlur={() => validateValues("firstName")}
                    onChange={(e) =>
                      handleChange("personal", "firstName", e.target.value)
                    }
                    required
                  />
                </motion.div>
                {personalErr.firstName && (
                  <motion.p style={{ color: "red" }}>
                    {personalErr.firstName}
                  </motion.p>
                )}
                {/* Last name input */}
                <motion.div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    value={personalInfo.lastName}
                    onBlur={() => validateValues("lastName")}
                    onChange={(e) =>
                      handleChange("personal", "lastName", e.target.value)
                    }
                  />
                </motion.div>
                {personalErr.lastName && (
                  <motion.p style={{ color: "red" }}>
                    {personalErr.lastName}
                  </motion.p>
                )}
                {/* Email input */}
                <motion.div>
                  <input
                    type="text"
                    placeholder="Email*"
                    value={personalInfo.email}
                    onBlur={() => validateValues("email")}
                    onChange={(e) =>
                      handleChange("personal", "email", e.target.value)
                    }
                  />
                </motion.div>
                {personalErr.email && (
                  <motion.p style={{ color: "red" }}>
                    {personalErr.email}
                  </motion.p>
                )}
                {/* Phone input */}
                <motion.div>
                  <input
                    type="text"
                    placeholder="Phone*"
                    value={personalInfo.phone}
                    onBlur={() => validateValues("phone")}
                    onChange={(e) =>
                      handleChange("personal", "phone", e.target.value)
                    }
                  />
                </motion.div>
                {personalErr.phone && (
                  <motion.p style={{ color: "red" }}>
                    {personalErr.phone}
                  </motion.p>
                )}
                {/* Street address input */}
                <motion.div>
                  <input
                    type="text"
                    placeholder="Street Address*"
                    value={addressInfo.street}
                    onBlur={() => validateValues("street")}
                    onChange={(e) =>
                      handleChange("address", "street", e.target.value)
                    }
                  />
                </motion.div>
                {/* City input */}
                <motion.div className="ct-state">
                  <motion.div>
                    <input
                      type="text"
                      placeholder="City*"
                      value={addressInfo.city}
                      onBlur={() => validateValues("city")}
                      onChange={(e) =>
                        handleChange("address", "city", e.target.value)
                      }
                    />
                    {addressErr.city && (
                      <motion.p style={{ color: "red" }}>
                        {addressErr.city}
                      </motion.p>
                    )}
                  </motion.div>
                  {/* State input */}
                  <motion.div>
                    <input
                      type="text"
                      placeholder="State*"
                      value={addressInfo.state}
                      onBlur={() => validateValues("state")}
                      onChange={(e) =>
                        handleChange("address", "state", e.target.value)
                      }
                    />
                    {addressErr.state && (
                      <motion.p style={{ color: "red" }}>
                        {addressErr.state}
                      </motion.p>
                    )}
                  </motion.div>
                  {/* ZIP input */}
                  <motion.div>
                    <input
                      type="text"
                      placeholder="ZIP Code*"
                      value={addressInfo.zip}
                      onBlur={() => validateValues("zip")}
                      onChange={(e) =>
                        handleChange("address", "zip", e.target.value)
                      }
                    />
                    {addressErr.zip && (
                      <motion.p style={{ color: "red" }}>
                        {addressErr.zip}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>
                {addressErr.address && (
                  <motion.p style={{ color: "red" }}>
                    {addressErr.address}
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* PAYMENT DROPDOWN */}
        <div className="checkout-dropdown" id="payment-info">
          <button
            onClick={() => setOpenPayInfo(!openPayInfo)}
            className="dropdown-btn"
          >
            <span>Payment Method</span>
            <img
              src={dropDownArrow}
              className="dropdown-arrow"
              style={{ transform: `rotate(${openPayInfo ? 90 : 0}deg)` }}
              alt="toggle dropdown"
            />
          </button>
          <AnimatePresence>
            {openPayInfo && (
              <motion.div
                className="checkout-dropdown-content"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                {/* payment method radio */}
                {options.map((option) => {
                  const isCard = option.id === "card";
                  return (
                    <motion.div className="radio-container" key={option.id}>
                      {isCard && (
                        <img
                          src={
                            paymentInfo.option === option.id
                              ? purpleCheckIcon
                              : purplePlusIcon
                          }
                          alt=""
                          onClick={addNewCard}
                        />
                      )}
                      <label>
                        <input
                          type="radio"
                          name="options"
                          value={option.id}
                          checked={paymentInfo.option === option.id}
                          onChange={handleOptionChange}
                          className={isCard ? "last-radio" : ""}
                        />
                        {option.label}
                      </label>
                    </motion.div>
                  );
                })}
                {/* card input */}
                <motion.div
                  className={paymentInfo.option !== "card" ? "hide-fields" : ""}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number*"
                      value={paymentInfo.cardNum}
                      onBlur={() => validateValues("cardNum")}
                      onChange={(e) =>
                        handleChange("payment", "cardNum", e.target.value)
                      }
                    />
                    {paymentErr.cardNum && (
                      <motion.p style={{ color: "red" }}>
                        {paymentErr.cardNum}
                      </motion.p>
                    )}
                  </div>
                  {/* mm/yy CVC */}
                  <motion.div className="cc-info">
                    <div>
                      <input
                        type="text"
                        placeholder="mm*"
                        value={paymentInfo.mm}
                        onBlur={() => validateValues("validCard")}
                        onChange={(e) =>
                          handleChange("payment", "mm", e.target.value)
                        }
                      />
                      {paymentErr.mm && (
                        <motion.p style={{ color: "red" }}>
                          {paymentErr.mm}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="yy*"
                        value={paymentInfo.yy}
                        onBlur={() => validateValues("validCard")}
                        onChange={(e) =>
                          handleChange("payment", "yy", e.target.value)
                        }
                      />
                      {paymentErr.yy && (
                        <motion.p style={{ color: "red" }}>
                          {paymentErr.yy}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="CVC*"
                        value={paymentInfo.cvc}
                        onBlur={() => validateValues("cvc")}
                        onChange={(e) =>
                          handleChange("payment", "cvc", e.target.value)
                        }
                      />
                      {paymentErr.cvc && (
                        <motion.p style={{ color: "red" }}>
                          {paymentErr.cvc}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                  {/* name on card */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name on Card*"
                      value={paymentInfo.name}
                      onBlur={() => validateValues("name")}
                      onChange={(e) =>
                        handleChange("payment", "name", e.target.value)
                      }
                    />
                    {paymentErr.name && (
                      <motion.p style={{ color: "red" }}>
                        {paymentErr.name}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
