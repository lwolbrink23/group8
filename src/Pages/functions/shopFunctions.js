import { BACKEND_ADDRESS } from "../../App";

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

export const updateUserCartDB = async (userID, cartData) => {
  try {
    const response = await fetch(`${BACKEND_ADDRESS}/user/${userID}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: cartData }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Log success message or handle response data
    } else {
      console.error("Failed to update user cart:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating user cart:", error);
  }
};
