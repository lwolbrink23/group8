import React, { useState } from "react";
import "../App.css";
import arrowIcon from "../assets/icons/arrow.png";
import { Link } from "react-router-dom";
import CustomDropdown from "../Components/CustomDropdown";

function OurServices() {
  const HairContent = () => (
    <>
      <strong>
        <p>Haircut</p>
      </strong>
      <p>
        A haircut involves trimming and shaping your hair to achieve a desired
        length and style. It can range from a simple trim to a complete hair
        transformation.
      </p>

      <strong>
        <p>Hair Coloring</p>
      </strong>
      <p>
        Hair coloring services include techniques like highlights, lowlights,
        balayage, and full color changes to alter the color of your hair,
        creating a new look or covering gray hair.
      </p>

      <strong>
        <p>Hair Styling</p>
      </strong>
      <p>
        This service includes blowouts, curling, straightening, and updos. It's
        ideal for special occasions or when you want to change your everyday
        look.
      </p>

      <strong>
        <p>Hair Treatments</p>
      </strong>
      <p>
        These treatments can include deep conditioning, relaxing, hair masks,
        and keratin treatments to improve the health and manageability of your
        hair.
      </p>

      <strong>
        <p>Brazilian Blowout</p>
      </strong>
      <p>
        This treatment smooths and straightens frizzy or curly hair, making it
        more manageable and reducing styling time.
      </p>

      <strong>
        <p>Hair Extensions</p>
      </strong>
      <p>
        Hair extensions add length and volume to your natural hair. They can be
        clipped, sewn, bonded, or taped into place for a temporary or
        semi-permanent change.
      </p>

      <strong>
        <p>Hair Braiding</p>
      </strong>
      <p>
        Hair braiding includes various styles, such as box braids, cornrows, and
        French braids, which can be decorative or functional.
      </p>
      <div class="center">
        <Link to="/booknow">
          <button class="purp-button">Book Now</button>
        </Link>
      </div>
    </>
  );

  const NailContent = () => (
    <>
      <strong>
        <p>Basic Manicure</p>
      </strong>
      <p>
        A basic manicure includes nail shaping, cuticle maintenance, and a
        polish application. It's a quick and classic way to keep your nails neat
        and polished.
      </p>

      <strong>
        <p>French Manicure</p>
      </strong>
      <p>
        A French manicure is characterized by a natural pink or nude base with
        white tips. This service adds a touch of sophistication to your nails.
      </p>

      <strong>
        <p>Spa Manicure</p>
      </strong>
      <p>
        A spa manicure includes exfoliation, moisturizing, and a relaxing hand
        massage in addition to standard manicure procedures.
      </p>

      <strong>
        <p>Basic Pedicure</p>
      </strong>
      <p>
        Similar to a basic manicure, a basic pedicure involves nail shaping,
        cuticle care, and polish application.
      </p>

      <strong>
        <p>French Pedicure</p>
      </strong>
      <p>
        A French pedicure brings the classic elegance of the French manicure to
        your toes. It features a natural base with white tips.
      </p>

      <strong>
        <p>Spa Pedicure</p>
      </strong>
      <p>
        A spa pedicure offers a pampering experience for your feet. In addition
        to standard pedicure steps, it includes exfoliation, moisturizing, and a
        soothing foot massage to leave your feet feeling refreshed.
      </p>

      <strong>
        <p>Acrylic Fill / Full Set</p>
      </strong>
      <p>
        Acrylic nails are created by applying a liquid and powder mixture to
        your natural nails, resulting in durable and long-lasting extensions. An
        acrylic fill maintains and fills in the regrowth of your existing
        acrylic nails.
      </p>

      <strong>
        <p>Dip Full Set</p>
      </strong>
      <p>
        Dip powder nails involve dipping your nails into a colored powder to
        achieve a durable and chip-resistant finish.
      </p>

      <strong>
        <p>Fiberglass Full Set</p>
      </strong>
      <p>
        Fiberglass nails use a lightweight fiberglass mesh to create extensions
        that are both strong and natural-looking.
      </p>

      <strong>
        <p>Hand-painted Designs</p>
      </strong>
      <p>
        Hand-painted nail designs allow for creative and customized artwork on
        your nails. From intricate patterns to unique motifs, this service adds
        a personal touch to your manicure or pedicure.
      </p>

      <strong>
        <p>Ombre Nails</p>
      </strong>
      <p>
        Ombre nails feature a gradient color effect, blending one color into
        another for a stylish and eye-catching look.
      </p>

      <strong>
        <p>Marble Nails</p>
      </strong>
      <p>
        Marble nails mimic the appearance of natural marble with swirling
        patterns. This artistic nail technique adds a touch of sophistication
        and uniqueness to your manicure or pedicure.
      </p>

      <strong>
        <p>Foiling</p>
      </strong>
      <p>
        Foiling involves applying metallic or decorative foil to your nails for
        a bold and textured appearance.
      </p>

      <strong>
        <p>3D Nail Art</p>
      </strong>
      <p>
        3D nail art uses embellishments like gems, pearls, and decorative
        elements to create three-dimensional designs on your nails. It's a
        creative and expressive way to enhance your manicure or pedicure.
      </p>

      <strong>
        <p>Paraffin Wax Treatment</p>
      </strong>
      <p>
        A paraffin wax treatment involves immersing your hands or feet in warm
        paraffin wax to moisturize and soften the skin. It's a relaxing addition
        to your manicure or pedicure that leaves your skin feeling smooth.
      </p>

      <strong>
        <p>Gel Polish</p>
      </strong>
      <p>
        Gel polish provides a long-lasting and chip-resistant alternative to
        traditional nail polish. This service includes the application of gel
        polish, which is cured under a UV or LED light for a durable finish.
      </p>

      <strong>
        <p>Soak-Off Removal</p>
      </strong>
      <p>
        Soak-off removal is the process of safely and gently removing gel polish
        or acrylic nails without causing damage to the natural nails. It ensures
        a smooth transition between nail services.
      </p>
      <div class="center">
        <Link to="/booknow">
          <button class="purp-button">Book Now</button>
        </Link>
      </div>
    </>
  );

  const MakeupContent = () => (
    <>
      <strong>
        <p>Classic Makeup Application</p>
      </strong>
      <p>
        A timeless and elegant makeup look suitable for any occasion. Includes
        foundation, eyeshadow, eyeliner, mascara, blush, and lipstick.
      </p>

      <strong>
        <p>Glamorous Evening Makeup</p>
      </strong>
      <p>
        Perfect for special events or a night out. This service includes a more
        dramatic eye look, contouring, false eyelashes, and a bold lip color.
      </p>

      <strong>
        <p>Natural Makeup Look</p>
      </strong>
      <p>
        Enhance your features with a subtle and natural makeup application.
        Ideal for a fresh and understated appearance.
      </p>

      <strong>
        <p>Bridal Makeup Package</p>
      </strong>
      <p>
        A comprehensive service tailored for brides on their special day.
        Includes a trial session, consultation, and the final bridal makeup
        application with long-lasting products for a flawless look in photos.
      </p>

      <strong>
        <p>Editorial/Fashion Makeup</p>
      </strong>
      <p>
        Bold and creative makeup for photoshoots, runway shows, or fashion
        events. This service includes high-impact looks that stand out in a
        professional setting.
      </p>

      <strong>
        <p>Special Effects Makeup</p>
      </strong>
      <p>
        Transform your look with special effects makeup for costume parties,
        Halloween, or themed events. Pricing varies based on the complexity of
        the design.
      </p>

      <strong>
        <p>Makeup Lesson</p>
      </strong>
      <p>
        A one-on-one session to learn about makeup techniques, product
        application, and personalized tips. Perfect for those wanting to improve
        their own makeup skills.
      </p>

      <strong>
        <p>Group Makeup Session</p>
      </strong>
      <p>
        Ideal for bridal parties, prom groups, or special events. Enjoy a
        customized makeup experience for you and your friends, with group
        discounts available.
      </p>

      <strong>
        <p>Men’s Grooming</p>
      </strong>
      <p>
        Tailored makeup services for men, including concealing blemishes,
        evening skin tone, and enhancing facial features for photoshoots or
        events.
      </p>
      <div class="center">
        <Link to="/booknow">
          <button class="purp-button">Book Now</button>
        </Link>
      </div>
    </>
  );

  const MassageContent = () => (
    <>
      <strong>
        <p>Swedish Massage</p>
      </strong>
      <p>
        A classic relaxation massage using long, flowing strokes to release
        tension, improve circulation, and promote overall well-being.
      </p>

      <strong>
        <p>Deep Tissue Massage</p>
      </strong>
      <p>
        Targets deeper layers of muscle and connective tissue to address chronic
        pain and muscle tightness. Ideal for those seeking therapeutic relief.
      </p>

      <strong>
        <p>Hot Stone Massage</p>
      </strong>
      <p>
        Heated stones are strategically placed and used during the massage to
        enhance relaxation, soothe muscles, and promote a sense of balance.
      </p>

      <strong>
        <p>Aromatherapy Massage</p>
      </strong>
      <p>
        Integrates essential oils chosen for their therapeutic properties,
        enhancing the massage experience and promoting emotional and physical
        well-being.
      </p>

      <strong>
        <p>Prenatal Massage</p>
      </strong>
      <p>
        Tailored for expectant mothers, this massage helps alleviate discomfort
        associated with pregnancy, focusing on relaxation and reducing tension.
      </p>

      <strong>
        <p>Sports Massage</p>
      </strong>
      <p>
        Geared towards athletes, this massage addresses specific muscle groups,
        aids in recovery, and enhances flexibility and performance.
      </p>

      <strong>
        <p>Couples Massage</p>
      </strong>
      <p>
        Enjoy a massage alongside your partner in a shared space, each with your
        therapist, creating a relaxing and bonding experience.
      </p>

      <strong>
        <p>Reflexology</p>
      </strong>
      <p>
        Focuses on pressure points in the feet to promote relaxation, improve
        circulation, and stimulate the body's natural healing processes.
      </p>

      <strong>
        <p>Custom Massage</p>
      </strong>
      <p>
        Tailored to your specific needs, combining various techniques to address
        individual concerns and promote overall relaxation.
      </p>
      <div class="center">
        <Link to="/booknow">
          <button class="purp-button">Book Now</button>
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <h1 class="center">Services</h1>
      <CustomDropdown
        title="Hair"
        icon="arrow.png"
        ContentComponent={HairContent}
      />
      <CustomDropdown
        title="Nails"
        icon="arrow.png"
        ContentComponent={NailContent}
      />
      <CustomDropdown
        title="Makeup"
        icon="arrow.png"
        ContentComponent={MakeupContent}
      />
      <CustomDropdown
        title="Massage"
        icon="arrow.png"
        ContentComponent={MassageContent}
      />
      <div class="extra-space"></div>
    </div>
  );
}

export default OurServices;
