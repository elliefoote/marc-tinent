import * as React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div className="d-flex mt-4">
      <div className="my-social-icon d-flex align-items-center justify-content-center me-3">
        <a
          name="Instagram de Marc Tinent"
          href="http://www.instagram.com/marctinent"
        >
          <BsInstagram className="fs-6 text-dark" />
        </a>
      </div>
      <div className="my-social-icon d-flex align-items-center justify-content-center me-3">
        <a
          name="Correo Electrónico de Marc Tinent"
          href="mailto:marctinent@gmail.com"
        >
          <AiTwotoneMail className="fs-5 text-dark" />
        </a>
      </div>
      <div className="my-social-icon d-flex align-items-center justify-content-center me-3">
        <a
          name="LinkedIn de Marc Tinent"
          href="https://www.linkedin.com/in/marctinent"
        >
          <BsLinkedin className="fs-5 text-dark" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
