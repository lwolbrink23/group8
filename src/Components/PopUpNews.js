import React from 'react';
import '../Styles/Popup.css'; // Assuming you create a CSS file for styling

const PopupNews = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Thank you for subscribing
                    to our newsletter!</p>
                <p>Check your email to get the latest info about The Suite Spot!</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default PopupNews;