import "../App.css";
import "../Styles/booknow.css"
import SimplyChicHair from '../assets/images/SimplyChicHair.png';

function BookNowDirectory() {
    return (
        <div>
            <h1 className="center">Directory</h1>
            <div className="dropdown dropdown-content">
                <div className="suites" id="box1">
                    <div className="top">
                        <img src={SimplyChicHair} alt="SimplyChicHair" />
                        <div className="description">
                            <h3>Simply Chic Hair</h3>
                            <p>Suite #1 <br />(321) 123-3211<br />Specialties: Hair cuts, color and styling.</p>
                            <div className="buttons">
                                <button>View Profile</button>
                                <button className="purp-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookNowDirectory;
