import "../App.css";
import "../Styles/shop.css";
import giftCardIMG from "../assets/images/giftcard.png";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import tempData from "../data/shop.json";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
  const [items, setItems] = useState([{ id: "iID0", quantity: 1 }]);

  const handleIncrement = (itemId) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );

      // If the item doesn't exist in the array, add it with quantity 1
      if (!updatedItems.some((item) => item.id === itemId)) {
        updatedItems.push({ id: itemId, quantity: 1 });
      }

      return updatedItems;
    });
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div id="shop">
      <ScrollToTop />
      {/* title */}
      <div id="shop-banner">
        <div className="title-container trans-white">
          <h1>Shop</h1>
          <Link to="/cart">
            <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
          </Link>
        </div>
        <h2>
          Find all your <br></br> favorite products here.
        </h2>
      </div>
      {/* shop items */}
      <main>
        <ul className="items-container">
          {/* mapping each shop item */}
          {tempData.map((item) => {
            let itemQty = 0;
            for (const i of items) {
              if (i.id === item.id) {
                itemQty = i.quantity;
              }
              console.log(i.quantity);
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
                    <p className="item-amount">{itemQty}</p>
                    <img
                      src={plusICON}
                      alt="add item"
                      className="mouse-hover"
                      onClick={() => handleIncrement(item.id)}
                    ></img>
                  </div>
                  <button className="button">Add to Cart</button>
                </div>
              </li>
            );
          })}
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
