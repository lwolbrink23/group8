import React from "react";
import "../Styles/blogpost2.css";
import BackButton from "../Components/BackButton";
import kneadRelax from "../assets/images/relax.jpeg"
function BlogPost2() {
  return (
    <div className="post1">
      {/* back arrow */}
      <BackButton />
      <div className="post-general-info">
        <img src={kneadRelax} className="main-image" alt="woman getting a massage" />
        <h4 className="category">Category: Spa</h4>
        <h4 className="author" >Author: Jane Doe</h4>
        <h2 className="art-title">Knead to Relax: The Power of Massage</h2>
      </div>
      <p className="articles-contents">
         In the hustle and bustle of our modern lives, finding moments of serenity has 
         become a precious commodity. Amidst deadlines, responsibilities, and the constant 
         hum of technology, it's easy to feel overwhelmed. That's where the ancient art of 
         massage steps in, offering a soothing balm for both body and mind. Let's embark on 
         a journey to unravel the profound healing touch of massage and its extraordinary 
         ability to elevate well-being and usher in a sense of deep relaxation.The Art of 
         Healing Touch Massage is more than just a luxurious spa treatment; it's a therapeutic 
         practice that has been celebrated across cultures for centuries. Originating from 
         ancient civilizations, this hands-on technique has evolved into various forms, 
         each with its unique benefits. From Swedish and deep tissue to Thai and shiatsu, 
         massage techniques cater to different needs, providing a holistic approach to health. 
         Stress Reduction and Beyond One of the primary benefits of massage is its remarkable 
         ability to reduce stress. As skilled hands knead away tension, the body responds by 
         releasing endorphins, the natural feel-good chemicals. This not only creates a sense 
         of relaxation but also contributes to an improved mood. In our fast-paced world, where 
         stress is a constant companion, incorporating regular massages into your routine can be a 
         proactive step towards mental well-being.
        </p>
        </div>
  );
}

export default BlogPost2;