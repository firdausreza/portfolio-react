import React from "react";
import imgProfile from "../assets/img/profile.jpg";

import Button from "./utils/Button";

function Profile() {
  return (
    <section className="container-md py-3 py-md-5" id="profile">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div className="me-md-5 mb-3 mb-md-0">
          <img
            data-aos="fade-right"
            src={imgProfile}
            alt="Profile Illustration"
            className="rounded-circle"
            width={225}
            height={225}
          />
        </div>
        <div className="text-start">
          <h1 data-aos="fade-left" className="text-sky fw-bold">
            Mohammad Reza Ali Firdaus
          </h1>
          <h2 data-aos="fade-left" className="fw-medium fs-5">
            Front End Developer
          </h2>
          <h3 data-aos="fade-left" className="fs-6 mb-3">
            Web development enthusiast, especially in front end development. Always love to learn
            new things.
          </h3>
          <Button
            text="Download Resume"
            withIcons={false}
            customClass="btn btn-sm btn-sky text-white"
            isLink={true}
            link="https://drive.google.com/file/d/1UxynAUUgE2PMoo5PYgwuEq0QA0R5EFuC/view?usp=sharing"
            newTab={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
