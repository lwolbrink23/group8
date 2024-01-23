import "../App.css";
import "../Styles/booknow.css"
import SimplyChicHair from '../assets/images/SimplyChicHair.png';
import Polish from '../assets/images/PolishPerfection.png';
import Brush from '../assets/images/BrushBlushBeauty.png';
import Hands from '../assets/images/HealingHandsSpa.png';
import { Link } from 'react-router-dom';
import suiteData from "../data/providers.json";

function BookNowDirectory() {
    return (
        <div>
            <h1 className="center">Directory</h1>
            <div className="dropdown dropdown-content">
                {suiteData.map((item) => (
                    <div className="suites">
                        <div className="top">
                            <img src={SimplyChicHair} alt="SimplyChicHair" />
                            <div className="description">
                                <h3>{item.provider}</h3>
                                <p>{item.suite}<br />{item.phone}<br />Specialties: {item.specialties}</p>
                                <div className="buttons">
                                    <Link to={`/providerprofile/${item.id}`}>
                                        <button>View Profile</button>
                                    </Link>
                                    <Link to="/SelectServices">
                                        <button className="purp-button">Book Now</button></Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>

                ))}

                <p className="right">Next Page</p>
            </div>
            <div className="extra-space"></div>
        </div>
    );
}

export default BookNowDirectory;
