import { Link } from "react-router-dom";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import "../Styles/cartIcon.css";
import BackButton from "./BackButton";
import cartData from "../data/cart.json";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// backend: load cart data and count (?)
function Shopheader(props) {
  const [cartItems, setCartItems] = useState("");

  const countItems = () => {
    let totalQty = 0;
    if (cartItems) {
      cartItems.forEach((item) => {
        totalQty += item.qty;
      });
    }

    return totalQty;
  };

  useEffect(() => {
    const fetchCartData = async (endpoint, setDataFunction) => {
      try {
        // Fetch data from the backend
        const response = await fetch(`/ADDRESS HERE`);
        const jsonData = await response.json();
        setDataFunction(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    // TODO: fetch cart data from database here
    // TODO: fetch data from cookie
    // if user is logged in and there are stuff in their cookie, merge both
    // fetchCartData("/shop", setCartItems);
    if (Cookies.get("cart")) {
      setCartItems(JSON.parse(Cookies.get("cart")));
      console.log(props.qty);
    }
  }, []);

  // main JSX
  return (
    <div className="title-container trans-white">
      {!props.disableBack && <BackButton />}
      <h1>{props.htitle}</h1>
      <Link to="/cart">
        <div className="cart-icon">
          <img src={shopICON} alt="shopping cart"></img>
          {props.qty && <span className="cart-quantity bold">{props.qty}</span>}
        </div>
      </Link>
    </div>
  );
}
export default Shopheader;
