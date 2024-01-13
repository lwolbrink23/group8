import "../App.css";
import "../Styles/booknow.css"
import SimplyChicHair from '../assets/images/SimplyChicHair.png';
import Polish from '../assets/images/PolishPerfection.png';
import Brush from '../assets/images/BrushBlushBeauty.png';
import Hands from '../assets/images/HealingHandsSpa.png';
import { Link } from 'react-router-dom';

function BookNowDirectory() {
    return (
        <div>
            <h1 className="center">Directory</h1>
            <div className="dropdown dropdown-content">
                <div className="suites">
                    <div className="top">
                        <img src={SimplyChicHair} alt="SimplyChicHair" />
                        <div className="description">
                            <h2>Simply Chic Hair</h2>
                            <p>Suite #1 <br />(321) 123-3211<br />Specialties: Hair cuts, color and styling.</p>
                            <div className="buttons">
                                <Link to="/providerprofile">
                                    <button>View Profile</button>
                                </Link>
                                <button className="purp-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="suites">
                    <div className="top">
                        <img src={Polish} alt="SimplyChicHair" />
                        <div className="description">
                            <h2>Polish Perfection</h2>
                            <p>Suite #2 <br />(407) 123-1234<br />Specialties: Manicure, pedicure, dip and acrylic.</p>
                            <div className="buttons">
                                <button>View Profile</button>
                                <button className="purp-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="suites">
                    <div className="top">
                        <img src={Brush} alt="SimplyChicHair" />
                        <div className="description">
                            <h2>Brush & Blush Beauty</h2>
                            <p>Suite #3 <br />(321) 333-1234<br />Specialties: Bridal and event makeup.</p>
                            <div className="buttons">
                                <button>View Profile</button>
                                <button className="purp-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="suites">
                    <div className="top">
                        <img src={Hands} alt="SimplyChicHair" />
                        <div className="description">
                            <h2>Healing Hands Spa</h2>
                            <p>Suite #4 <br />(407) 666-1234<br />Specialties: Massage therapy.</p>
                            <div className="buttons">
                                <button>View Profile</button>
                                <button className="purp-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="right">Next Page</p>
            </div>
            <div className="extra-space"></div>
        </div>
    );
}

export default BookNowDirectory;
