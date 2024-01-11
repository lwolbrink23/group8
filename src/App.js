import './App.css';
import './Styles/main.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import OurSuites from './Pages/OurSuites'
import OurServices from './Pages/OurServices'
import { Route, Routes } from "react-router-dom"

// this is only the home page elements
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/oursuites" element={<OurSuites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
