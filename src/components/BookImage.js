import React from "react";
import Image from 'next/image'

export default function BookImage({ fileName, alt, landscape }) {
  const bcImageStyle = {
    objectFit: 'contain',
  };

  const bcImageLandscapeStyle = {
    objectFit: 'contain',
  };

  return (
    <Image
      src={fileName}
      alt={alt}
      style={landscape ? bcImageLandscapeStyle : bcImageStyle}
      fill={true}
    />
  );
}
