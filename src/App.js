import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import OurStory from "./Pages/OurStory";
import OurSuites from "./Pages/OurSuites";
import OurServices from "./Pages/OurServices";
import BookNowDirectory from "./Pages/BookNowDirectory";
import Faqs from "./Pages/Faqs";
import Shop from "./Pages/Shop";
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
          <Route path="/booknow" element={<BookNowDirectory />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
