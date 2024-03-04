import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import OurStory from "./Pages/OurStory";
import OurSuites from "./Pages/OurSuites";
import OurServices from "./Pages/OurServices";
import Blog from "./Pages/blog";
import BlogPostData from "./Pages/blogpostdata";
import BookNowDirectory from "./Pages/BookNowDirectory";
import ProviderProfile from "./Pages/ProviderProfile";
import ChicServices from "./Pages/ChicServices";
import PolishServices from "./Pages/PolishServices";
import BlushServices from "./Pages/BlushServices";
import HealingHands from "./Pages/HealingServices";
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
import SignUp from "./Pages/SignUp";
import SelectTime from "./Pages/SelectTime";
import Account from "./Pages/Account";
import ApptDetails from "./Pages/ApptDetails";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
export const BACKEND_ADDRESS = "http://localhost:3003";
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
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/account/" element={<Account />} />
          <Route path="/appointment/:id" element={<ApptDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/blogpost/:category/:id"
            element={<BlogPostData />}
          />
          <Route path="/booknow" element={<BookNowDirectory />} />
          <Route path="/providerprofile/:id" element={<ProviderProfile />} />
          <Route
            path="/selectservices_simply_chic"
            element={<ChicServices />}
          />
          <Route
            path="/selectservices_polish_perfection"
            element={<PolishServices />}
          />
          <Route
            path="/selectservices_brush_blush"
            element={<BlushServices />}
          />
          <Route
            path="/selectservices_healing_hands"
            element={<HealingHands />}
          />
          <Route path="/appointment_overview" element={<Overview />} />
          <Route path="/appointment_confirmed" element={<Confirmed />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/selecttime" element={<SelectTime />} />
          <Route path="/order_placed/:id" element={<OrderPlaced />} />
          <Route path="/order_details/:id" element={<OrderDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
