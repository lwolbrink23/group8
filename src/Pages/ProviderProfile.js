import "../App.css";
import "../Styles/providerprofile.css"
import suiteData from "../data/providers.json";
import { useParams, useNavigate, Link } from 'react-router-dom';


function ProviderProfile() {

    const { id } = useParams();
    const suite = suiteData.find(item => item.id.toString() === id);

    const navigate = useNavigate();

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
                    <Link to={suite.booknow}><button type='button' className='purp-button'>BOOK NOW</button></Link>
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
            <h2 className="center">Gallery</h2>
            <div class="gallery-container">
                <div class="center">
                    {suite.gallery && suite.gallery[0] && <img src={require(`../assets/images/${suite.gallery[0]}.png`)} alt="Main Gallery" id="largeimg" />}
                </div>
                <div class="thumbnail-container">
                    {suite.gallery && suite.gallery.slice(1).map((image, index) => (
                        image && <img key={index} src={require(`../assets/images/${image}.png`)} alt={`Thumbnail ${index + 1}`} class="smallimg" />
                    ))}
                </div>
            </div>
            <div className="mobile-gallery">
                {suite.gallery && suite.gallery.slice(1).map((image, index) => (
                    image && <img key={index} src={require(`../assets/images/${image}.png`)} alt={`Thumbnail ${index + 1}`} />
                ))}
            </div>
            <div className="extra-space"></div>
        </div>
    )
}

export default ProviderProfile