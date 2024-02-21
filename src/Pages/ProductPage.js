import "../Styles/productpage.css";
import "../App.css";
import Stars from "../assets/images/stars.png";
import plusIcon from "../assets/icons/plus.png";
import minusIcon from "../assets/icons/minus.png";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Shopheader from "../Components/Shopheader";
import {
  countItems,
  fetchData,
  fetchCartData,
  updateUserCartDB,
  fetchCartDB,
} from "./functions/shopFunctions";
import { getUser, ScrollToTop } from "./functions/generalFunctions";
import Cookies from "js-cookie";

function ProductPage() {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    fetchData(`/shop/${id}`, setProduct);
    fetchCartData(setCartItems, user);
  }, []);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const AboutContent = () => (
    <div class="green-content">
      <ul dangerouslySetInnerHTML={{ __html: product.about }} />
    </div>
  );

  const IngredientsContent = () => (
    <div class="green-content">
      <div dangerouslySetInnerHTML={{ __html: product.ingredients }} />
    </div>
  );

  const ShippingContent = () => (
    <div class="green-content">
      <p>
        Free standard shipping on all orders. Returns accepted within 14 days of
        purchase.
      </p>
    </div>
  );

  const AboutDropdown = () => {
    const [isAboutVisible, setAboutVisibility] = useState(false);

    const toggleAboutVisibility = () => {
      setAboutVisibility(!isAboutVisible);
    };

    return (
      <div class="green-dropdown">
        <div
          class="green-dropdown-btn"
          onClick={toggleAboutVisibility}
          style={{ cursor: "pointer" }}
        >
          <h2>About this Product</h2>
          <img
            src={isAboutVisible ? minusIcon : plusIcon}
            alt={isAboutVisible ? "Minus Icon" : "Plus Icon"}
          />
        </div>
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
        <div
          class="green-dropdown-btn"
          onClick={toggleIngredientsVisibility}
          style={{ cursor: "pointer" }}
        >
          <h2>Ingredients</h2>
          <img
            src={isIngredientsVisible ? minusIcon : plusIcon}
            alt={isIngredientsVisible ? "Minus Icon" : "Plus Icon"}
          />
        </div>
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
        <div
          class="green-dropdown-btn"
          onClick={toggleShippingVisibility}
          style={{ cursor: "pointer" }}
        >
          <h2>Shipping & Returns</h2>
          <img
            src={isShippingVisible ? minusIcon : plusIcon}
            alt={isShippingVisible ? "Minus Icon" : "Plus Icon"}
          />
        </div>
        {isShippingVisible && <ShippingContent />}
      </div>
    );
  };

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

  const Review = ({ user, date, comment, profilepic }) => {
    const profilePicPath = profilepic || "emptyprofile";

    return (
      <div>
        <div className="review-block">
          <img
            src={require(`../assets/images/${profilePicPath}.png`)}
            alt="profile pic"
            className="profile-pic"
          ></img>
          <div className="review-info">
            <p style={{ fontSize: "18px" }}>
              <strong>{user}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}
            </p>
            <img src={Stars} alt="stars" id="small-stars"></img>
            <p>{comment}</p>
          </div>
        </div>
        <hr className="linebreak" />
      </div>
    );
  };
  const handleAddToCart = async () => {
    const cartPopInfo = {
      name: product.name,
      price: product.price,
      qty: value,
      img: product.file,
    };
    const newItem = {
      id: product.id,
      qty: value,
    };
    if (user) {
      const cartDB = await fetchCartDB(user.id);
      const existingItemIndex = cartDB.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity by adding the qty of the newItem
        cartDB[existingItemIndex].qty += newItem.qty;
      } else {
        // If the item does not exist, add the newItem to the cart
        cartDB.push(newItem);
      }

      setCartItems(cartDB);
      updateUserCartDB(user.id, cartDB);
    } else {
      // add item to cookie
      let cartCookie = Cookies.get("cart");
      let newCartCookie = cartCookie ? JSON.parse(cartCookie) : [];

      const existingItemIndex = newCartCookie.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        newCartCookie[existingItemIndex].qty += newItem.qty;
      } else {
        newCartCookie.push(newItem);
      }

      Cookies.set("cart", JSON.stringify(newCartCookie), {
        expires: 60,
        path: "/",
      });
      setCartItems(newCartCookie);
    }

    // update frontend
    // setCartPopup(cartPopInfo);
  };
  return (
    <div className="product-page">
      <ScrollToTop />
      {/* Header, Navigation, and other elements would go here */}
      <div id="product-banner">
        <Shopheader
          htitle={"Shop"}
          qty={countItems(cartItems)}
          disableBack={true}
        />
      </div>
      <div className="product-info">
        <div className="product-section">
          <img
            src={require("../assets/images/shop/" +
              product.productimg +
              ".png")}
            alt="Product"
            id="product-image"
          ></img>
        </div>
        <div className="product-section">
          <h2 className="titletext">{product.name}</h2>
          <div className="stars-section">
            <Rating
              name="read-only"
              value={product.revrating}
              readOnly
              precision={0.5}
              size="large"
              sx={{
                color: "#8569B8",
                "& .MuiRating-iconEmpty": {
                  color: "grey",
                },
              }}
            />
            <p>
              {product.revrating} ({product.revamount})
            </p>
          </div>
          <h2 id="money">${product.price}</h2>
          <div className="quantity-selector">
            <button onClick={handleDecrement}>-</button>
            <p id="value">{value}</p>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </button>
          <p>
            {product.size}
            <br />
            {product.num}
          </p>
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
          <div className="overall-rating">
            <p id="big">{product.revrating}</p>
            <Rating
              name="read-only"
              value={product.revrating}
              readOnly
              precision={0.5}
              size="large"
              sx={{
                color: "#8569B8",
                "& .MuiRating-iconEmpty": {
                  color: "grey",
                },
              }}
            />
            <p>{product.revamount} reviews</p>
          </div>
        </div>
        <div className="display-reviews">
          <p id="reviews-count">{product.revamount} Reviews</p>
          {product.reviews.map((review, index) => (
            <Review
              key={index}
              user={review.user}
              date={review.date}
              comment={review.comment}
              profilepic={review.profilepic}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
