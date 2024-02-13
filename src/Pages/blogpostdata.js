import React from "react";
import "../Styles/blogpost.css";
import BlogPosts from "../data/blogposts.json";
import { useParams } from "react-router-dom";
import hairWashing from "../assets/images/hairwashing.jpg";
import relaxImage from "../assets/images/relax.jpeg";
import allAgesImage from "../assets/images/allages.jpeg";
import hairPink from "../assets/images/hair-pinkbg.jpeg";
import nailBlog from "../assets/images/nails-blog.webp"
import BackButton from "../Components/BackButton";

function BlogPostData() {
  const { category, id } = useParams();
  const blogPost = BlogPosts.find(
    (post) => post.category === category && post.id.toString() === id,
  );

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const categoryToImage = {
    Hair: hairWashing,
    Massage: relaxImage,
    Makeup: allAgesImage,
    Nails: nailBlog,
  };

  const paragraphs = blogPost.content.split("\n\n");

  return (
    <div className="post1">
      <BackButton />
      <div className="post-general-info">
        <img
          src={categoryToImage[category]}
          alt={blogPost.title}
          className="main-image"
        />
        <div className="cat-container">
        <h4 className="category">Category: {blogPost.category}</h4>
        <h4 className="author">Author: {blogPost.author}</h4>
        </div>
        <h2 className="art-title">{blogPost.title}</h2>
        {/* Render the content as paragraphs */}
        <div className="articles-contents">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
              {category === "Hair" &&
                index === 2 && ( // Insert the pink image after the third paragraph
                  <div className="pink-image-container">
                    <img
                      className="pink-image"
                      src={hairPink}
                      alt="woman running fingers through her hair"
                    />
                  </div>
                )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPostData;
