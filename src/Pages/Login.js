import React from "react";
import "../App.css";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Log In</h1>
      <div className="contain">
        <form className="loginform">
          <label htmlFor="email">Email</label>
          <input type="text" className="textarea" id="email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="text" className="textarea" id="password" />
          <br />
          <div className="checkbox-container">
            <input type="checkbox" className="check" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <Link
            to="/Account"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="button" className="logbutton">
              LOG IN
            </button>
          </Link>
        </form>
      </div>
      <p className="purp">Forgot your password?</p>

      <div className="text-container">
        <p classname="reg">
          Not registered?{" "}
          <Link to="/SignUp" className="purp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
