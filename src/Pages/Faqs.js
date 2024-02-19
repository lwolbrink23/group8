import React, { useState } from "react";
import "../App.css";
import arrowIcon from "../assets/icons/arrow.png";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Faqs() {
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  const GeneralContent = () => (
    <div class="dropdown-content">
      <p>
        <strong>
          Q: What makes "The Suite Spot" different from traditional salons?
        </strong>
      </p>
      <p>
        Unlike traditional salons, "The Suite Spot" offers providers the
        independence to run their businesses on their terms. Our suites are
        private, giving them full creative control.
      </p>

      <p>
        <strong>
          Q: How can I get in touch with your team for more information?
        </strong>
      </p>
      <p>
        You can contact our team through the "Contact Us" page on our website.
        We're here to answer your questions and provide all the information you
        need.
      </p>

      <p>
        <strong>Q: Can I book an appointment at "The Suite Spot"?</strong>
      </p>
      <p>
        Absolutely! You can book appointments with our providers through their
        individual profiles on our website. Simply find the professional you're
        interested in and schedule your appointment.
      </p>

      <p>
        <strong>Q: How do you ensure client and professional safety?</strong>
      </p>
      <p>
        We prioritize safety and follow all industry-standard guidelines. Our
        providers are licensed and experienced, and we maintain a clean and
        sanitized environment for the well-being of both clients and
        professionals.
      </p>

      <p>
        <strong>Q: Do you accept walk-ins?</strong>
      </p>
      <p>
        We are an appointment-only establishment. However, our providers will do
        their best to accommodate you if there is any availability!
      </p>

      <p>
        <strong>Q: What is your cancellation policy?</strong>
      </p>
      <p>
        Please refer to each provider’s cancellation policy when booking your
        appointment with them. Typically same day cancellations and no-shows are
        subject to fees.
      </p>

      <p>
        <strong>Q: Are there any age restrictions for services?</strong>
      </p>
      <p>
        Any clients under 18 years of age must be accompanied by a parent or
        guardian. Guardians must sign a waiver in advance for unaccompanied
        minors.
      </p>
    </div>
  );

  const HairContent = () => (
    <div class="dropdown-content">
      <p>
        <strong>Q: How often should I get my hair trimmed?</strong>
      </p>
      <p>
        The frequency at which you should get your hair trimmed can vary
        depending on your hair type, its condition, and your personal hair care
        goals. However, a general guideline is to trim your hair every 6 to 8
        weeks.
      </p>

      <p>
        <strong>
          Q: What is the difference between highlights and lowlights?
        </strong>
      </p>
      <p>
        Highlights and lowlights are hair coloring techniques used to add
        dimension and depth to your hair color. Highlights involve lightening
        specific sections or strands of your hair to create contrast and add
        brightness to your overall hair color. Lowlights, on the other hand,
        involve coloring specific strands of hair with a shade darker than your
        natural hair color.
      </p>

      <p>
        <strong>
          Q: What is a consultation, and is it necessary before a major hair
          transformation?
        </strong>
      </p>
      <p>
        A consultation is a preliminary discussion between you and your
        hairstylist before undergoing a major hair transformation. It is an
        essential step when considering significant changes to your hair. Our
        stylists want to make sure that you are receiving the best solution for
        your individual needs!
      </p>

      <p>
        <strong>
          Q: How can I maintain vibrant hair color between salon visits?
        </strong>
      </p>
      <p>
        Ask your stylist how often you should visit them in order to keep your
        colored hair looking fresh and vibrant! Be sure to check out our
        color-protecting products that are sold in our online store!
      </p>

      <p>
        <strong>
          Q: What can I do if I'm not satisfied with the results of my salon
          visit?
        </strong>
      </p>
      <p>
        Do not hesitate to address any concerns or issues with the salon or
        stylist. Please refer to their individual policies on adjustments or
        refunds.
      </p>
    </div>
  );

  const NailContent = () => (
    <div class="dropdown-content">
      <p>
        <strong>
          Q: How often should I schedule a fill for my acrylic nails?
        </strong>
      </p>
      <p>
        Acrylic nails typically require a fill every 2 to 3 weeks to maintain
        their appearance and structure. The exact frequency may vary based on
        individual nail growth.
      </p>

      <p>
        <strong>
          Q: Are your nail products and polishes safe and cruelty-free?
        </strong>
      </p>
      <p>
        Yes, we prioritize the use of safe and cruelty-free nail products and
        polishes. Our salon is committed to providing high-quality, ethical
        products for our customers.
      </p>

      <p>
        <strong>
          Q: What is the recommended frequency for a spa pedicure?
        </strong>
      </p>
      <p>
        For optimal foot care and relaxation, we recommend scheduling a spa
        pedicure every 4 to 6 weeks. However, the ideal frequency may depend on
        individual preferences and foot care needs.
      </p>

      <p>
        <strong>Q: Can I bring my own nail polish for my appointment?</strong>
      </p>
      <p>
        While we provide a wide range of high-quality polishes, you are welcome
        to bring your own if you have a specific color or brand preference. Our
        technicians will be happy to use your polish during your appointment.
      </p>

      <p>
        <strong>
          Q: What precautions are taken to ensure hygiene and cleanliness in the
          salon?
        </strong>
      </p>
      <p>
        We adhere to strict hygiene standards to ensure a clean and safe
        environment. Our tools and equipment are sterilized between each use,
        and disposable items are used whenever possible.
      </p>
    </div>
  );

  const MakeupContent = () => (
    <div class="dropdown-content">
      <p>
        <strong>
          Q: How far in advance should I book a makeup appointment for my event?
        </strong>
      </p>
      <p>
        It's recommended to book your makeup appointment as early as possible,
        especially for special events like weddings. Booking 2-3 months in
        advance ensures availability on your desired date, but last-minute
        appointments may be accommodated based on availability.
      </p>

      <p>
        <strong>Q: Can you travel to my location for makeup services?</strong>
      </p>
      <p>
        Yes, Brush & Blush Beauty offers on-location makeup services for your
        convenience. Whether you're getting ready at home, a hotel, or a venue,
        they can bring their expertise and makeup kit to your preferred
        location.
      </p>

      <p>
        <strong>Q: How long does a typical makeup application take?</strong>
      </p>
      <p>
        The duration of a makeup application depends on the complexity of the
        look and the services requested. On average, a full makeup application
        takes about 60 to 90 minutes, allowing for a thorough and precise
        application.
      </p>

      <p>
        <strong>
          Q: Do you provide makeup trials for bridal or special occasion makeup?
        </strong>
      </p>
      <p>
        Yes, makeup trials are available, especially for bridal and special
        occasion makeup. A trial allows us to collaborate on your desired look
        and ensures that you are completely satisfied with the makeup before
        your event.
      </p>
    </div>
  );

  const MassageContent = () => (
    <div class="dropdown-content">
      <p>
        <strong>
          Q: What should I expect during my first massage session?
        </strong>
      </p>
      <p>
        During your first session, we will have a brief consultation to discuss
        your health history, any specific concerns, and your preferences for the
        massage. You will then have time to undress to your comfort level and
        lie on the massage table under a sheet. Throughout the massage, your
        comfort and privacy will be prioritized.
      </p>

      <p>
        <strong>Q: Is massage suitable for everyone?</strong>
      </p>
      <p>
        While massage is generally safe for most people, certain health
        conditions may contraindicate massage therapy. It's essential to inform
        us of any medical conditions, injuries, or concerns you may have before
        the session. This ensures that the massage can be tailored to your
        specific needs and performed safely.
      </p>

      <p>
        <strong>
          Q: How often should I schedule a massage for optimal benefits?
        </strong>
      </p>
      <p>
        The frequency of massage depends on individual needs and goals. For
        general relaxation and stress relief, monthly sessions may be
        sufficient. If you're addressing specific issues or injuries, more
        frequent sessions may be recommended initially, with adjustments over
        time.
      </p>

      <p>
        <strong>
          Q: What is the difference between Swedish and deep tissue massage?
        </strong>
      </p>
      <p>
        Swedish massage is a gentle, relaxing technique that uses long, flowing
        strokes, while deep tissue massage focuses on targeting deeper layers of
        muscles and connective tissue to address chronic tension and discomfort.
        The choice between the two depends on your preferences and therapeutic
        goals.
      </p>
    </div>
  );

  const GeneralDropdown = () => {
    const [isGeneralVisible, setGeneralVisibility] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleGeneralVisibility = () => {
      setGeneralVisibility(!isGeneralVisible);
      setArrowRotation(arrowRotation === 0 ? 90 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={toggleGeneralVisibility}
          style={{ cursor: "pointer" }}
        >
          <h3>General</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {isGeneralVisible && <GeneralContent />}
      </div>
    );
  };

  const HairDropdown = () => {
    const [isHairVisible, setHairVisibility] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleHairVisibility = () => {
      setHairVisibility(!isHairVisible);
      setArrowRotation(arrowRotation === 0 ? 90 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={toggleHairVisibility}
          style={{ cursor: "pointer" }}
        >
          <h3>Hair</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {isHairVisible && <HairContent />}
      </div>
    );
  };

  const NailsDropdown = () => {
    const [isNailsVisible, setNailsVisibility] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleNailsVisibility = () => {
      setNailsVisibility(!isNailsVisible);
      setArrowRotation(arrowRotation === 0 ? 90 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={toggleNailsVisibility}
          style={{ cursor: "pointer" }}
        >
          <h3>Nails</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {isNailsVisible && <NailContent />}
      </div>
    );
  };

  const MakeupDropdown = () => {
    const [isMakeupVisible, setMakeupVisibility] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleMakeupVisibility = () => {
      setMakeupVisibility(!isMakeupVisible);
      setArrowRotation(arrowRotation === 0 ? 90 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={toggleMakeupVisibility}
          style={{ cursor: "pointer" }}
        >
          <h3>Makeup</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {isMakeupVisible && <MakeupContent />}
      </div>
    );
  };

  const MassageDropdown = () => {
    const [isMassageVisible, setMassageVisibility] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const toggleMassageVisibility = () => {
      setMassageVisibility(!isMassageVisible);
      setArrowRotation(arrowRotation === 0 ? 90 : 0);
    };

    const arrowIconStyle = {
      height: "15px",
      transform: `rotate(${arrowRotation}deg)`,
    };

    return (
      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={toggleMassageVisibility}
          style={{ cursor: "pointer" }}
        >
          <h3>Massage</h3>
          <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
        </div>
        {isMassageVisible && <MassageContent />}
      </div>
    );
  };

  return (
    <div>
      <h1 class="center">FAQ's</h1>
      <GeneralDropdown />
      <HairDropdown />
      <NailsDropdown />
      <MakeupDropdown />
      <MassageDropdown />
      <div class="extra-space"></div>
    </div>
  );
}

export default Faqs;
