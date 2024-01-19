import React from "react";
import '../App.css';
import '../Styles/Login.css'


function Login() {
    return (
        <div>
            <h1>Log In</h1>
            <div className="contain">
            <form className="loginform">
                <label htmlFor="email">Email</label>
                <input type="text" className="textarea" id="email" />
                <br/>
                <label htmlFor="password">Password</label>
                <input type="text" className="textarea" id="password" />
                <br/>
                <div className="checkbox-container">
                <input type="checkbox" className="check" id="check"/>
                <label htmlFor="check">Remember Me</label>
                </div>
                <button type="button">
                    LOG IN
                </button>
            </form>
            </div>
            <p className="purp">Forgot your password?</p>

            <div className="text-container">
            <p classname="reg">Not registered?</p>
            <p className="purp">Sign up</p>
            </div>

        </div>
    )
}

export default Login;
