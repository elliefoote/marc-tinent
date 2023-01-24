import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const AlbumImage = ({ albumItem }) => {
  const image = getImage(albumItem.localImage.childImageSharp.gatsbyImageData);
  if (!image) {
    console.warn("Couldn't extract the image");
  }

  return (
    <div>
      <GatsbyImage
        image={image}
        alt={albumItem.id}
        className="rounded"
        loading="eager"
      />
    </div>
  );
};

export default AlbumImage;
