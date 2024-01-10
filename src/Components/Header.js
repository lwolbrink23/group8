function Header() {
    return (
<header>
      {/* nav bar */}
      <div class="nav">
        {/* <!--logo and navigation links container--> */}
        <div class="logo-and-nav">
            {/* <!--logo--> */}
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="Logo" class="logo" />
            {/* <!--hamburger menu--> */}
            <ul>
            <li><a href="default.asp">Home</a></li>
            <li class="dropdown">
                <a href="a" class="about-link">About</a>
                <ul class="subpages">
                    <li><a href="our-story.html">Our Story</a></li>
                    <li><a href="OurSuites.js">Our Suites</a></li>
                    <li><a href="our-services.html">Our Services</a></li>
                    <li><a href="photo-gallery.html">Photo Gallery</a></li>
                </ul>
            </li>
          <li><a href="linkhere">Blog</a></li>
          <li><a href="linkhere">FAQ's</a></li>
          <li><a href="linkhere">Shop</a></li>
          <li><a href="linkhere">Contact Us</a></li>
          <li><a href="linkhere">Account</a></li>
          <li>
            <button
              type="button"
              onclick="alert('Button clicked!')"
              class="purp-button"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
      </div>
    </header>
    );
  }
  
  export default Header;