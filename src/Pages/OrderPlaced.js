import checkICON from "../assets/icons/icons8-check-100.png";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import arrowIcon from "../assets/icons/white-arrow.svg";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/orderplaced.css";
import Shopheader from "../Components/Shopheader";
import { BACKEND_ADDRESS } from "../App";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function OrderPlaced() {
  const { id } = useParams();
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const fetchData = async (endpoint, setDataFunction) => {
      try {
        // Fetch data from the backend
        const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
        const jsonData = await response.json();
        setDataFunction(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData(`/order_placed/${id}`, setCartData);
  }, [id]);
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
          <h3>Items ordered ({tempData.length})</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {dropdownVisible && <OrderedItems />}
      </div>
    );
  };
  return (
    <div id="order-placed">
      {/* title */}
      <Shopheader htitle={"Checkout"} disableBack={true} />
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
