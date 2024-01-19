import "../Styles/productpage.css"
import "../App.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import Stars from "../assets/images/stars.png"
import plusIcon from "../assets/icons/plus.png"
import minusIcon from "../assets/icons/minus.png"
import rating from "../assets/images/VisualRating.png"
import Barber from '../assets/images/barber.png';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import tempData from "../data/shop.json";


function ProductPage() {

  const { id } = useParams();
  const product = tempData.find(item => item.id.toString() === id);

  const AboutContent = () => (
    <div class="green-content">
      <ul>
        <li>Rejuvenating Serum: Formulated with nourishing ingredients to repair and strengthen each hair strand.</li>
        <li>Specialized Shampoo: Gently cleanses, removing impurities while promoting a healthier scalp.</li>
        <li>Moisture-Lock Conditioner: Works to lock in moisture, leaving your hair silky smooth and more resilient.</li>
      </ul>
    </div>
  )

  const IngredientsContent = () => (
    <div class="green-content">
      <p>Please refer to individual bottles for ingredient information.</p>
    </div>
  )

  const ShippingContent = () => (
    <div class="green-content">
      <p>Free standard shipping on all orders. Returns accepted within 14 days of purchase.</p>
    </div>
  )

  const AboutDropdown = () => {
    const [isAboutVisible, setAboutVisibility] = useState(false);


    const toggleAboutVisibility = () => {
      setAboutVisibility(!isAboutVisible);

    };

    return (
      <div class="green-dropdown">
        <div class="green-dropdown-btn" onClick={toggleAboutVisibility} style={{ cursor: 'pointer' }}><h2>About this Product</h2><img
          src={isAboutVisible ? minusIcon : plusIcon}
          alt={isAboutVisible ? 'Minus Icon' : 'Plus Icon'}
        /></div>
        {isAboutVisible && <AboutContent />}
      </div>
    );
  };

  const IngredientsDropdown = () => {
    const [isIngredientsVisible, setIngredientsVisibility] = useState(false);


    const toggleIngredientsVisibility = () => {
      setIngredientsVisibility(!isIngredientsVisible);

    };

    return (
      <div class="green-dropdown">
        <div class="green-dropdown-btn" onClick={toggleIngredientsVisibility} style={{ cursor: 'pointer' }}><h2>Ingredients</h2><img
          src={isIngredientsVisible ? minusIcon : plusIcon}
          alt={isIngredientsVisible ? 'Minus Icon' : 'Plus Icon'}
        /></div>
        {isIngredientsVisible && <IngredientsContent />}
      </div>
    );
  };

  const ShippingDropdown = () => {
    const [isShippingVisible, setShippingVisibility] = useState(false);


    const toggleShippingVisibility = () => {
      setShippingVisibility(!isShippingVisible);

    };

    return (
      <div class="green-dropdown">
        <div class="green-dropdown-btn" onClick={toggleShippingVisibility} style={{ cursor: 'pointer' }}><h2>Shipping & Returns</h2><img
          src={isShippingVisible ? minusIcon : plusIcon}
          alt={isShippingVisible ? 'Minus Icon' : 'Plus Icon'}
        /></div>
        {isShippingVisible && <ShippingContent />}
      </div>
    );
  };

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

  const Review = () => {
    return (
      <div>
        <div className="review-block">
          <img src={Barber} alt="profile pic" className="profile-pic"></img>
          <div className="review-info">
            <p style={{ fontSize: "18px" }}><strong>Sara Wilson</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/15/23</p>
            <img src={Stars} alt="stars" id="small-stars"></img>
            <p>This saved my damaged hair! I wish it came in bigger sizes.</p>
          </div>
        </div>
        <hr className="linebreak" />
      </div>
    )
  }

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
          <img src={require("../assets/images/shop/" + product.productimg + ".png")} alt="Product" id="product-image"></img>
        </div>
        <div className="product-section">
          <h2 className="titletext">{product.name}</h2>
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
          <p>1.62 OZ | 8 OZ | 8 OZ<br />Item Num. SPS-001004</p>
        </div>
      </div>
      <div className="green-dropdown">
        <AboutDropdown />
        <IngredientsDropdown />
        <ShippingDropdown />
      </div>
      <div className="reviews">
        <h1>Customer Reviews</h1>
        <div className="above-reviews">
          <img src={rating} alt="rating system"></img>
          <div className="overall-rating">
            <p id="big">4.5</p>
            <img src={Stars} alt="stars" id="stars"></img>
            <p>42 reviews</p>
          </div>
        </div>
        <div className="display-reviews">
          <p id="reviews-count">42 Reviews</p>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;