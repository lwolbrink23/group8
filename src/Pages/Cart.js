import "../Styles/cart.css";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  // BACKEND: load cart data from database here
  const [cartItems, setCartItems] = useState(tempData);
  const [popupItem, setPopupItem] = useState("");

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
      console.log(itemName);

      setPopupItem(itemName);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      );
    }
  };

  // map out cart items
  const CartItems = () => (
    <div className="cart-container">
      {cartItems.map((item, i) => {
        let itemName;
        let itemPic;
        let itemPrice;

        for (const shopItem of tempShopData) {
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
              <p>
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
            <p className="align-right poppins-bigger">${itemPrice}</p>
          </div>
        );
      })}
    </div>
  );

  // calculate totals
  const calcTotal = () => {
    let t = 0;
    for (const cartItem of cartItems) {
      for (const shopItem of tempShopData) {
        if (cartItem.id === shopItem.id) {
          t += shopItem.price * cartItem.qty;
        }
      }
    }
    // BACKEND: save cart data into database here (?)
    return t.toFixed(2);
  };

  // Delete cart function
  const Popup = (props) => (
    <div className="popup-background">
      <div className="cart-popup">
        <p>Do you want to delete this item from you cart?</p>
        <p className="bold">{props.itemName}</p>
        <button onClick={() => setPopupItem("")}>Cancel</button>
        <button>Yes</button>
      </div>
    </div>
  );
  const deleteItem = () => {};

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

  return (
    <div id="cart">
      {/* title */}
      <Shopheader htitle={"Cart"} />
      {popupItem && <Popup itemName={popupItem} />}

      {!cartItems.length ? (
        <EmptyCart />
      ) : (
        <main>
          <div>
            <p>{cartItems.length} items in your cart</p>
            <CartItems />
          </div>
          <div className="subtotal poppins-bigger">
            <div className="col-2">
              <p>Subtotal ({cartItems.length} items)</p>
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
