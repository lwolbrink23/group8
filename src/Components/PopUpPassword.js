import React, { useState } from 'react';
import '../Styles/Popup.css';

const PopupPassword = ({ isOpen, closePopup }) => {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        // Implement email validation and submission logic here if needed
        setSubmitted(true);
        // Here you can also trigger the email sending logic
    };

    if (submitted) {
        return (
            <div className="popup-background">
                <div className="popup-container">
                    <p>Sending you an email to change your password</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
        );
    }

    return (
        <div className="popup-background">
            <div className="popup-container">
                {/*add dynamic html in here*/}
                <label>Enter Your Email <br /></label>
                <input type="email" value={email} onChange={handleEmailChange} className="popup-input" />
                <button onClick={handleSubmit} disabled={!email}>Submit</button>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default PopupPassword;