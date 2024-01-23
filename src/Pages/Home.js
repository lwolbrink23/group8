import "../Styles/home.css"; // Import your styles
import { Link } from "react-router-dom";
import MainCarousel from "../Components/MainCarousel.js";
import WebGallery from "../Components/WebGallery.js";
import { Testimonials } from "../Components/Testimonials.js";
import promoBottle from "../assets/images/promo_bottle.png";
import promoAroma from "../assets/images/promo_aroma.png";
import promoHair from "../assets/images/promo_hair.png";
import promoSpa from "../assets/images/promo_spa.png";
import promoWella from "../assets/images/promo_wella.png";
import webpromoBottle from "../assets/images/home banner bottle.png";
import webaroma from "../assets/images/home_aroma.png";
import brownHair from "../assets/images/brownhair.jpg";
import spaProducts from "../assets/images/spaproducts.png";
import webglamour from "../assets/images/web_glamourpromo.png";
import webrelax from "../assets/images/web_relaxpromo.png";
import webwella from "../assets/images/webwellapromo.png";
import eyeball from "../assets/images/eyeball.png";
import hands from "../assets/images/hands.png";
import facemask from "../assets/images/facemask.png";
import gall1 from "../assets/images/gall1.png";
import gall2 from "../assets/images/gall2.png";
import gall3 from "../assets/images/gall3.png";
import gall4 from "../assets/images/gall4.png";
import gall5 from "../assets/images/gall5.png";
import gall6 from "../assets/images/gall6.png";
import gall7 from "../assets/images/gall7.png";

function Home() {
  const mobilecarouselImages = [
    promoBottle,
    promoAroma,
    promoHair,
    promoSpa,
    promoWella,
  ];

  const webcarouselImages = [
    webpromoBottle,
    webaroma,
    webglamour,
    webrelax,
    webwella,
  ];

  const mobilegallImages = [gall1, gall2, eyeball, hands, facemask];

  const webgallImages = [
    gall3,
    gall4,
    gall6,
    gall7,
    gall1,
    gall2,
    hands,
    facemask,
  ];

  return (
    <div className="App">
      <div className="carousel-container-mobile">
        {/* <!-- Promo Carousel mobile --> */}
        <MainCarousel images={mobilecarouselImages} className="mobileMainC" />
        <div className="suite-spot-overlay">
          <h1 className="title">The Suite Spot:</h1>
          <h3 className="center">Where Beauty Finds Its Home.</h3>
        </div>
      </div>
      <div className="carousel-container-web">
        {/* <!-- Promo Carousel web--> */}
        <MainCarousel images={webcarouselImages} className="webMainC" />
        <div className="suite-spot-overlay">
          <h1 className="title">The Suite Spot:</h1>
          <h3 className="center">Where Beauty Finds Its Home.</h3>
        </div>
      </div>
      <Link to="/shop">
        <button type="button" className="promoButton">
          View Our Products
        </button>
      </Link>

      {/* <!-- Book Now Section --> */}
      <div className="trans-white booknow-section">
        <h3>Pampering yourself is just one click away!</h3>
        <Link to="/booknow">
          <button type="button" className="purp-button">
            Book Now
          </button>
        </Link>
      </div>

      {/* <!-- "Why Choose Us?" Section --> */}
      <div className="wcu">
        <div className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          {/* <!-- I added a ul tag around the li elements - Lindsey --> */}
          <ul>
            <li>
              We're all about empowering you to be your own boss. Enjoy the
              freedom of setting your own hours and taking control of your
              career.
            </li>
            <li>
              Our platform is designed to support your professional growth. We
              provide the tools and infrastructure you need to focus on growing
              your client base and income.
            </li>
            <li>
              Decorate your suite in your unique, creative way! Your space is a
              canvas where you can showcase your style and personality, creating
              an inviting atmosphere for your clients.
            </li>
          </ul>
          <p>
            Unlock your potential and join "The Suite Spot" community. Discover
            how we can help you build your beauty business on your own terms.
          </p>
        </div>
        <img src={spaProducts} alt="Spa Products" className="webHomepic1" />
      </div>
      <div className="op">
        <img src={brownHair} alt="Hair" className="webHomepic2" />
        {/* <!-- "Our Providers" Section --> */}
        <div className="our-providers-section">
          <h2>Our Providers</h2>
          <p>
            Our location is the perfect hub for a wide range of beauty and
            wellness services. Here are some of the dedicated professionals
            you'll find here:
          </p>
          <ul>
            <li>Hairdressers</li>
            <li>Makeup Artists</li>
            <li>Nail Artists</li>
            <li>Massage Therapists</li>
          </ul>
          <p>
            Our community of Lifestyle Professionals is dedicated to helping you
            look and feel your best. Discover a wide range of services under one
            roof.
          </p>
          <Link to="/ourservices">
            <button type="button" className="viewServButton">
              View Our Services
            </button>
          </Link>
        </div>
      </div>

      {/* <!-- mobile Gallery --> */}
      <div className="gallery">
        <h2>Gallery</h2>
        {/* <!-- Add gallery carousel content here --> */}
        <MainCarousel images={mobilegallImages} className="mobileGall" />
      </div>
      {/* <!-- web Gallery --> */}
      <div className="webgallery">
        <h2>Gallery</h2>
        {/* <!-- Web gallery grid content here --> */}
        <WebGallery images={webgallImages} />
      </div>
      {/* <!-- Testimonials --> */}
      <div className="testDiv">
        <h2>Testimonials</h2>
        <Testimonials></Testimonials>
        {/* <!-- Add testimonials carousel content here --> */}
      </div>
    </div>
  );
}
export default Home;
