import React from "react";

function About() {
  return (
    <section className="container-md py-3 py-md-5" id="about">
      <h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
        About
      </h2>
      <p data-aos="fade-up" className="text-start mb-0">
        Hi! My name is Reza, people also call me Ali. I live in Indonesia and I
        graduated from Bachelor Degree of Informatics at Islamic University of
        Indonesia. I remember when I became interested in programming and
        application development, it was while studying web development course in
        college. For me, programming itself is quite unique and it can grind our
        creativity in problem solving.
        <br />
        <br />
        I'm a Frontend Developer enthusiast, a lifelong learner who always had
        the curiosity to learn frontend technologies. Although I have a lot of
        enthusiasm in Frontend Development, I also tried to learn Backend
        Development. Because my dream is to become a Fullstack Developer.
        <br />
        <br />I had my first professional experiences by doing an internship at{" "}
        <span>
          <a
            href="https://jala.tech/"
            target="_blank"
            className="link-underline link-underline-opacity-0"
            rel="noreferrer"
          >
            Jala Tech
          </a>
        </span>{" "}
        for 6 months and got another extra 3-months of part-time opportunity. I
        landed my first internship as Product Engineer but focused as Front End
        Developer. I learned so many new things in either the hard skills and
        soft skills, like professional working ethics, learns how to adapt in
        new environment, learns the tech stack used for work, etc. As time goes
        by, I have been working as a front end developer for more than 1 year.
        And currently I'm working as a front end developer for{" "}
        <span>
          <a
            href="https://gramedia.com/"
            target="_blank"
            className="link-underline link-underline-opacity-0"
            rel="noreferrer"
          >
            Kompas Gramedia
          </a>
        </span>
        .
      </p>
    </section>
  );
}

export default About;
