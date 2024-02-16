import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import hairWashing from "../assets/images/hairwashing.jpg";
import relaxImage from "../assets/images/relax.jpeg";
import allAgesImage from "../assets/images/allages.jpeg";
import hairPink from "../assets/images/hair-pinkbg.jpeg";
import nailBlog from "../assets/images/nails-blog.webp";
import "../Styles/blogpost.css";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function BlogPostData() {
  const { category, id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [user, setUser] = useState(getUser());
  console.log("active user: ", user);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/blog/blogpost/${category}/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [category, id]);

  if (!blogPost) {
    return <div>Loading...</div>;
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
        <div className="articles-contents">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
              {category === "Hair" && index === 2 && (
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
