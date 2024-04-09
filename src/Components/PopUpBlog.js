import React from 'react';
import '../Styles/Popup.css';

const PopupBlog = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Thank you for subscribing
                    to our blog!</p>
                <p>Check your email to get the latest info about The Suite Spot!</p>
                <button onClick={closePopup}>Close</button>
                <div className="popup-background" onClick={closePopup}></div>
            </div>
        </div>
    );
};

export default PopupBlog;