import "../Styles/footer.css"
import Facebook from "../assets/icons/facebook.png"
import Insta from "../assets/icons/instagram.png"
import Tiktok from "../assets/icons/tiktok.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="footer-section suite-spot">
            <h2>The Suite Spot</h2>
            <p><strong>Phone:</strong><br />223-133-2948<br /><strong>Address:</strong><br />2343 Suite Spot Way, Orlando, FL 32804</p>

          </div>
          <div className="footer-section hours">
            <p><strong>Hours of Operation</strong></p>
            <p>Sunday: 12-6<br />Monday-Friday: 10-7<br />Saturday: 9-6</p>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h2>Join our Newsletter</h2>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            {/* Replace # with your social media links */}
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Insta} alt="Instagram" /></a>
            <a href="#"><img src={Tiktok} alt="TikTok" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;