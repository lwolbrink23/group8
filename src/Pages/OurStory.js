import "../App.css";

function OurStory() {
    return (
        <div>
            <div class="page-title">
                <h2>About</h2>
                <h1>Our Story</h1>

                <img src="assets/logo/TSS Circle logo Transparent.png" alt="background" />
            </div>
            <br />
            <div class="story-mission-container">
                <div class="our-story">
                    <h1>Our Story</h1>
                    <p>
                        "The Suite Spot" was founded with a vision to create a space where beauty providers
                        could thrive and clients could indulge in a world of beauty and relaxation.
                        Our story is one of innovation and empowerment, a journey that continues to unfold.
                        Discover how our humble beginnings have led to a thriving community where beauty meets inspiration.
                    </p>
                </div>
                <div class="our-mission">
                    <h1>Our Mission</h1>
                    <p>
                        At "The Suite Spot," our mission is simple yet profound:
                        to empower providers and elevate the beauty and wellness experience
                        for our clients. We are committed to providing a nurturing environment
                        where talent flourishes, creativity is celebrated, and the pursuit
                        of excellence is unwavering. Our aim is to be the catalyst for your
                        personal and professional success. Join us in our mission to create a
                        world where beauty knows no bounds.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div class="awards-container">
                <h1>Awards</h1>
                <div class="golden-scissors">
                    <h2>Golden Scissors Award</h2>
                    <img src="assets/logo/TSS Circle logo Transparent.png" alt="scissors" />
                    <ul>
                        Voted the #1 Salon for Exceptional
                        Haircuts and Styles in 2022.
                    </ul>
                </div>
                <div class="diamond-spa">
                    <h2>Diamond Spa Award</h2>

                    <img src="assets/logo/TSS Circle logo Transparent.png" alt="diamond" />
                    <ul>
                        Recognized as the #1 Destination for Relaxation
                        and Pampering by Spa Enthusiasts in 2023.
                    </ul>
                </div>
                <div class="platinum-innovators">
                    <h2>Platinum Innovators Award</h2>

                    <img src="assets/logo/TSS Circle logo Transparent.png" alt="shooting star" />
                    <ul>
                        Voted Top Choice for Innovative Beauty Services by the Beauty
                        Innovators Association in 2024.
                    </ul>
                </div>
                <br />
                <button type="button" onclick="alert('Redirect to suites')">Learn More About Our Suites!</button>
            </div>
        </div>
    );
}

export default OurStory;