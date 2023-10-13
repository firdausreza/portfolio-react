import React, { useEffect, useState } from "react";
import icon from "../assets/icon/icon.png";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  const navbarBrandText = () => {
    if (windowWidth > 768) {
      return "Reza Firdaus";
    } else {
      return "";
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-md">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-5"
          href="#"
        >
          <img
            src={icon}
            alt="Reza Firdaus Logo"
            width="50"
            height="50"
            className="me-3"
          />
          {navbarBrandText()}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
