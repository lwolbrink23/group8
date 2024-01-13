
function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <p>
          <strong>The Suite Spot</strong>
        </p>
        <p>
          <strong>Phone:</strong> 223-133-2948
        </p>
        <p>
          <strong>Address:</strong> 2343 Suite Spot Way, Orlando, FL 32804
        </p>
        <p>
          <strong>Hours of Operation:</strong>
        </p>
        <ul>
          <li>Sunday: 12-6</li>
          <li>Monday-Friday: 10-7</li>
          <li>Saturday: 9-6</li>
        </ul>
      </div>

      <div className="newsletter">
        <p>
          <strong>Join our Newsletter</strong>
        </p>
        <form action="subscribe.php" method="post">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <div className="social-icons">
          {/* <!-- Add social media icons here- make them not clickable?--> */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="social-icon-1.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" >
            <img src="social-icon-2.png" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="social-icon-3.png" alt="TikTok" />
          </a>
        </div>
      </div>


    </footer>
  );
}

export default Footer;