import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BookImage({ fileName, alt, landscape }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const file = data.images.edges.find((edge) => {
    return edge.node.relativePath.includes(fileName);
  });
  const image = getImage(file.node);
  if (!image) {
    return null;
  }
  return (
    <GatsbyImage
      image={image}
      alt={alt}
      className={landscape ? "bc-image-landscape" : "bc-image mb-3 mt-3"}
    />
  );
}
