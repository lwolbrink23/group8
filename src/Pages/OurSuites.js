// App.js or your desired component file

import React from 'react';
import Header from '../Components/Header';
import '../App.css';
import '../Styles/oursuites.css'



function OurSuites() {
  return (
    <div>
      <div>
        <h1 className='center'>Our Suites</h1>
        <ul className='text'>
            Step into our suites, and let the stress of the day melt away as you
          embark on a journey of beauty and well-being. Our suites are
          thoughtfully designed to provide a relaxing and comfortable
          environment for both our providers and their clients. Your comfort is
          our priority.
        </ul>
      </div>
      <div className="blurb-container">
        <div className="blurbs">
            <img src='/assets/images/oursuitesimg1.png' alt='Suite Pic 1' />
          <h2>Quality Relaxation</h2>
          <ul>
            From serene lighting to plush seating, we've thought of everything
            to ensure a quality experience.
          </ul>
        </div>
        <div className="blurbs">
            <img src='/assets/images/oursuitesimg2.png' alt='Suite Pic 2' />
          <h2>Impeccable Design</h2>
          <ul>
            Each suite is meticulously designed to create a welcoming and
            aesthetically pleasing space. You'll find comfort and sophistication
            in every corner.
          </ul>
        </div>
      </div>
      <div className="rent-section">
        <h1 className='title'>Rent a Suite</h1>
        <ul className="text2">
          Are you a Lifestyle Professional looking to lease a suite? Contact us
          below, and a manager will get back to you.
        </ul>
        <form className="inline">
          <label>Name</label>
          <input type="text" className='fields' id="name" />
          <br />
          <label>Email</label>
          <input type="text" className='fields' id="email" />
          <br />
          <label>Subject</label>
          <input type="text" className='fields' id="subject" />
          <br />
          <label>Message</label>
          <textarea className='fields'></textarea>
          <button type="button" className='button' onClick={() => alert("Send Message")}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default OurSuites;
