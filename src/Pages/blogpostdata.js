import React from "react";
import "../Styles/blogpost.css";
import BlogPosts from "../data/blogposts.json";
import { useParams } from "react-router-dom";
import hairWashing from "../assets/images/hairwashing.jpg";
import relaxImage from "../assets/images/relax.jpeg";
import allAgesImage from "../assets/images/allages.jpeg";
import hairPink from "../assets/images/hair-pinkbg.jpeg"
import BackButton from "../Components/BackButton";

function BlogPostData() {
  const { category, id } = useParams();
  const blogPost = BlogPosts.find(
    (post) => post.category === category && post.id.toString() === id
  );

  if (!blogPost) {
    // Handle the case where the blog post with the specified id is not found
    return <div>Blog post not found</div>;
  }

  // Map category to the corresponding image
  const categoryToImage = {
    hair: hairWashing,
    massage: relaxImage,
    makeup: allAgesImage,
    // Add more categories as needed
  };

return (
  <div className="post1">
    <BackButton />
    <div className="post-general-info">
      <img src={categoryToImage[category]} alt={blogPost.title} className="main-image" />
      {category === "hair" && (
        <img className="pink-image" src={hairPink} alt="woman running fingers through her hair" />
      )}
      <h4 className="category">{blogPost.category}</h4>
      <h4 className="author">{blogPost.author}</h4>
      <h2 className="art-title">{blogPost.title}</h2>
      <div className="articles-contents">{blogPost.content}</div>
    </div>
  </div>
);
      }

export default BlogPostData;
