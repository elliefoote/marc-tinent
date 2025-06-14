import * as React from "react";
import Image from "next/image";
import "./Headshot.css";
import MarcHeadshot from "./MarcHeadshot.jpg"

const Headshot = () => {
  return (
    <div className="headshot-container">
      <Image
        className="headshot"
        src={MarcHeadshot}
        width={475}
        alt="Marc Tinent"
      />
    </div>
  );
};

export default Headshot;
