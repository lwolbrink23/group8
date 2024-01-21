import { Link } from "react-router-dom";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "./BackButton";

function Shopheader(props) {
  return (
    <div className="title-container trans-white">
      <BackButton />
      <h1>{props.htitle}</h1>
      <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
    </div>
  );
}
export default Shopheader;
