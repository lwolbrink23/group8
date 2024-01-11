import './App.css';
import './Styles/main.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'

// this is only the home page elements
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
