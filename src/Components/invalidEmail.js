import React from "react";
import "../Styles/Popup.css";

const PopupInvalid = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup-container">
       <h2 style={{color:"#D60E0E"}}>Invalid Email</h2>
        <p>
          Please enter a valid email address.
          Example: 
          email@example.com
        </p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopupInvalid;
