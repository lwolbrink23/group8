import "../App.css";
import "../Styles/providerprofile.css"
import SimplyChicHair from '../assets/images/SimplyChicHair.png';
import Blowdry from '../assets/images/Blowdry.png';
import Hairdye from '../assets/images/Hairdye.png';
import Pretty from '../assets/images/prettyhair.png';
import Barber from '../assets/images/barber.png';
import Haircut from '../assets/images/haircut.png';
import suiteData from "../data/providers.json";
import { useParams } from 'react-router-dom';


function ProviderProfile() {

    const { id } = useParams();
    const suite = suiteData.find(item => item.id.toString() === id);

    return (
        <div>
            <div class="container">
                <div class="image-wrapper">
                    <img src={require("../assets/images/" + suite.image + ".png")} alt="Simply Chic Hair" />
                </div>
                <div class="info">
                    <h1>{suite.provider}</h1>
                    <p>{suite.suite}</p>
                    <p>{suite.phone}</p>
                    <p>{suite.email}</p>
                    <button type="button" className="purp-button">BOOK NOW</button> {/*make something pass through here*/}
                </div>
            </div>
            <div className="dropdown dropdown-content space-below">
                <h2 className="center">About</h2>
                <p>{suite.about}</p>
            </div>

            <div className="services dropdown dropdown-content space-below">
                <section class="services-section space-below">
                    <h2 className="center">Services</h2>
                    <div class="services-container">
                        {Object.entries(suite.services).map(([serviceName, serviceDetails]) => (
                            <div key={serviceName} class="service-category">
                                <h2>{serviceName}</h2>
                                <div dangerouslySetInnerHTML={{ __html: serviceDetails }} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div class="gallery-container">
                <h2 className="center">Gallery</h2>
                <div class="center">
                    {suite.gallery && suite.gallery[0] && <img src={require(`../assets/images/${suite.gallery[0]}.png`)} alt="Main Gallery" />}
                </div>
                <div class="thumbnail-container">
                    {suite.gallery && suite.gallery.slice(1).map((image, index) => (
                        image && <img key={index} src={require(`../assets/images/${image}.png`)} alt={`Thumbnail ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="extra-space"></div>
        </div>
    )
}

export default ProviderProfile