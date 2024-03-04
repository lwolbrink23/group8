import checkICON from "../assets/icons/icons8-check-100.png";
//import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/orderplaced.css";
import Shopheader from "../Components/Shopheader";
//import { BACKEND_ADDRESS } from "../App";
import { getUser } from "./functions/generalFunctions";
import {
  countItems,
  fetchDataReturn,
  fetchData,
} from "./functions/shopFunctions";

function OrderPlaced() {
  const { id } = useParams();
  const user = useState(getUser());
  const [cartData, setCartData] = useState([]);
  const [giftcardData, setGiftcardData] = useState([]);
  const [shopData, setShopData] = useState([]);
  console.log("active user: ", user);

  useEffect(() => {
    const fetchOrderData = async () => {
      const orderInfo = await fetchDataReturn(`/order_placed/${id}`);
      setCartData(orderInfo.cart.items);
      setGiftcardData(orderInfo.cart.giftcards);
    };
    fetchOrderData();
    fetchData("/shop", setShopData);
  }, [id]);
  const OrderedItems = () => {
    const mergedItems = [...cartData, ...giftcardData];
    return (
      <ul className="dropdown-content">
        {mergedItems.map((item, i) => {
          const isGift = item.id === "giftcard";
          let itemName = isGift ? "Gift Card" : "";
          let itemPic = isGift ? "giftcard" : "";
          if (!isGift) {
            for (const shopItem of shopData) {
              if (item.id === shopItem.id) {
                itemName = shopItem.name;
                itemPic = shopItem.file;
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
              <p className="align-right">${item.price}</p>
            </li>
          );
        })}
      </ul>
    );
  };
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
          <h3>Items ordered ({countItems([...cartData, ...giftcardData])})</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {dropdownVisible && <OrderedItems />}
      </div>
    );
  };

  return (
    <div id="order-placed">
      {/* title */}
      <Shopheader htitle={"Checkout"} disableBack={true} qty={0} />
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
          {giftcardData && (
            <p>
              Please allow a maximum of 24 hours <br></br>for the delivery of
              your gift card codes to your email.
            </p>
          )}
          <Link to="/" className="home-desktop">
            <button className="button">Back to Home</button>
          </Link>
        </article>
        {/* order summary */}
        <CartDropdown />
        <div className="home-mobile center">
          <Link to="/">
            <button className="button">Back to Home</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default OrderPlaced;
