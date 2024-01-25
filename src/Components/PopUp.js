import React from 'react';
import '../Styles/Popup.css'; // Assuming you create a CSS file for styling

const Popup = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <h2>Thank you for subscribing!</h2>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default Popup;