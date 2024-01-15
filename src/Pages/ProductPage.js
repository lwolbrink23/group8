import "../Styles/productpage.css"
import "../App.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import ProductPic from "../assets/images/pexels-natallia-photo.png"
import Stars from "../assets/images/stars.png"
import React, { useState } from 'react';


function ProductPage() {

    const [value, setValue] = useState(1);

  // Function to handle decrement
  const handleDecrement = () => {
  if (value > 0) {
    setValue(value - 1);
  }
};

  // Function to handle increment
  const handleIncrement = () => {
    setValue(value + 1);
  };

    return (
        <div className="product-page">
            {/* Header, Navigation, and other elements would go here */}
            <div id="product-banner">
                <div className="title-container trans-white">
                    <BackButton />
                    <h1>Shop</h1>
                    <img src={shopICON} alt="shopping cart" id="cart-icon"></img>
                </div>
            </div>
            <div className="product-info">
                <div className="product-section">
                    <img src={ProductPic} alt="Product" id="product-image"></img>
                </div>
                <div className="product-section">
                <h2 className="titletext">Repair & Protect Kit</h2>
                <div className="stars-section">
                <img src={Stars} alt="stars" id="stars"></img>
                <p>4.5 (42)</p>
                </div>
                <h2 id="money">$41.99</h2>
                <div className="quantity-selector">
                    <button onClick={handleDecrement}>-</button>
                    <p id="value">{value}</p>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
                <p>1.62 OZ | 8 OZ | 8 OZ<br/>Item Num. SPS-001004</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;