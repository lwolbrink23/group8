import "../Styles/cart.css";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import tempShopData from "../data/shop.json";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { fetchData } from "./Shop";
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

function Cart() {
  // BACKEND: load cart data from database here
  const [cartItems, setCartItems] = useState("");
  const [shopData, setShopData] = useState(tempShopData);
  const [popupItem, setPopupItem] = useState("");
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  // keep a state for login here, useeffect to update it
  useEffect(() => {
    const efetchData = async (endpoint, setDataFunction) => {
      try {
        // Fetch data from the backend
        const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setShopData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    efetchData("/shop", setShopData);
    console.log(`shopdata: ${shopData}`);

    // TODO: fetch cart data from database here
    // TODO: fetch data from cookie
    // if user is logged in and there are stuff in their cookie, merge both
    if (Cookies.get("cart")) {
      setCartItems(JSON.parse(Cookies.get("cart")));
    }
  });

  const updateCartBackend = (newCartItems) => {
    // TODO: save cart here, to database if logged in, to cookie if not
    Cookies.set("cart", JSON.stringify(newCartItems), {
      expires: 60,
      path: "/",
    });
  };

  const countItems = () => {
    let totalQty = 0;

    if (cartItems) {
      cartItems.forEach((item) => {
        totalQty += item.qty;
      });
    }

    return totalQty;
  };

  // increment & decrement
  const handleIncrement = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      );
      return updatedItems;
    });
  };

  const handleDecrement = (itemId, itemName, itemQty) => {
    // handle if qty is 1 and user press decrment
    if (itemQty === 1) {
      setPopupItem({ itemName, itemId });
    } else {
      setCartItems((prevItems) => {
        const newArray = prevItems.map((item) =>
          item.id === itemId && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        );
        return newArray;
      });
    }
  };

  // map out cart items
  const CartItems = () => (
    <div className="cart-container">
      {cartItems.map((item, i) => {
        let itemName = "";
        let itemPic = "";
        let itemPrice = 0;

        for (const shopItem of shopData) {
          if (item.id === shopItem.id) {
            itemName = shopItem.name;
            itemPic = shopItem.file;
            itemPrice = shopItem.price;
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
                  onClick={() => handleDecrement(item.id, itemName, item.qty)}
                ></img>
                <p className="item-amount poppins-bigger bold">{item.qty}</p>
                <img
                  src={plusICON}
                  alt="add item"
                  className="mouse-hover"
                  onClick={() => handleIncrement(item.id)}
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
    updateCartBackend(cartItems);
    return t.toFixed(2);
  };

  // Delete cart function
  const Popup = () => (
    <div className="popup-background">
      <div className="cart-popup">
        <p>Delete this item from your cart?</p>
        <p className="bold">{popupItem.itemName}</p>
        <button onClick={() => setPopupItem()}>Cancel</button>
        <button
          onClick={() => deleteItem(popupItem.itemId)}
          className="red-btn"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
  const deleteItem = (itemId) => {
    const newArray = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newArray);
    setPopupItem();
    updateCartBackend(newArray);
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
      <Shopheader htitle={"Cart"} qty={countItems()} />
      {popupItem && <Popup />}

      {!cartItems.length ? (
        <EmptyCart />
      ) : (
        <main>
          <div>
            <p>{countItems()} items in your cart</p>
            <CartItems />
          </div>
          <div className="subtotal poppins-bigger">
            <div className="col-2">
              <p>Subtotal ({countItems()} items)</p>
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
