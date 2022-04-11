import * as React from "react";
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

const Contact = () => {
    return (
        <div id="contact-me" className="page-section container d-flex flex-column">
                <h2 className="section-head">CONTACTO</h2>
                <div className="contact-box text-dark mb-3 d-flex align-items-center justify-content-center flex-column">
                    <div className="contact-text text-dark">¿Quieres saber más?</div>
                    <div className="d-flex mt-3">
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a name="Instagram de Marc Tinent" href="http://www.instagram.com/marctinent"><BsInstagram className="fs-3 text-dark"/></a></div>
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a name="Correo Electrónico de Marc Tinent" href="mailto:marctinent@gmail.com"><AiTwotoneMail className="fs-2 text-dark" /></a></div>
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a name="LinkedIn de Marc Tinent" href="https://www.linkedin.com/in/marctinent"><BsLinkedin className="fs-2 text-dark" /></a></div>
                    </div>
                </div>
            </div>
    )
  }
  
  export default Contact;