import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import OurStory from "./Pages/OurStory";
import OurSuites from "./Pages/OurSuites";
import OurServices from "./Pages/OurServices";
import Blog from "./Pages/blog";
import BlogPost from "./Pages/BlogPost";
import BookNowDirectory from "./Pages/BookNowDirectory";
import ProviderProfile from "./Pages/ProviderProfile";
import SelectServices from "./Pages/SelectServices";
import Overview from "./Pages/ApptOverview";
import Confirmed from "./Pages/ApptConfirmed";
import Faqs from "./Pages/Faqs";
import Shop from "./Pages/Shop";
import OrderPlaced from "./Pages/OrderPlaced";
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
          <Route path="/booknow" element={<BookNowDirectory />} />
          <Route path="/providerprofile" element={<ProviderProfile />} />
          <Route path="/selectservices" element={<SelectServices />} />
          <Route path="/appointment_overview" element={<Overview />} />
          <Route path="/appointment_confirmed" element={<Confirmed />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order_placed" element={<OrderPlaced />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
