import "../Styles/checkout.css";

function Checkout() {
  return (
    <div id="checkout">
      <div id="shipping-info" className="cardbox">
        <h3>Shipping Information</h3>
        <input type="text" placeholder="First Name*" required></input>
        <input type="text" placeholder="Last Name*" required></input>
        <input type="text" placeholder="Phone*" required></input>
        <input type="text" placeholder="Street Address*" required></input>
        <input type="text" placeholder="City*" required></input>
        <input type="text" placeholder="State*" required></input>
        <input type="text" placeholder="ZIP Code*" required></input>
      </div>
      <div id="payment-info" className="cardbox">
        <h3>Payment Method</h3>
        <input type="text" placeholder="Card Number*" required></input>
        <input type="text" placeholder="mm*" required></input>
        <input type="text" placeholder="yy*" required></input>
        <input type="text" placeholder="CVC*" required></input>
        <input type="text" placeholder="Name on Card*" required></input>
      </div>
      <h3>Review Order</h3>
      <p>copy pasta</p>
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
  );
}
export default Checkout;
