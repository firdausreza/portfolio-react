import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container-fluid px-0 pt-3 pt-md-5">
      <div className="d-flex align-items-center justify-content-center gap-4">
        <a
          href="https://github.com/firdausreza"
          target="_blank"
          className="text-sky"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/rezafirdaus080/"
          target="_blank"
          className="text-sky"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="mailto:mhmmdrezalif@gmail.com"
          target="_blank"
          className="text-sky"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
      <hr className="text-sky opacity-100 border border-2 border-sky" />
      <p className="text-center text-sky font-medium">
        &copy; 2023 - Mohammad Reza Ali Firdaus.
      </p>
    </div>
  );
}

export default Footer;
