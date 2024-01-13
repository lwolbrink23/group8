import "../Styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="footer-section suite-spot">
            <h2>The Suite Spot</h2>
            <p><strong>Phone:</strong> 223-133-2948<br /><strong>Address:</strong> 2343 Suite Spot Way, Orlando, FL 32804</p>

          </div>
          <div className="footer-section hours">
            <p><strong>Hours of Operation</strong></p>
            <p>Sunday: 12-6<br />Monday-Friday: 10-7<br />Saturday: 9-6</p>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h3>Join our Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            {/* Replace # with your social media links */}
            <a href="#"><img src="/path-to-facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/path-to-instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/path-to-tiktok-icon.png" alt="TikTok" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;