import React from "react";
import Image from 'next/image'

export default function AlbumImage({ albumItem }) {
  return (
    <div style={{ width: 100, height: 500 }}>
      <Image
        src={albumItem.src}
        alt={albumItem.id}
        fill={true}
      />
    </div>
  );
};

