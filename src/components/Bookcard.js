import React from "react";
import "./Card.css";
import BookImage from "./BookImage";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Bookcard = ({ book }) => {
  return (
    <div key={book.id}>
      <div id={book.id} className="card p-3 text-dark">
        <div className="bc-image-container d-flex justify-content-center mb-3">
          <BookImage
            fileName={book.fileName}
            alt={book.title}
            landscape={book.landscape}
          />
        </div>

        <div className="bc-text mb-2">
          <div className="bc-category">{book.category}</div>
          <div className="bc-title">
            <h3>{book.title}</h3>
          </div>
          <div className="bc-desc">{book.description}</div>

          <div className="mt-3">
            {book.links.map((link) => (
              <a key={link.linkid} href={link.linkurl} className="my-link me-3">
                <span className="fs-6 link-text">{link.linktitle}</span>
                <span className="link-arrow">
                  <KeyboardArrowRightIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
