import "../Styles/checkout.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import Shopheader from "../Components/Shopheader";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div id="checkout">
      <Shopheader htitle={"Checkout"} />
      <main>
        <div id="shipping-info" className="cardbox">
          <h3>Shipping Information</h3>
          <div>
            <input type="text" placeholder="First Name*" required />
          </div>
          <div>
            <input type="text" placeholder="Last Name*" required />
          </div>
          <div>
            <input type="text" placeholder="Phone*" required />
          </div>
          <div>
            <input type="text" placeholder="Street Address*" required />
          </div>
          <div className="ct-state">
            <input type="text" placeholder="City*" required />
            <input type="text" placeholder="State*" required />
            <input type="text" placeholder="ZIP Code*" required />
          </div>
        </div>
        <div id="payment-info" className="cardbox">
          <h3>Payment Method</h3>
          <p>options here</p>
          <div>
            <input type="text" placeholder="Card Number*" required />
          </div>
          <div className="cc-info">
            <input type="text" placeholder="mm*" required />

            <input type="text" placeholder="yy*" required />

            <input type="text" placeholder="CVC*" required />
          </div>
          <div>
            <input type="text" placeholder="Name on Card*" required />
          </div>
        </div>
        <div id="cart-items">
          <h3>Review Order</h3>
          <p>copy pasta</p>
        </div>
        <div id="checkout-sum">
          <h3>Finish Checkout</h3>
          <div className="cardbox">
            <div>
              <p>Subtotal</p>
              <p>$###</p>
              <p>Shipping & Handling</p>
              <p>$###</p>
              <p>Taxes</p>
              <p>$###</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>$###</p>
            </div>
            <Link to={`/order_placed`}>
              <button>Place Order</button>
            </Link>
          </div>
        </div>
      </main>
      <div className="extra-space"></div>
    </div>
  );
}
export default Checkout;
