import React, { useState } from 'react';
import '../App.css';
import Header from '../Components/Header';

function OurServices() {
    const HairContent = () => (
        <div class="dropdown-content">
            <p>Haircut</p>
            <p>A haircut involves trimming and shaping your hair to achieve a desired length and style. It can range from a simple trim to a complete hair transformation.</p>

            <p>Hair Coloring</p>
            <p>Hair coloring services include techniques like highlights, lowlights, balayage, and full color changes to alter the color of your hair, creating a new look or covering gray hair.</p>

            <p>Hair Styling</p>
            <p>This service includes blowouts, curling, straightening, and updos. It's ideal for special occasions or when you want to change your everyday look.</p>

            <p>Hair Treatments</p>
            <p>These treatments can include deep conditioning, relaxing, hair masks, and keratin treatments to improve the health and manageability of your hair.</p>

            <p>Brazilian Blowout</p>
            <p>This treatment smooths and straightens frizzy or curly hair, making it more manageable and reducing styling time.</p>

            <p>Hair Extensions</p>
            <p>Hair extensions add length and volume to your natural hair. They can be clipped, sewn, bonded, or taped into place for a temporary or semi-permanent change.</p>

            <p>Hair Braiding</p>
            <p>Hair braiding includes various styles, such as box braids, cornrows, and French braids, which can be decorative or functional.</p>
            <div class="center"><button class="purp-button">Book Now</button></div>
        </div>
    );

    const NailContent = () => (
        <div class="dropdown-content">
            <p>Basic Manicure</p>
            <p>A basic manicure includes nail shaping, cuticle maintenance, and a polish application. It's a quick and classic way to keep your nails neat and polished.</p>

            <p>French Manicure</p>
            <p>A French manicure is characterized by a natural pink or nude base with white tips. This service adds a touch of sophistication to your nails.</p>

            <p>Spa Manicure</p>
            <p>A spa manicure includes exfoliation, moisturizing, and a relaxing hand massage in addition to standard manicure procedures.</p>

            <p>Basic Pedicure</p>
            <p>Similar to a basic manicure, a basic pedicure involves nail shaping, cuticle care, and polish application.</p>

            <p>French Pedicure</p>
            <p>A French pedicure brings the classic elegance of the French manicure to your toes. It features a natural base with white tips.</p>

            <p>Spa Pedicure</p>
            <p>A spa pedicure offers a pampering experience for your feet. In addition to standard pedicure steps, it includes exfoliation, moisturizing, and a soothing foot massage to leave your feet feeling refreshed.</p>

            <p>Acrylic Fill / Full Set</p>
            <p>Acrylic nails are created by applying a liquid and powder mixture to your natural nails, resulting in durable and long-lasting extensions. An acrylic fill maintains and fills in the regrowth of your existing acrylic nails.</p>

            <p>Dip Full Set</p>
            <p>Dip powder nails involve dipping your nails into a colored powder to achieve a durable and chip-resistant finish.</p>

            <p>Fiberglass Full Set</p>
            <p>Fiberglass nails use a lightweight fiberglass mesh to create extensions that are both strong and natural-looking.</p>

            <p>Hand-painted Designs</p>
            <p>Hand-painted nail designs allow for creative and customized artwork on your nails. From intricate patterns to unique motifs, this service adds a personal touch to your manicure or pedicure.</p>

            <p>Ombre Nails</p>
            <p>Ombre nails feature a gradient color effect, blending one color into another for a stylish and eye-catching look.</p>

            <p>Marble Nails</p>
            <p>Marble nails mimic the appearance of natural marble with swirling patterns. This artistic nail technique adds a touch of sophistication and uniqueness to your manicure or pedicure.</p>

            <p>Foiling</p>
            <p>Foiling involves applying metallic or decorative foil to your nails for a bold and textured appearance.</p>

            <p>3D Nail Art</p>
            <p>3D nail art uses embellishments like gems, pearls, and decorative elements to create three-dimensional designs on your nails. It's a creative and expressive way to enhance your manicure or pedicure.</p>

            <p>Paraffin Wax Treatment</p>
            <p>A paraffin wax treatment involves immersing your hands or feet in warm paraffin wax to moisturize and soften the skin. It's a relaxing addition to your manicure or pedicure that leaves your skin feeling smooth.</p>

            <p>Gel Polish</p>
            <p>Gel polish provides a long-lasting and chip-resistant alternative to traditional nail polish. This service includes the application of gel polish, which is cured under a UV or LED light for a durable finish.</p>

            <p>Soak-Off Removal</p>
            <p>Soak-off removal is the process of safely and gently removing gel polish or acrylic nails without causing damage to the natural nails. It ensures a smooth transition between nail services.</p>
        </div>
    )

    const MakeupContent = () => (
        <div class="dropdown-content">
            <p>Classic Makeup Application</p>
            <p>A timeless and elegant makeup look suitable for any occasion. Includes foundation, eyeshadow, eyeliner, mascara, blush, and lipstick.</p>

            <p>Glamorous Evening Makeup</p>
            <p>Perfect for special events or a night out. This service includes a more dramatic eye look, contouring, false eyelashes, and a bold lip color.</p>

            <p>Natural Makeup Look</p>
            <p>Enhance your features with a subtle and natural makeup application. Ideal for a fresh and understated appearance.</p>

            <p>Bridal Makeup Package</p>
            <p>A comprehensive service tailored for brides on their special day. Includes a trial session, consultation, and the final bridal makeup application with long-lasting products for a flawless look in photos.</p>

            <p>Editorial/Fashion Makeup</p>
            <p>Bold and creative makeup for photoshoots, runway shows, or fashion events. This service includes high-impact looks that stand out in a professional setting.</p>

            <p>Special Effects Makeup</p>
            <p>Transform your look with special effects makeup for costume parties, Halloween, or themed events. Pricing varies based on the complexity of the design.</p>

            <p>Makeup Lesson</p>
            <p>A one-on-one session to learn about makeup techniques, product application, and personalized tips. Perfect for those wanting to improve their own makeup skills.</p>

            <p>Group Makeup Session</p>
            <p>Ideal for bridal parties, prom groups, or special events. Enjoy a customized makeup experience for you and your friends, with group discounts available.</p>

            <p>Men’s Grooming</p>
            <p>Tailored makeup services for men, including concealing blemishes, evening skin tone, and enhancing facial features for photoshoots or events.</p>
        </div>
    )

    const MassageContent = () => (
        <div class="dropdown-content">
            <p>Swedish Massage</p>
            <p>A classic relaxation massage using long, flowing strokes to release tension, improve circulation, and promote overall well-being.</p>

            <p>Deep Tissue Massage</p>
            <p>Targets deeper layers of muscle and connective tissue to address chronic pain and muscle tightness. Ideal for those seeking therapeutic relief.</p>

            <p>Hot Stone Massage</p>
            <p>Heated stones are strategically placed and used during the massage to enhance relaxation, soothe muscles, and promote a sense of balance.</p>

            <p>Aromatherapy Massage</p>
            <p>Integrates essential oils chosen for their therapeutic properties, enhancing the massage experience and promoting emotional and physical well-being.</p>

            <p>Prenatal Massage</p>
            <p>Tailored for expectant mothers, this massage helps alleviate discomfort associated with pregnancy, focusing on relaxation and reducing tension.</p>

            <p>Sports Massage</p>
            <p>Geared towards athletes, this massage addresses specific muscle groups, aids in recovery, and enhances flexibility and performance.</p>

            <p>Couples Massage</p>
            <p>Enjoy a massage alongside your partner in a shared space, each with your therapist, creating a relaxing and bonding experience.</p>

            <p>Reflexology</p>
            <p>Focuses on pressure points in the feet to promote relaxation, improve circulation, and stimulate the body's natural healing processes.</p>

            <p>Custom Massage</p>
            <p>Tailored to your specific needs, combining various techniques to address individual concerns and promote overall relaxation.</p>
        </div> )

    const HairDropdown = () => {
        const [isHairVisible, setHairVisibility] = useState(false);

        const toggleHairVisibility = () => {
            setHairVisibility(!isHairVisible);
        };

        return (
            <div class="dropdown">
                <h3 onClick={toggleHairVisibility} class="dropdown-btn">Hair</h3>
                {isHairVisible && <HairContent />}
            </div>
        );
    };
    const NailsDropdown = () => {
        const [isNailsVisible, setNailsVisibility] = useState(false);

        const toggleNailsVisibility = () => {
            setNailsVisibility(!isNailsVisible);
        };

        return (
            <div class="dropdown">
                <h3 onClick={toggleNailsVisibility} class="dropdown-btn">Nails</h3>
                {isNailsVisible && <NailContent />}
            </div>
        );
    };

    const MakeupDropdown = () => {
        const [isMakeupVisible, setMakeupVisibility] = useState(false);

        const toggleMakeupVisibility = () => {
            setMakeupVisibility(!isMakeupVisible);
        };

        return (
            <div class="dropdown">
                <h3 onClick={toggleMakeupVisibility} class="dropdown-btn">Makeup</h3>
                {isMakeupVisible && <MakeupContent />}
            </div>
        );
    };

    const MassageDropdown = () => {
        const [isMassageVisible, setMassageVisibility] = useState(false);

        const toggleMassageVisibility = () => {
            setMassageVisibility(!isMassageVisible);
        };

        return (
            <div class="dropdown">
                <h3 onClick={toggleMassageVisibility} class="dropdown-btn">Massage</h3>
                {isMassageVisible && <MassageContent />}
            </div>
        );
    };

    return (
        <div>
            <Header />
            <h1 class="center">Services</h1>
            <HairDropdown />
            <NailsDropdown />
            <MakeupDropdown />
            <MassageDropdown />
        </div>
    );
}

export default OurServices;