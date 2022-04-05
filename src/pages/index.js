import React from "react";
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import LatestWork from '../components/LatestWork';
import Contact from '../components/Contact';
import './index.css';

const IndexPage = () => {
    return (
  
        
        <div id="new-web" className="bg-light">
            <header>
                <Navbar />
            </header>

            <Cover />

            <LatestWork />

            <Contact />

        </div>
  
    )
  }
  
  export default IndexPage
  