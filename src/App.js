//import logo from './logo.svg';
import './App.css';
import './Styles/main.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import OurSuites from './Pages/OurSuites';

function App() {
  return (
    <div className="App">
    <Header/>
     <Home />
     <OurSuites></OurSuites>
     <Footer />
    </div>
  );
}

export default App;
