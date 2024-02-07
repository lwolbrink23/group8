import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BACKEND_ADDRESS } from ".";
// const BACKEND_ADDRESS = "http://localhost:3001"

function App() {
  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch data from backend
        const response = await fetch(`${BACKEND_ADDRESS}/accounts`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    const fetchData2 = async () => {
      try {
        // fetch data from backend
        const response = await fetch(`${BACKEND_ADDRESS}/customers`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setDataC(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };
    fetchData();
    fetchData2();

    // Shortened version by ChatGPT
    // const fetchData = async (endpoint, setDataFunction) => {
    //   try {
    //     // Fetch data from the backend
    //     const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     const jsonData = await response.json();
    //     setDataFunction(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error.message);
    //   }
    // };

    // // Usage example:
    // fetchData('/accounts', setData);
    // fetchData('/customers', setDataC);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>account id: {data.account_id}</p>
        <p>customer username: {dataC.username}</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
