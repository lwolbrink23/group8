import "../Styles/productpage.css"
import "../App.css";
import shopICON from "../assets/icons/icons8-shopping-cart-100.png";
import BackButton from "../Components/BackButton";
import ProductPic from "../assets/images/pexels-natallia-photo.png"
import Stars from "../assets/images/stars.png"


function ProductPage() {
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
                <img src={ProductPic} alt="Product"></img>
                <h2>Repair & Protect Kit</h2>
                <img src={Stars} alt="stars"></img>
                <p>4.5 (42)</p>
                <p>$41.99</p>
                <div className="quantity-selector">
                    <button>-</button>
                    <input type="number" value="0" />
                    <button>+</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage;