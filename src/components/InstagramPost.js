import React from "react";
import AlbumImage from "./AlbumImage";
import Carousel from "react-bootstrap/Carousel";

const InstagramPost = ({ post }) => {
  return (
    <div key={post.id}>
      <Carousel interval={null}>
        {post.album.map((albumItem) => (
          <Carousel.Item key={"carousel_wrapper_" + albumItem.id}>
            <AlbumImage albumItem={albumItem} key={albumItem.id} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default InstagramPost;
