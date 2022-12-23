import React from "react";
import "./InstaCard.css";
import "./Bookcard.css";
import InstagramPost from "../components/InstagramPost";

const InstaCard = ({ post }) => {
  return (
    <div className="card p-3">
      <div className="bc-text mb-2">
        <div className="bc-title">
          <h3>Want more of my writing?</h3>
        </div>
        <div className="bc-desc">
          También comparto un montón de consejos de escritura. Ya verás,{" "}
          <a href="https://www.instagram.com/marctinent" className="my-link">
            échasles un ojo en mi Instagram
          </a>
          .
        </div>
      </div>
      <div className="p-3">
        <InstagramPost post={post} />
      </div>
    </div>
  );
};

export default InstaCard;
