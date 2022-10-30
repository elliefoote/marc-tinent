import * as React from "react";
import MarcHeadshot from "../images/MarcHeadshot.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <div
      id="cover"
      className="page-section container d-flex align-items-center"
    >
      <div id="cover-box" className="d-flex">
        <div className="row d-flex justify-content-center">
          <div className="text-container col-lg-7 d-flex align-items-center mx-3 px-5 pt-5 p-lg-3">
            <div className="d-flex flex-column">
              <div>
                <h1 className="cover-head text-light">Soy Marc Tinent.</h1>
              </div>
              <div className="cover-body text-light fs-4">
                Escribo cosas. Como novelas, tebeos, series, programas de
                entretenimiento para TV y copy de todo tipo. Y si me pongo,
                hasta postales de Navidad.
              </div>
              <div className="mt-2"><a href="#latest-work" className="cta fs-4">¿Te pica la curiosidad?</a></div>
            </div>
          </div>
          <div className="col-lg-4 headshot-container mx-1 p-5">
            <img className="headshot" src={MarcHeadshot} alt="Marc Tinent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
