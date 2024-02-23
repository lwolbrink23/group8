import "../Styles/cart.css";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import tempShopData from "../data/shop.json";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  fetchCartData,
  updateUserCartDB,
  countItems,
} from "./functions/shopFunctions";
import { getUser } from "./functions/generalFunctions";

function Cart() {
  // BACKEND: load cart data from database here
  const [cartItems, setCartItems] = useState([]);
  const [giftcards, setGiftcards] = useState([]);
  const [shopData, setShopData] = useState(tempShopData);
  const [popupItem, setPopupItem] = useState("");
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  // keep a state for login here, useeffect to update it
  useEffect(() => {
    fetchCartData(setCartItems, user, "cart");
    fetchCartData(setGiftcards, user, "giftcard");
  }, []);

  const updateCartBackend = (newCartItems, type) => {
    if (user) {
      updateUserCartDB(user.id, newCartItems, type);
    } else {
      Cookies.set(type, JSON.stringify(newCartItems), {
        expires: 60,
        path: "/",
      });
    }
  };

  // increment & decrement
  const handleIncrement = (itemId, type) => {
    const isGift = type === "giftcard";
    const prop = isGift ? "price" : "id";
    const change = (prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item[prop] === itemId ? { ...item, qty: item.qty + 1 } : item
      );
      return updatedItems;
    };
    isGift ? setGiftcards(change) : setCartItems(change);
  };

  const handleDecrement = (itemId, itemName, itemQty, type) => {
    const isGift = type === "giftcard";
    const prop = isGift ? "price" : "id";

    const change = (prevItems) => {
      const newArray = prevItems.map((item) =>
        item[prop] === itemId && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      return newArray;
    };

    // handle if qty is 1 and user press decrment
    if (itemQty === 1) {
      setPopupItem({ itemName, itemId, type });
    } else {
      isGift ? setGiftcards(change) : setCartItems(change);
    }
  };

  // map out cart items
  const CartItems = () => {
    const mergedItems = [...cartItems, ...giftcards];
    return (
      <div className="cart-container">
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
            <div className="cart-item" key={i}>
              <img
                src={require("../assets/images/shop/" + itemPic + ".png")}
                alt=""
              ></img>
              <div>
                <p className="rem-top-margin">
                  {itemName}
                  <br></br> instock
                </p>
                <div className="item-interaction">
                  <img
                    src={minusICON}
                    alt="subtract item"
                    className="mouse-hover"
                    onClick={() =>
                      handleDecrement(
                        isGift ? item.price : item.id,
                        itemName,
                        item.qty,
                        isGift ? "giftcard" : "cart"
                      )
                    }
                  ></img>
                  <p className="item-amount poppins-bigger bold">{item.qty}</p>
                  <img
                    src={plusICON}
                    alt="add item"
                    className="mouse-hover"
                    onClick={() =>
                      handleIncrement(
                        isGift ? item.price : item.id,
                        isGift ? "giftcard" : "cart"
                      )
                    }
                  ></img>
                </div>
              </div>
              <p className="align-right poppins-bigger rem-top-margin">
                ${itemPrice}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  // calculate totals
  const calcTotal = () => {
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
    updateCartBackend(cartItems, "cart");
    updateCartBackend(giftcards, "giftcard");

    return t.toFixed(2);
  };

  // Delete cart function
  const Popup = () => (
    <div className="popup-background">
      <div className="cart-popup">
        <p>Delete this item from your cart?</p>
        <p className="bold">{popupItem.itemName}</p>
        <button onClick={() => setPopupItem()}>Cancel</button>
        <button onClick={() => deleteItem()} className="red-btn">
          Delete Item
        </button>
      </div>
    </div>
  );
  const deleteItem = () => {
    let newArray = [];
    if (popupItem.type === "cart") {
      newArray = cartItems.filter((item) => item.id !== popupItem.itemId);
      setCartItems(newArray);
    } else {
      newArray = giftcards.filter((item) => item.price !== popupItem.itemId);
      setGiftcards(newArray);
    }
    setPopupItem();
    updateCartBackend(newArray, popupItem.type);
  };

  const EmptyCart = () => (
    <div className="center-children empty-cart poppins-bigger">
      <p>You have no items in your cart!</p>
      <p>Take a look at our shop to find some products.</p>
      <br></br>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );

  // main code
  return (
    <div id="cart">
      {/* title */}
      <Shopheader htitle={"Cart"} qty={countItems(cartItems)} />
      {popupItem && <Popup />}

      {!cartItems.length ? (
        <EmptyCart />
      ) : (
        <main>
          <div>
            <p>{countItems(cartItems)} items in your cart</p>
            <CartItems />
          </div>
          <div className="subtotal poppins-bigger">
            <div className="col-2">
              <p>Subtotal ({countItems(cartItems)} items)</p>
              <p>${calcTotal()}</p>
            </div>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}
export default Cart;
