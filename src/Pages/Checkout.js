import "../Styles/checkout.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";

function Checkout() {
  return (
    <div id="checkout">
      <div className="title-container trans-white">
        <BackButton />
        <h1>Checkout</h1>
        <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
      </div>
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
            <p>Subtotal</p>
            <p>$###</p>
            <p>Shipping & Handling</p>
            <p>$###</p>
            <p>Taxes</p>
            <p>$###</p>
            <p>line</p>
            <p>Total</p>
            <p>$###</p>
            <button>Place Order</button>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Checkout;
