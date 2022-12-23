import * as React from "react";
import "./Cover.css";
import SocialIcons from "./SocialIcons";

const Cover = () => {
  return (
    <div className="hf-box d-flex flex-column p-4">
      <div>
        <h1 className="text-light pt-3">Soy Marc Tinent.</h1>
      </div>
      <div className="text-light">
        Escribo cosas. <br />
        Como novelas, tebeos, series, programas de entretenimiento para TV y
        copy de todo tipo. Y si me pongo, hasta postales de Navidad.
      </div>
      <SocialIcons />
    </div>
  );
};

export default Cover;
