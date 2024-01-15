import shopICON from "../assets/icons/icons8-shopping-cart-100.png";

function Cart() {
  return (
    <div id="Cart">
      {/* title */}
      <div className="title-container trans-white">
        <h1>Checkout</h1>
        <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
      </div>
    </div>
  );
}
export default Cart;
