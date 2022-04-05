import React from "react";
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import LatestWork from '../components/LatestWork';
import Contact from '../components/Contact';
import './index.css';

const IndexPage = () => {
    return (
  
        
        <main id="new-web" className="bg-light">
            <title>Marc Tinent | Escritor de Cosas</title>
            
            <header>
                <Navbar />
            </header>

            <Cover />

            <LatestWork />

            <Contact />

        </main>
  
    )
  }
  
  export default IndexPage
  