import React from 'react';
import '../Styles/Popup.css';

const PopUpExistingUser = ({ isOpen, closePopup }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>An account with this email already exists. Please use a different email or log in.</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default PopUpExistingUser;