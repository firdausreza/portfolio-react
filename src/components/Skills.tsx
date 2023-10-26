import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faJs,
  faHtml5,
  faCss3,
  faSass,
  faAngular,
  faBootstrap,
  faGitAlt,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <section className="container-md py-3 py-md-5" id="skills">
      <h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
        Skills
      </h2>
      <div
        data-aos="fade-up"
        className="d-flex flex-wrap align-items-center gap-3"
      >
        <div>
          <FontAwesomeIcon
            icon={faHtml5}
            size="4x"
            style={{ color: "#ff6a00" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faCss3}
            size="4x"
            style={{ color: "#3b82f6" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faJs} size="4x" style={{ color: "#f2e200" }} />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faSass}
            size="4x"
            style={{ color: "#ec4899" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faBootstrap}
            size="4x"
            style={{ color: "#a855f7" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faVuejs}
            size="4x"
            style={{ color: "#22c55e" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faReact}
            size="4x"
            style={{ color: "#0ea5e9" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faAngular}
            size="4x"
            style={{ color: "#dc2626" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faLaravel}
            size="4x"
            style={{ color: "#ef4444" }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faGitAlt}
            size="4x"
            style={{ color: "#ef4444" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
