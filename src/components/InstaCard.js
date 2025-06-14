import React from "react";
import "./Card.css";
import InstagramPost from "../components/InstagramPost";

const InstaCard = () => {
  return (
    <div className="marc-card p-3">
      <div className="bc-text mb-2">
        <div className="bc-title">
          <h3>Y también...</h3>
        </div>
        <div className="bc-desc">
          ¡Comparto un montón de consejos de escritura!
          <br /> Ya verás,{" "}
          <a href="https://www.instagram.com/marctinent" className="my-link">
            échales un ojo en mi Instagram
          </a>
          .
        </div>
      </div>
      <div className="p-3">
        <InstagramPost />
      </div>
    </div>
  );
};

export default InstaCard;
