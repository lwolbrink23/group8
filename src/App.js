import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import OurStory from "./Pages/OurStory";
import OurSuites from "./Pages/OurSuites";
import OurServices from "./Pages/OurServices";
import Blog from "./Pages/blog";
import BlogPost from "./Pages/BlogPost";
import BlogPost2 from "./Pages/BlogPost-two";
import BookNowDirectory from "./Pages/BookNowDirectory";
import ProviderProfile from "./Pages/ProviderProfile";
import ChicServices from "./Pages/ChicServices";
import PolishServices from "./Pages/PolishServices"
import BlushServices from "./Pages/BlushServices"
import HealingHands from "./Pages/HealingServices"
import Overview from "./Pages/ApptOverview";
import Confirmed from "./Pages/ApptConfirmed";
import Faqs from "./Pages/Faqs";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import OrderPlaced from "./Pages/OrderPlaced";
import OrderDetails from "./Pages/OrderDetails";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import SelectTime from "./Pages/SelectTime";
import { Route, Routes } from "react-router-dom";

// this is only the home page elements
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/oursuites" element={<OurSuites />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/blogpost_two" element={<BlogPost2 />} />
          <Route path="/booknow" element={<BookNowDirectory />} />
          <Route path="/providerprofile/:id" element={<ProviderProfile />} />
          <Route path="/selectservices_simply_chic" element={<ChicServices />} />
          <Route path="/selectservices_polish_perfection" element={<PolishServices />} />
          <Route path="/selectservices_brush_blush" element={<BlushServices />} />
          <Route path="/selectservices_healing_hands" element={<HealingHands />} />
          <Route path="/appointment_overview" element={<Overview />} />
          <Route path="/appointment_confirmed" element={<Confirmed />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/selecttime" element={<SelectTime />} />
          <Route path="/order_placed" element={<OrderPlaced />} />
          <Route path="/order_details" element={<OrderDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
