import React, { useState, useEffect } from "react";
import AlbumImage from "./AlbumImage";
import Carousel from "react-bootstrap/Carousel";

const InstagramPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPost = async () => {
      try {
        const response = await fetch("/.netlify/functions/instagramPosts");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram post data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPost();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <Carousel interval={null}>
        {posts.map((albumItem, index) => (
          <Carousel.Item key={"carousel_wrapper_" + index}>
            <AlbumImage albumItem={albumItem} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default InstagramPost;