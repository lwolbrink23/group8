import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Popup.css';

const PopupSignOut = ({ isOpen, closePopup }) => {
    const navigate = useNavigate();
    if (!isOpen) return null;


    const redirectToLogin = () => {
        navigate('/Login'); // Adjust the route as necessary
    };

    return (
        <div className="popup-background">
            <div className="popup-container">
                <p>Are you sure you want to sign out?</p>
                <button onClick={redirectToLogin}>Yes</button>
            </div>
        </div>
    );
};

export default PopupSignOut;