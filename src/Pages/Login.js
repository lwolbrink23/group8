import React from 'react';
import '../App.css';

function Account() {
    return (
        <div>
        <h1>Log In</h1>
        <form>
        <label htmlfor='email'>Email</label>
        <input type="text" className='fields' id="email" />
        <br />
        <label htmlfor='password'>Password</label>
        <input type="text" className='fields' id="password" />
        <input type="checkbox" classname='check' id='check'/>
        <label htmlfor='check'>Remember Me</label>
        </form>
          <button type="button">
            Login
          </button>
  

        </div>
    )
}

export default Account