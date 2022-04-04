import * as React from "react";
import './index.css';
import {BsInstagram} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

// markup
const IndexPage = () => {
  return (

      
      <main>
        <title>Marc Tinent | Escritor de Cosas</title>
        <div id="hero-overlay" className="d-flex justify-content-center align-items-center">
            <div id="hero-text-container" className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-2 text-light text-center fw-bold">¡Nueva Web Muy Pronto!</h1>
            <p id="my-p" className="text-center text-light fs-3">Escribo cosas. <br />Sígueme en Instagram para descubrirlas y ver consejos de escritura o contáctame por mail.</p>
            <div className="d-flex mt-3">
            <div className="my-social-icon d-flex align-items-center justify-content-center me-2"><a href="http://www.instagram.com/marctinent"><BsInstagram className="fs-3"/></a></div>
            <div className="my-social-icon d-flex align-items-center justify-content-center ms-2"><a href="mailto:marctinent@gmail.com"><AiTwotoneMail className="fs-2" /></a></div>
            </div>
            </div>
        </div>
      </main>

  )
}

export default IndexPage
