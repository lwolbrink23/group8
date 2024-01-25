import "../Styles/cart.css";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import tempData from "../data/cart.json";
import tempShopData from "../data/shop.json";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState(tempData);
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
                ></img>
                <p className="item-amount">{item.qty}</p>
                <img
                  src={plusICON}
                  alt="add item"
                  className="mouse-hover"
                ></img>
              </div>
            </div>
            <p className="align-right">${itemPrice}</p>
          </div>
        );
      })}
    </div>
  );

  const total = () => {
    let t = 0;
    for (const cartItem of tempData) {
      for (const shopItem of tempShopData) {
        if (cartItem.id === shopItem.id) {
          t += shopItem.price;
        }
      }
    }
    return t.toFixed(2);
  };

  return (
    <div id="cart">
      {/* title */}
      <Shopheader htitle={"Cart"} />
      <main>
        <div>
          <p>{tempData.length} items in your cart</p>
          <CartItems />
        </div>
        <div className="subtotal">
          <div className="col-2">
            <p>Subtotal ({tempData.length} items)</p>
            <p>${total()}</p>
          </div>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
export default Cart;
