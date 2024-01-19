// App.js or your desired component file

import React from 'react';
import '../App.css';
import '../Styles/oursuites.css'
import oursuitesimg1 from '../assets/images/oursuitesimg1.png';
import oursuitesimg2 from '../assets/images/oursuitesimg2.png';



function OurSuites() {
  return (
      <div>
        <div>
        <h1>Our Suites</h1>
        <p className='p'>
          Step into our suites, and let the stress of the day melt away as you
          embark on a journey of beauty and well-being. Our suites are
          thoughtfully designed to provide a relaxing and comfortable
          environment for both our providers and their clients. Your comfort is
          our priority.
        </p>
      </div>
      <div className='centerit'>
      <div className="blurb-container">
        <div className="blurbs">
            <img src={oursuitesimg1} alt='Suite Pic 1' />
          <h2>Quality Relaxation</h2>
          <p>
            From serene lighting to plush seating, we've thought of everything
            to ensure a quality experience.
          </p>
        </div>
        <div className="blurbs">
            <img src={oursuitesimg2} alt='Suite Pic 2' />
          <h2>Impeccable Design</h2>
          <p>
            Each suite is meticulously designed to create a welcoming and
            aesthetically pleasing space. You'll find comfort and sophistication
            in every corner.
          </p>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="rent-section">
        <h1>Rent a Suite</h1>
        <div className='pmain'>
        <p>
          Are you a Lifestyle Professional looking to lease a suite? Contact us
          below, and a manager will get back to you.
        </p>
        </div>
        <form className="formarea">
          <label htmlFor='name'>Name</label>
          <input type="text" className='fields' id="name" />
          <br />
          <label htmlFor='email'>Email</label>
          <input type="text" className='fields' id="email" />
          <br />
          <label htmlFor='subject'>Subject</label>
          <input type="text" className='fields' id="subject" />
          <br />
          <label htmlFor='message'>Message</label>
          <textarea className='fields'></textarea>
          <button type="button" onClick={() => alert("Send Message")}>
            Send Message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default OurSuites;
