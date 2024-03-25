import greenCheckICON from "../assets/icons/icons8-checkmark-green.png";
import purpleXICON from "../assets/icons/icons8-x-purple.png";
const CartPopup = ({ cartPopup, setCartPopup, qty }) => (
  <div id="cart-popup">
    <div>
      <img src={greenCheckICON} alt="Green check icon"></img>
      <p className="bold">Added to Cart!</p>
      <img
        src={purpleXICON}
        className="cursor-pointer"
        onClick={() => setCartPopup()}
        alt="close cart pop up"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setCartPopup();
          }
        }}
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
        <p>
          You have {qty} item{qty > 1 && "s"} in your cart
        </p>
      </div>
    </div>
  </div>
);
export default CartPopup;
