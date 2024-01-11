import './App.css';
import './Styles/main.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import OurStory from './Pages/OurStory'
import OurSuites from './Pages/OurSuites'
import OurServices from './Pages/OurServices'
import Faqs from './Pages/Faqs'
import { Route, Routes } from "react-router-dom"

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
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
