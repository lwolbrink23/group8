import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}
