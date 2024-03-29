import React from "react";
import imgProfile from "../assets/img/profile.webp";

import Button from "./utils/Button";

function Profile() {
  return (
    <section className="container-md py-3 py-md-5" id="profile">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div className="me-md-5 mb-3 mb-md-0">
          <img
            src={imgProfile}
            alt="Profile Illustration"
            className="rounded-circle"
            width={225}
            height={225}
          />
        </div>
        <div className="text-start">
          <h1 className="text-sky fw-bold">
            Mohammad Reza Ali Firdaus
          </h1>
          <h2 className="fw-medium fs-5">
            Front End Developer
          </h2>
          <h3 className="fs-6 mb-3">
            Web development enthusiast, especially in front end development. Always love to learn
            new things.
          </h3>
          <Button
            text="Download Resume"
            withIcons={false}
            customClass="btn btn-sm btn-sky text-white"
            isLink={true}
            link="https://drive.google.com/file/d/16trFHXwGqJW9wlmL92HYvSMedTbgJHGd/view?usp=sharing"
            newTab={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
