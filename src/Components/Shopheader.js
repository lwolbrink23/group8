import { Link } from "react-router-dom";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "./BackButton";
import cartData from "../data/cart.json";

// backend: load cart data and count (?)
function Shopheader(props) {
  return (
    <div className="title-container trans-white">
      {!props.disableBack && <BackButton />}
      <h1>{props.htitle}</h1>
      <Link to="/cart">
        <div className="cart-icon">
          <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
          {1 > 0 && <span className="cart-quantity">{cartData.length}</span>}
        </div>
      </Link>
    </div>
  );
}
export default Shopheader;
