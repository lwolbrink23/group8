import "../Styles/home.css"; // Import your styles

function Home() {
  return (
    <div className="App">
      <div className="trans-white">
        <h1>The Suite Spot</h1>
        <h2>Where Beauty Finds Its Home</h2>
      </div>
      {/* <!-- Promo Carousel --> */}
      <div className="promos">
        {/* <!-- Add promo carousel content here --> */}
        <button type="button" onClick={() => alert("View Products")}>
          View Our Products
        </button>
      </div>

      {/* <!-- Book Now Section --> */}
      <div className="trans-white">
        <h3>Pampering yourself is just one click away!</h3>
        <button
          type="button"
          onClick={() => alert("Book Now!")}
          className="purp-button"
        >
          Book Now
        </button>
      </div>

      {/* <!-- "Why Choose Us?" Section --> */}
      <div className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        {/* <!-- I added a ul tag around the li elements - Lindsey --> */}
        <ul>
          <li>
            We're all about empowering you to be your own boss. Enjoy the
            freedom of setting your own hours and taking control of your career.
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
      <img src="assets/images/spaproducts.png" alt="Spa Products" />

      <img src="assets/images/brownhair.png" alt="Hair" />
      {/* <!-- "Our Providers" Section --> */}
      <div className="our-providers-section">
        <h2>Our Providers</h2>
        <p>
          Our location is the perfect hub for a wide range of beauty and
          wellness services. Here are some of the dedicated professionals you'll
          find here:
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
        <button type="button" onClick={() => alert("Button clicked!")}>
          View Our Services
        </button>
      </div>

      {/* <!-- Gallery --> */}
      <div className="gallery">
        <h2>Gallery</h2>
        {/* <!-- Add gallery carousel content here --> */}
      </div>

      {/* <!-- Testimonials --> */}
      <div className="testimonials">
        <h2>Testimonials</h2>
        {/* <!-- Add testimonials carousel content here --> */}
      </div>
    </div>
  );
}
export default Home;
