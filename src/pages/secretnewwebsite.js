import React from "react";
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import Bookcard from '../components/Bookcard';
import Contact from '../components/Contact';
import './newwebsite.css';


const NewWebsite = () => {
    return (
  
        
        <div id="new-web" className="bg-light">
            <header>
                <Navbar />
            </header>

            <Cover />

            <div id="latest-work" className="page-section container d-flex flex-column">
                <h2 className="section-head">LO ÚLTIMO</h2>
                <Bookcard />
            </div>

            <Contact />

        </div>
  
    )
  }
  
  export default NewWebsite
  