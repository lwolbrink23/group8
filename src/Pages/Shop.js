import "../App.css";
import "../Styles/shop.css";
import giftCardIMG from "../assets/images/giftcard.png";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import tempData from "../data/shop.json";

function Shop() {
  return (
    <div id="shop">
      {/* title */}
      <div id="shop-banner">
        <div className="title-container trans-white">
          <h1>Shop</h1>
          <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
        </div>
        <h2>
          Find all your <br></br> favorite products here.
        </h2>
      </div>
      {/* shop items */}
      <main>
        <ul className="items-container">
          {tempData.map((item) => (
            <li className="box" key={item.id}>
              {/* item info */}
              <img
                src={require("../assets/images/shop/" + item.file + ".png")}
                alt={item.name}
                className="item-img"
              ></img>
              <div className="item-info">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              {/* item interactions */}
              <div className="center-children">
                <div className="center-v">
                  <img
                    src={minusICON}
                    alt="subtract item"
                    className="mouse-hover"
                  ></img>
                  <p className="item-amount">0</p>
                  <img
                    src={plusICON}
                    alt="add item"
                    className="mouse-hover"
                  ></img>
                </div>
                <button className="button">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="right extra-space">Next Page</p>
        {/* giftcard */}
        <h2 className="center">Gift Cards</h2>
        <div className="giftcard-grid box">
          <img src={giftCardIMG} alt="giftcard"></img>

          <div className="giftcard-info">
            <h3>Buy a gift card!</h3>
            <p>
              Looking for the perfect gift for that special someone? We've got
              you covered! Whether it's for a birthday, anniversary, or any
              special occasion, our gift cards are the ideal way to show your
              appreciation.
            </p>
            <p>Enter an amount:</p>
            <div className="col-2">
              <input></input>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
