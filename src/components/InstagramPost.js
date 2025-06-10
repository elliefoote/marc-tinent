import React from "react";
import AlbumImage from "./AlbumImage";
import Carousel from "react-bootstrap/Carousel";

const post = {
  id: "1",
  album: [
    {
      id: "album1",
      src: "/instagram1.jpg",
    },
    {
      id: "album2",
      src: "/instagram2.jpg",
    },
  ],
}

const InstagramPost = () => {
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
