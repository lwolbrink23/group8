import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import tempPic from "../assets/images/shop/color-protection-kit.png";
import "../Styles/cart.css";

function Cart() {
  return (
    <div id="cart">
      {/* title */}
      <div className="title-container trans-white">
        <BackButton />
        <h1>Cart</h1>
        <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
      </div>
      <main>
        <div>
          <p>6 items in your cart</p>
          <div className="items-container">
            <div className="cart-item">
              <img src={tempPic} alt=""></img>
              <div>
                <p>
                  item name <br></br> instock
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="subtotal">
          <p>subtotal (6 items)</p>
          <p>$###</p>
          <button>Proceed to Checkout</button>
        </div>
      </main>
    </div>
  );
}
export default Cart;
