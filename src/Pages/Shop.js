import "../App.css";
import "../Styles/shop.css";
import giftCardIMG from "../assets/images/giftcard.png";
import plusICON from "../assets/icons/black-plus.png";
import minusICON from "../assets/icons/black-minus.png";
const tempData = [
  {
    id: "iID0",
    name: "Repair & Protect Kit",
    price: 41.99,
    file: "repair-and-protect-kit",
  },
  {
    id: "iID1",
    name: "Restorative Hair Mask",
    price: 18.99,
    file: "restorative-hair-mask",
  },
  {
    id: "iID2",
    name: "Color Protection Kit",
    price: 34.99,
    file: "color-protection-kit",
  },
  {
    id: "iID3",
    name: "Men's Pomade",
    price: 9.99,
    file: "mens-pomade",
  },
  {
    id: "iID4",
    name: "Niacinamide Serum",
    price: 15.99,
    file: "niacinamide-serum",
  },
  {
    id: "iID5",
    name: "Illumination Face Mask",
    price: 14.99,
    file: "illumination-face-mask",
  },
  {
    id: "iID6",
    name: "Daily Body Lotion",
    price: 9.99,
    file: "daily-body-lotion",
  },
  {
    id: "iID7",
    name: "Nourishing Body Oil",
    price: 10.99,
    file: "nourishing-body-oil",
  },
  {
    id: "iID8",
    name: "Makeup Essentials Kit",
    price: 49.99,
    file: "makeup-essentials-kit",
  },
  {
    id: "iID9",
    name: "Makeup Brush Set",
    price: 15.99,
    file: "makeup-brush-set",
  },
  {
    id: "iID10",
    name: "Hyaluronic Acid Tonic",
    price: 12.99,
    file: "hyaluronic-acid-tonic",
  },
  {
    id: "iID11",
    name: "Revitalizing Hair Oil",
    price: 8.99,
    file: "revitalizing-hair-oil",
  },
];

function Shop() {
  return (
    <div>
      {/* title */}
      <div id="shop-banner">
        <div className="title-container trans-white">
          <h1 className="center">Shop</h1>
          <p id="cart-icon">icon</p>
        </div>
        <h2>Find all your favorite products here.</h2>
      </div>
      {/* shop items */}
      <div className="items-container">
        {tempData.map((item) => (
          <div className="item box">
            {/* item info */}
            <img
              src={require("../assets/images/shop/" + item.file + ".png")}
              alt={item.name}
              className="item-img"
            ></img>
            <p>{item.name}</p>
            <p>${item.price}</p>
            {/* item interactions */}
            <div className="center-children">
              <div className="col-3 center-v">
                <img
                  src={minusICON}
                  alt="subtract item"
                  className="mouse-hover"
                ></img>
                <p>0</p>
                <img
                  src={plusICON}
                  alt="add item"
                  className="mouse-hover"
                ></img>
              </div>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {/* giftcard */}
      <h2 className="center">Gift Cards</h2>
      <div className="giftcard-grid box">
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
