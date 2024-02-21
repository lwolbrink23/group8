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
export const fetchCartDB = async (userID) => {
  const response = await fetch(`${BACKEND_ADDRESS}/user/${userID}/cart`);
  const jsonData = await response.json();
  return jsonData;
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
export const mergeCarts = (cart1, cart2) => {
  const mergedCart = [...cart2];
  cart1.forEach((item1) => {
    const index = mergedCart.findIndex((item2) => item2.id === item1.id);
    if (index !== -1) {
      // Item exists in user's cart, update quantity
      mergedCart[index].qty += item1.qty;
    } else {
      // Item doesn't exist in user's cart, add it
      mergedCart.push(item1);
    }
  });

  return mergedCart;
};
export const countItems = (arr) => {
  let totalQty = 0;
  arr.forEach((item) => {
    totalQty += item.qty;
  });
  return totalQty;
};
export const fetchCartData = async (setCartItems, user) => {
  let cartCookie = "";
  if (Cookies.get("cart")) {
    cartCookie = JSON.parse(Cookies.get("cart"));
  }
  if (user && cartCookie) {
    const cartDB = await fetchCartDB(user.id);
    const mergedCartItems = mergeCarts(cartCookie, cartDB);
    setCartItems(mergedCartItems);
    updateUserCartDB(user.id, mergedCartItems);
    Cookies.remove("cart");
  } else if (user) {
    const cartDB = await fetchCartDB(user.id);
    setCartItems(cartDB);
  } else if (cartCookie) {
    setCartItems(cartCookie);
  }
};