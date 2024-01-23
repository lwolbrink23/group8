import "../App.css";
import "../Styles/providerprofile.css"
import SimplyChicHair from '../assets/images/SimplyChicHair.png';
import Blowdry from '../assets/images/Blowdry.png';
import Hairdye from '../assets/images/Hairdye.png';
import Pretty from '../assets/images/prettyhair.png';
import Barber from '../assets/images/barber.png';
import Haircut from '../assets/images/haircut.png';
import suiteData from "../data/providers.json";


function ProviderProfile() {
    return (
        <div>
            <div class="container">
                <div class="image-wrapper">
                    <img src={SimplyChicHair} alt="Simply Chic Hair" />
                </div>
                <div class="info">
                    <h1>Simply Chic Hair</h1>
                    <p>Suite #1</p>
                    <p>(321) 123-3211</p>
                    <p>Simplychic@thesuitespot.com</p>
                    <button type="button" className="purp-button">BOOK NOW</button>
                </div>
            </div>
            <div className="dropdown dropdown-content space-below">
                <h2 className="center">About</h2>
                <p>At Simply Chic Hair, we're more than just hairstylists; we're your partners in creating the perfect look that
                    reflects your individuality. Whether you're seeking a simple trim or a complete hair transformation, our team
                    is here to make your vision a reality. We specialize in a wide range of services, from precision haircuts and
                    luxurious coloring to transformative hair extensions and stunning up-dos.</p>
            </div>

            <div className="services dropdown dropdown-content space-below">
                <section class="services-section space-below">
                    <h2 className="center">Services</h2>
                    <div class="services-container">
                        <div class="service-category">
                            <h2>Haircut</h2>
                            <p>A haircut involves trimming and shaping your hair to achieve a desired length and style. It can range from a simple trim to a complete hair transformation.</p>
                            <p>Standard Haircut: $40</p>
                            <p>Layered Haircut: $80</p>
                            <p>Children's Haircuts: $30</p>
                        </div>
                        <div class="service-category">
                            <h2>Hair Coloring</h2>
                            <p>Hair coloring services include techniques like highlights, lowlights, balayage, and full color changes to alter the color of your hair, creating a new look or covering gray hair.</p>
                            <p>Root Touchup: $50</p>
                            <p>Partial / Full Balayage: $70/$200</p>
                            <p>Highlights or Lowlights: $100</p>
                        </div>
                        <div class="service-category">
                            <h2>Hair Treatments</h2>
                            <p>These treatments can include deep conditioning, relaxing, hair masks, and keratin treatments to improve the health and manageability of your hair.</p>
                            <p>Brazilian Blowout: $200</p>
                            <p>Keratin Treatment: $200</p>
                            <p>Deep Conditioning: $40</p>
                        </div>
                        <div class="service-category">
                            <h2>Hair Extensions</h2>
                            <p>Hair extensions add length and volume to your natural hair. They can be clipped, sewn, bonded, or taped into place for a temporary or semi-permanent change.</p>
                            <p>Tape-in Extensions: $400</p>
                            <p>Sew-in Extensions: $500</p>
                            <p>Fusion Extensions: $600</p>
                        </div>
                        <div class="service-category">
                            <h2>Hair Styling</h2>
                            <p>This service includes blowouts, curling, straightening, and updos. It's ideal for special occasions or when you want to change your everyday look.</p>
                            <p>Classic Blowout: $20</p>
                            <p>Updo: $100</p>
                            <p>Box Braids: $100</p>
                            <p>Corn Rows: $100</p>
                            <p>Special Occasion Styling: $100</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="gallery-container">
                <h2 className="center">Gallery</h2>
                <div class="center">
                    <img src={Blowdry} alt="Main Gallery" />
                </div>
                <div class="thumbnail-container">
                    <img src={Hairdye} alt="Thumbnail 1" />
                    <img src={Barber} alt="Thumbnail 2" />
                    <img src={Haircut} alt="Thumbnail 3" />
                    <img src={Pretty} alt="Thumbnail 4" />
                </div>
            </div>
            <div className="extra-space"></div>
        </div>
    )
}

export default ProviderProfile