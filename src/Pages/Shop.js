import "../App.css";
import "../Styles/shop.css";

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
    name: "Color Protection Kit",
    price: 34.99,
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
      <div className="title-container">
        <h1 className="center">Shop</h1>
      </div>
      <h2>Find all your favorite products here.</h2>
      {/* shop items */}
      <div className="box">
        <p>item name</p>
        <p>$item price</p>
        <p>0</p>
        <button className="button">Add to Cart</button>
      </div>
      {/* giftcard */}
      <h2 className="center">Gift Cards</h2>
      <div className="giftcard-grid">
        <p>img</p>
        <div>
          <h3>Buy a gift card!</h3>
          <p>
            Looking for the perfect gift for that special someone? We've got you
            covered! Whether it's for a birthday, anniversary, or any special
            occasion, our gift cards are the ideal way to show your
            appreciation.
          </p>
          <p>Enter an amount:</p>
          <input></input>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
