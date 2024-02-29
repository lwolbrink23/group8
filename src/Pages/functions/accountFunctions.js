import { BACKEND_ADDRESS } from "../../App";
import Cookies from "js-cookie";

export const fetchData = async (endpoint, setDataFunction) => {
  try {
    // Fetch data from the backend
    const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
    const jsonData = await response.json();
    setDataFunction(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
export const fetchDataReturn = async (endpoint) => {
  try {
    // Fetch data from the backend
    const response = await fetch(`${BACKEND_ADDRESS}${endpoint}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const fetchApptsDB = async (userID) => {
  const response = await fetch(`${BACKEND_ADDRESS}/appointments/${userID}`);
  const jsonData = await response.json();
  return jsonData;
};

export const fetchOrdersDB = async (userID) => {
  const response = await fetch(`${BACKEND_ADDRESS}/orders/${userID}`);
  const jsonData = await response.json();
  return jsonData;
};
