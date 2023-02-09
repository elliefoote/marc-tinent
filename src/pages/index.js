import React from "react";
import Cover from "../components/Cover";
import Headshot from "../components/Headshot";
import Bookcard from "../components/Bookcard";
import { bookData } from "../assets/bookdata";
import { graphql } from "gatsby";
import "./index.css";
import "../components/Card.css";
//import Masonry from "@mui/lab/Masonry";
import InstaCard from "../components/InstaCard";
import Masonry from "react-masonry-css";

const IndexPage = ({ data }) => {
  return (
    <main id="new-web" className="bg-light">
      <title>Marc Tinent | Escritor de Cosas</title>
      <div className="page-section pt-3">
        <Masonry
          breakpointCols={{ default: 2, 576: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Cover />
          <Headshot />
          {bookData.map((book) => (
            <Bookcard book={book} key={"bookcard_" + book.id} />
          ))}
          <InstaCard post={data.allInstagramContent.nodes[0]} />
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
    </main>
  );
};

export const query = graphql`
  query HomePageQuery {
    allInstagramContent {
      nodes {
        id
        caption
        album {
          id
          localImage {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
