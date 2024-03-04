import React from "react";
import "../Styles/Popup.css";

const PopUpCancel = ({ isOpen, closePopUp, cancelAppt }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup-container">
        <p>Are you sure you want to cancel?</p>
        <button
          onClick={() => {
            closePopUp();
            cancelAppt();
          }}
        >
          Yes
        </button>
        <button onClick={closePopUp} className="cancelPopupBtn">
          No
        </button>
      </div>
    </div>
  );
};

export default PopUpCancel;
