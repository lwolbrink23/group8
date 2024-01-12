import "../App.css";
import "../Styles/shop.css";
import giftCardIMG from "../assets/images/giftcard.png";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
const tempData = [
  {
    name: "Repair & Protect Kit",
    price: 41.99,
  },
  {
    name: "Restorative Hair Mask",
    price: 18.99,
  },
  {
    name: "Color Protection Kit",
    price: 34.99,
  },
  {
    name: "Men's Promade",
    price: 9.99,
  },
  {
    name: "Niacinamide Serum",
    price: 15.99,
  },
  {
    name: "Illumination Face Mask",
    price: 14.99,
  },
  {
    name: "Daily Body Lotion",
    price: 9.99,
  },
  {
    name: "Nourishing Body Oil",
    price: 10.99,
  },
  {
    name: "Makeup Essentials Kit",
    price: 49.99,
  },
  {
    name: "Makeup Brush Set",
    price: 15.99,
  },
  {
    name: "Hyaluronic Acid Tonic",
    price: 12.99,
  },
  {
    name: "Revitalizing Hair Oil",
    price: 8.99,
  },
];

function Shop() {
  return (
    <div>
      {/* title */}
      <div className="title-container">
        <h1 className="center">Shop</h1>
        <p id="cart-icon">icon</p>
      </div>
      <h2>Find all your favorite products here.</h2>
      {/* shop items */}
      <div className="items-container">
        {tempData.map((item) => (
          <div className="box">
            <p>img</p>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <div className="center-children">
              <div className="col-3">
                <div className="center-v">
                  <img src={minusICON} alt="subtract item"></img>
                </div>
                <p>0</p>
                <div className="center-v">
                  <img src={plusICON} alt="add item"></img>
                </div>
              </div>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {/* giftcard */}
      <h2 className="center">Gift Cards</h2>
      <div className="giftcard-grid">
        <img src={giftCardIMG} alt="giftcard"></img>

        <div className="giftcard-info">
          <h3>Buy a gift card!</h3>
          <p>
            Looking for the perfect gift for that special someone? We've got you
            covered! Whether it's for a birthday, anniversary, or any special
            occasion, our gift cards are the ideal way to show your
            appreciation.
          </p>
          <p>Enter an amount:</p>
          <div className="col2">
            <input></input>
            <button className="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
