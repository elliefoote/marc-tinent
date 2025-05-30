import React from "react";
import Cover from "../components/Cover";
import Headshot from "../components/Headshot";
import Bookcard from "../components/Bookcard";
import { bookData } from "../assets/bookdata";
import "./index.css";
import "../components/Card.css";
import Masonry from "react-masonry-css";
import { Media } from "gatsby-plugin-fresnel";

const IndexPage = ({ data }) => {
  return (
    <main id="new-web" className="bg-light">
      <title>Marc Tinent | Escritor de Cosas</title>
      <div className="page-section pt-3">
        <Media at="sm">
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
            {/* <InstaCard post={data.allInstagramContent.nodes[0]} /> */}
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
        </Media>
        <Media greaterThanOrEqual="md">
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
            {/* <InstaCard post={data.allInstagramContent.nodes[0]} /> */}
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
        </Media>
      </div>
    </main>
  );
};

// export const query = graphql`
//   query HomePageQuery {
//     allInstagramContent {
//       nodes {
//         id
//         caption
//         album {
//           id
//           localImage {
//             childImageSharp {
//               gatsbyImageData(quality: 100)
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
