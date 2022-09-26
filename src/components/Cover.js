import * as React from "react";
import MarcHeadshot from "../images/MarcHeadshot.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <div
      id="cover"
      className="page-section container d-flex align-items-center"
    >
      <div id="cover-box" className="d-flex p-4">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 d-flex align-items-center mb-3">
            <div className="d-flex flex-column">
              <div>
                <h1 className="cover-head text-light">Soy Marc Tinent.</h1>
              </div>
              <div className="cover-body text-light">
                Escribo cosas. Como novelas, tebeos, series, programas de
                entretenimiento para TV y copy de todo tipo. Y si me pongo,
                hasta postales de Navidad.
              </div>
              <div className="cta mt-2">¿Te pica la curiosidad?</div>
            </div>
          </div>
          <div className="headshot-container col-lg-4">
            <img className="headshot" src={MarcHeadshot} alt="Marc Tinent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
