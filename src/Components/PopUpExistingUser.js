import React from 'react';
import "../Styles/Popup.css";

const PopUpExistingUser = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup-container">
        <h2>Account Exists</h2>
        <p>Your account already exists. Please log in or use a different email.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopUpExistingUser;




