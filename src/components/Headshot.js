import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./Headshot.css";

const Headshot = () => {
  return (
    <div className="headshot-container">
      <StaticImage
        className="headshot"
        src="../images/MarcHeadshot.jpg"
        alt="Marc Tinent"
      />
    </div>
  );
};

export default Headshot;
