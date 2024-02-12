import greenCheckICON from "../assets/icons/icons8-checkmark-green.png";
import purpleXICON from "../assets/icons/icons8-x-purple.png";
const CartPopup = ({ cartPopup, setCartPopup }) => (
  <div id="cart-popup">
    <div>
      <img src={greenCheckICON}></img>
      <p className="bold">Added to Cart!</p>
      <img
        src={purpleXICON}
        className="cursor-pointer"
        onClick={() => setCartPopup()}
        alt="close cart pop up"
      ></img>
    </div>
    <hr />
    <div id="cart-pop-div">
      <img
        src={require("../assets/images/shop/" + cartPopup.img + ".png")}
        id="ca-po-img"
        alt=""
      ></img>
      <div>
        <p>{cartPopup.name}</p>
        <p>${cartPopup.price}</p>
        <p>Qty: {cartPopup.qty}</p>
        <hr />
        <p>You have 4 item(s) in your cart</p>
      </div>
    </div>
  </div>
);
export default CartPopup;
