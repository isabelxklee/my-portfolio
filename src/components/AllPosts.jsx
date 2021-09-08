import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  console.log(posts);

  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {posts &&
          posts.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllPosts;
