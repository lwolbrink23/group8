import React from 'react';
import '../Styles/Popup.css';

const PopupContact = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Thank you for contacting us!</p>
                <p>We will get back to you shortly.</p>
                <button onClick={closePopup}>Close</button>
                <div className="popup-background" onClick={closePopup}></div>
            </div>
        </div>
    );
};

export default PopupContact;