import "../App.css";
import "../Styles/shop.css";
import giftCardIMG from "../assets/images/giftcard.png";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import CartPopup from "../Components/CartPopup";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Shopheader from "../Components/Shopheader";
import { BACKEND_ADDRESS } from "../App";
import Cookies from "js-cookie";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Shop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // keeping track of item qty
  const [dynamicItems, setDynamicItems] = useState([]);
  const [shopData, setShopData] = useState([]);
  const [cartPopup, setCartPopup] = useState();

  useEffect(() => {
    const fetchData = async (endpoint, setDataFunction) => {
      try {
        // Fetch data from the backend
        const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
        const jsonData = await response.json();
        setDataFunction(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Usage example:
    fetchData("/shop", setShopData);
    // TODO: fetch cart data from database here
    // fetch data from cookie
  }, []);

  const handleIncrement = (itemId) => {
    setDynamicItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      );

      if (!updatedItems.some((item) => item.id === itemId)) {
        updatedItems.push({ id: itemId, qty: 1 });
      }

      return updatedItems;
    });
  };

  const handleDecrement = (itemId) => {
    setDynamicItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const handleAddToCart = (itemId, itemName, itemPrice, itemQty, itemImg) => {
    const updatedItems = dynamicItems.filter((item) => item.id !== itemId);
    const cartPopInfo = {
      name: itemName,
      price: itemPrice,
      qty: itemQty,
      img: itemImg,
    };
    const newItem = {
      id: itemId,
      qty: itemQty,
    };

    // Use cookie to store cart items if user not logged in
    let cartCookie = Cookies.get("cart");
    let newCartCookie = [];

    if (cartCookie) {
      // Parse the existing cookie value
      newCartCookie = JSON.parse(cartCookie);
    }

    // Push the new item to the cart
    newCartCookie.push(newItem);

    // Set the updated cart cookie
    Cookies.set("cart", JSON.stringify(newCartCookie), {
      expires: 60,
      path: "/",
    });
    // update frontend
    setCartPopup(cartPopInfo);
    setDynamicItems(updatedItems);
  };

  // mapping each shop item
  const ShopItems = () => {
    return shopData.map((item) => {
      let itemQty = 0;

      for (const i of dynamicItems) {
        if (i.id === item.id) {
          itemQty = i.qty;
          break;
        }
      }

      return (
        <li className="box" key={item.id}>
          {/* item info */}
          <Link to={`/productpage/${item.id}`}>
            <img
              src={require("../assets/images/shop/" + item.file + ".png")}
              alt={item.name}
              className="item-img"
              onClick={scrollToTop}
            ></img>
          </Link>
          <div className="item-info">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          {/* item interactions */}
          <div className="center-children">
            <div className="center-v">
              <img
                src={minusICON}
                alt="subtract item"
                className="mouse-hover"
                onClick={() => handleDecrement(item.id)}
              ></img>
              <p className="item-amount poppins-bigger">{itemQty}</p>
              <img
                src={plusICON}
                alt="add item"
                className="mouse-hover"
                onClick={() => handleIncrement(item.id)}
              ></img>
            </div>

            <button
              className="button"
              onClick={() =>
                handleAddToCart(
                  item.id,
                  item.name,
                  item.price,
                  itemQty,
                  item.file
                )
              }
              disabled={!itemQty}
              style={{ opacity: !itemQty ? 0.5 : 1 }}
            >
              Add to Cart
            </button>
          </div>
        </li>
      );
    });
  };

  // main JSX
  return (
    <div id="shop">
      <ScrollToTop />
      {/* title */}
      {cartPopup && (
        <CartPopup cartPopup={cartPopup} setCartPopup={setCartPopup} />
      )}
      <div id="shop-banner">
        <Shopheader htitle="Shop" disableBack={true} />

        <h2>
          Find all your <br></br> favorite products here.
        </h2>
      </div>
      {/* shop items */}
      <main>
        <ul className="items-container">
          {/* mapping each shop item */}
          <ShopItems />
        </ul>
        <p className="right extra-space">Next Page</p>
        {/* giftcard */}
        <h2 className="center">Gift Cards</h2>
        <div className="giftcard-grid box">
          <img src={giftCardIMG} alt="giftcard"></img>

          <div className="giftcard-info">
            <h3>Buy a gift card!</h3>
            <p>
              Looking for the perfect gift for that special someone? We've got
              you covered! Whether it's for a birthday, anniversary, or any
              special occasion, our gift cards are the ideal way to show your
              appreciation.
            </p>
            <p>Enter an amount:</p>
            <div className="col-2">
              <input></input>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
