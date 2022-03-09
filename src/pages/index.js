import * as React from "react";
import './index.css';
import {BsInstagram} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';
import "@fontsource/montserrat";

// styles

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}



// USE THIS LATER FOR BOOKS
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }

]

// markup
const IndexPage = () => {
  return (

      
      <main>
        <title>Marc Tinent | Escritor de Cosas</title>
        <div id="hero-overlay" className="d-flex justify-content-center align-items-center">
            <div id="hero-text-container" className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 text-light text-center fw-bold">¡Nueva Web Muy Pronto!</h1>
            <p className="text-center text-light fs-3">Escribo cosas. <br />Sígueme en Instagram para descubrirlas y ver consejos de escritura o contáctame por mail.</p>
            <div className="d-flex mt-3">
            <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a href="http://www.instagram.com/marctinent"><BsInstagram className="fs-3"/></a></div>
            <div className="my-social-icon d-flex align-items-center justify-content-center ms-1"><a href="http://www.instagram.com/marctinent"><AiTwotoneMail className="fs-2" /></a></div>
            </div>
            </div>
        </div>
      </main>

  )
}

export default IndexPage
