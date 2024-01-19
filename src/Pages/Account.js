import React from "react";
import "../App.css";
import "../Styles/Account.css"

function Account() {
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
                <br/>
                <button type="button">
                    LOG IN
                </button>
            </form>
            </div>
            <p className="purp">Forgot your password?</p>
            <div className="text-container">
            <p>Not registered? </p>
            <p className="purp"> Sign up</p>
            </div>
        </div>
    )
}

export default Account;
