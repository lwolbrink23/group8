import shopICON from "../assets/icons/icons8-shopping-cart-100.png";

function OrderPlaced() {
  return (
    <div>
      {/* title */}
      <div id="shop-banner">
        <div className="title-container trans-white">
          <h1>Checkout</h1>
          <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
