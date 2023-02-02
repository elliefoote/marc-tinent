import React from "react";
import Cover from "../components/Cover";
import Headshot from "../components/Headshot";
import Bookcard from "../components/Bookcard";
import { bookData } from "../assets/bookdata";
import { graphql } from "gatsby";
import "./index.css";
import "../components/Card.css";
import { Masonry } from "@mui/lab";
import InstaCard from "../components/InstaCard";

const IndexPage = ({ data }) => {
  return (
    <main id="new-web" className="bg-light">
      <title>Marc Tinent | Escritor de Cosas</title>
      <div className="page-section pt-3">
        <Masonry
          columns={{ sm: 1, md: 2 }}
          spacing={{ sm: 1, md: 2 }}
          defaultColumns={2}
          defaultSpacing={2}
          defaultHeight={2000}
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
