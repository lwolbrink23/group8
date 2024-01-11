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
            {/* List items */}
            {/* ... */}
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

