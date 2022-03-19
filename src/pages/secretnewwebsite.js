import React from "react";
import Navbar from '../components/Navbar';
import Bookcard from '../components/Bookcard';
import './newwebsite.css';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

const NewWebsite = () => {
    return (
  
        
        <div id="new-web" className="bg-light">
            <header>
                <Navbar />
            </header>


            <div id="cover" className="page-section container">
                <div id="cover-box" className="d-flex p-4">
                <div className="row d-flex">
                <div className="col-sm-8 d-flex align-items-center mb-3">
                        <div className="d-flex flex-column">
                        <div><h1 className="cover-head">Soy Marc Tinent.</h1></div>
                        <div className="cover-body">Escribo cosas. Como novelas, tebeos, series de TV, late night shows, copy para empresas y discursos para ejecutivos. Y si me pongo, hasta postales de Navidad.</div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex align-items-center justify-content-center"><img src="https://via.placeholder.com/250x350?text=Headshot+Placeholder"/></div>
                </div>
                </div>
            </div>

            <div id="latest-work" className="page-section container d-flex flex-column">
                <h2 className="section-head">LO ÚLTIMO</h2>
                <Bookcard />
            </div>

            <div id="writing-advice" className="page-section container d-flex">
                <h2 className="section-head">CONSEJOS DE ESCRITURA</h2>
            </div>

            <div id="contact-me" className="page-section container d-flex flex-column">
                <h2 className="section-head">CONTACTO</h2>
                <div className="contact-box text-dark mb-3 d-flex align-items-center justify-content-center flex-column">
                    <div className="contact-text">¿Quieres saber más?</div>
                    <div className="d-flex mt-3">
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a href="http://www.instagram.com/marctinent"><BsInstagram className="fs-3"/></a></div>
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a href="mailto:marctinent@gmail.com"><AiTwotoneMail className="fs-2" /></a></div>
                    <div className="my-social-icon d-flex align-items-center justify-content-center me-3"><a href="http://www.linkedin.com"><BsLinkedin className="fs-2" /></a></div>
                    </div>
                </div>
            </div>



        </div>
  
    )
  }
  
  export default NewWebsite
  