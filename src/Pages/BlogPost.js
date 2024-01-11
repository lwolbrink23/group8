import React from "react";
import "../App.css";

function Blog() {
  return (
    <div>
      <button
        type="button"
        onClick={() => alert('Directs back to blog main page')}
      >
        Back Arrow Icon
      </button>
      <div className="post1">
        <div className="post-general-info">
          {/* Image */}
          <img
            src="assets/logo/TSS Circle logo Transparent.png"
            alt="Image"
          />
          <h4>Category: Hair</h4>
          <h4>Author: Jane Doe</h4>
          <h2>Hair Care Secrets: Tips for Gorgeous Locks</h2>
        </div>
        <div className="article-content">
          <p>
            Are you yearning for luscious, head-turning locks that radiate health and beauty? Say goodbye to your hair woes and embrace the secrets to achieving and maintaining gorgeous hair.
            In this article, we'll delve into some unconventional yet effective hair care tips that will leave you with a mane to envy.
          </p>
          <ol>
            <li>
               The No-Shampoo Revelation: Ditch traditional shampoos with harsh chemicals and sulfates. Instead, consider adopting a "no-poo" approach. This involves washing your hair with just water,
               allowing your scalp's natural oils to nourish your locks. Over time, your hair will become healthier and more manageable.
           </li>
           <li>
           Nourish from Within: Beautiful hair starts with a balanced diet. Ensure you're consuming plenty of hair-friendly nutrients, such as biotin, vitamins A and E, and essential fatty acids found in foods like salmon, nuts, and leafy greens. A well-nourished body equals well-nourished hair.
           </li>
           <li>
            Regular Scalp Massages: Massaging your scalp regularly improves blood circulation, which can stimulate hair growth. A gentle, daily massage can also help distribute natural oils evenly,
            keeping your hair hydrated and healthy.
            </li>
            <li>
            Condition with Natural Oils: Introduce the magic of natural oils into your hair care routine. Coconut oil, argan oil, and jojoba oil are all fantastic options. Apply a small amount to your hair,
            focusing on the ends, and leave it in for at least an hour before washing. These oils will add shine and repair damage.
            </li>
            <li>
            Heat Styling Moderation: Limit the use of heat styling tools, like flat irons and curling wands. Excessive heat can damage your hair, leading to frizz and breakage. If you must use heat,
            invest in a good quality heat protectant spray and use your styling tools on a lower heat setting.
            </li>
            <li>
            Trim Regularly: Don't shy away from regular trims. Even if you're growing your hair out, cutting off split ends will prevent further damage and keep your hair looking healthier overall.
            </li>
            <li>
            Silk Pillowcases: Swap your cotton pillowcase for a silk one. Silk reduces friction, preventing hair breakage and minimizing frizz. It also helps to retain moisture in your hair while you sleep.
            </li>
            <li>
            The Power of Deep Conditioning: Treat your hair to a deep conditioning mask at least once a week. This will replenish moisture and repair damage, leaving your locks feeling soft, manageable, and vibrant.
            </li>
            <li>
            Gentle Hair Care Products: Choose hair care products that are sulfate-free and gentle on your hair. Harsh chemicals in products can strip your hair of its natural oils and cause it to become brittle.
            </li>
            <li>
             Stay Hydrated: Drinking enough water is vital for overall health, and it also directly impacts the health of your hair. Staying hydrated helps keep your hair moisturized and prevents dryness and breakage.
            </li>
          </ol>
          <p>
            By following these unconventional yet highly effective tips, you can achieve and maintain the gorgeous locks you've always desired. Embrace a holistic approach to hair care, nourish your hair from the inside out,
            and make simple but impactful changes to your routine. With dedication and the right practices, you'll be well on your way to having stunning, head-turning hair that radiates beauty and vitality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;

