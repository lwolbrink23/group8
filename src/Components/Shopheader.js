import { Link } from "react-router-dom";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "./BackButton";

function Shopheader(props) {
  return (
    <div className="title-container trans-white">
      <BackButton />
      <h1>{props.htitle}</h1>
      <Link to="/cart">
        <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
      </Link>
    </div>
  );
}
export default Shopheader;
