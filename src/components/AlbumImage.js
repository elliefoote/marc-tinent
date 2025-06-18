import React from "react";
import Image from 'next/image'

export default function AlbumImage({ albumItem }) {
  return (
    <div style={{ width: '100%', aspectRatio: '4/5' }}>
      <Image
        src={albumItem}
        alt="Instagram Album Image"
        fill={true}
      />
    </div>
  );
};

