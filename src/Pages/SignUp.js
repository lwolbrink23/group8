import React from "react";
import '../App.css';
import '../Styles/SignUp.css'
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="contain">
            <form className="signupform">
                <div className="inline">
                <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="section1" id="first" />
                </div>
                <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="section1" id="last" />
                </div>
                </div>
                <div className="inline">
                    <div>
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="text" className="section1" id="phone" />
                </div>
                <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" className="section1" id="email" />
                </div>
                </div>
                <label htmlFor="password">Password</label>
                <input type="text" className="textarea" id="password" />
                <br></br>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="text" className="textarea" id="confirm" />
                <br></br>
                <Link to="/Account">
                <button type="button">
                    Sign Up
                </button>
                </Link>
            </form>
            </div>
            <div className="text-container">
            <p classname="reg">Already have an account?</p>
            <p className="purp"><Link to="/login">Log In</Link></p>
            </div>

        </div>
    )
}

export default SignUp;
