import React from 'react';
import '../Styles/Popup.css'; // Assuming you create a CSS file for styling

const PopupBlog = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Thank You for subscribing
                    to our blog!</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default PopupBlog;