'use client'

import Cover from "../components/Cover";
import Headshot from "../components/Headshot";
import Bookcard from "../components/Bookcard";
import { bookData } from "./bookdata";
import "./index.css";
import "../components/Card.css";
import Masonry from "react-masonry-css";
import InstaCard from "../components/InstaCard";

export default function Home() {
  return (
    <main id="new-web" className="bg-light">
      <title>Marc Tinent | Escritor de Cosas</title>
      <div className="page-section pt-3">
        <div className="media-sm">
          <Masonry
            breakpointCols={{ default: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Cover />
            <Headshot />
            {bookData.map((book) => (
              <Bookcard book={book} key={"bookcard_" + book.id} />
            ))}
            <InstaCard />
            <div className="hf-box">
              <div className="p-4">
                <a
                  className="text-light fs-2 my-link"
                  href="mailto:marctinent@gmail.com"
                >
                  ¿Quieres decirme algo?
                </a>
              </div>
            </div>
          </Masonry>
        </div>
        <div className="media-md">
          <Masonry
            breakpointCols={{ default: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Cover />
            <Headshot />
            {bookData.map((book) => (
              <Bookcard book={book} key={"bookcard_" + book.id} />
            ))}
            <InstaCard />
            <div className="hf-box">
              <div className="p-4">
                <a
                  className="text-light fs-2 my-link"
                  href="mailto:marctinent@gmail.com"
                >
                  ¿Quieres decirme algo?
                </a>
              </div>
            </div>
          </Masonry>
        </div>
      </div>
    </main>
  );
};
