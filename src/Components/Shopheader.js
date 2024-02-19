import { Link } from "react-router-dom";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import "../Styles/cartIcon.css";
import BackButton from "./BackButton";
import cartData from "../data/cart.json";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// backend: load cart data and count (?)
function Shopheader(props) {
  // main JSX
  return (
    <div className="title-container trans-white">
      {!props.disableBack && <BackButton />}
      <h1>{props.htitle}</h1>
      <Link to="/cart">
        <div className="cart-icon">
          <img src={shopICON} alt="shopping cart"></img>
          {props.qty != 0 && (
            <span className="cart-quantity bold">{props.qty}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
export default Shopheader;
