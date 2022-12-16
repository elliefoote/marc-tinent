import React from "react";
import "./Bookcard.css";
import { bookData } from "../assets/bookdata";
import { Masonry } from "@mui/lab";

const Bookcard = () => {
  return (
    <Masonry columns={{ sm: 1, md: 2 }} spacing={2}>
      {bookData.map((book) => (
        <div key={book.id}>
          <div id={book.id} className="book-card p-3 mb-3 text-dark">
            <div className="bc-image-container d-flex justify-content-center mb-3">
              <img
                src={book.img}
                className="bc-image mb-3 mt-3"
                alt={book.title}
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
                  <a
                    key={link.linkid}
                    href={link.linkurl}
                    className="bc-purchase me-3 text-dark"
                  >
                    {link.linktitle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default Bookcard;
