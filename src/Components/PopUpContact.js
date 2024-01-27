import React from 'react';
import '../Styles/Popup.css'; // Assuming you create a CSS file for styling

const PopupContact = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Thank you for contacting us!</p>
                <p>We will get back to you shortly.</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default PopupContact;