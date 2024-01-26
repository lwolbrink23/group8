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

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      );
      return updatedItems;
    });
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
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
                  onClick={() => handleDecrement(item.id)}
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

  const EmptyCart = () => (
    <div>
      <p>You have no items in your cart!</p>
      <p>Take a look at our shop to find some products.</p>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );
  return (
    <div id="cart">
      {/* title */}
      <Shopheader htitle={"Cart"} />
      {cartItems.length == 0 ? (
        <EmptyCart />
      ) : (
        <main>
          <div>
            <p>{tempData.length} items in your cart</p>
            <CartItems />
          </div>
          <div className="subtotal poppins-bigger">
            <div className="col-2">
              <p>Subtotal ({tempData.length} items)</p>
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
