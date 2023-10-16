import React from "react";

import ExperienceCard from "./utils/ExperienceCard";

function Experiences() {
  const experiences = [
    {
      title: "Front End Developer",
      company: "Gramedia",
      companyLink: "https://gramedia.com",
      period: "Jan 2023 - Present",
      points: [
        "Maintaining and responsible for gramedia.com web apps using Angular.",
        "Contributed in migrating Google Analytics 4, improving SEO performance.",
        "Participating in code reviews and post deployment to ensure the final results of a development.",
        "Troubleshooting, debugging, and doing bugfixes in development and production environment.",
        "Working in agile environment.",
      ],
    },
    {
      title: "Front End Developer",
      company: "Glance.sg",
      companyLink: "https://glance.sg",
      period: "Oct 2022 - May 2023",
      points: [
        "Developing user interfaces using Vue and integrating the back end data with Laravel/Inertia.",
        "Developed Glance AI feature for talent and company matching.",
        "Developed Glance video tutorial feature.",
        "Revamped and doing user interface fixes for users dashboard feature.",
        "Improved user interface for Glance landing page.",
        "Troubleshooting, debugging, and doing bugfixes in development and production environment.",
      ],
    },
    {
      title: "Product Engineer",
      company: "Jala Tech",
      companyLink: "https://jala.tech",
      period: "Sep 2022 - Jun 2023",
      points: [
        "Developing user interfaces using Vue and integrating the back end data with Laravel.",
        "Contributed in development of Telegram Bot for Jala Tech to support local shrimp farmers.",
        "Improved home dashboard on Jala web apps.",
        "Developed new pond dashboard feature to improve the quality of ponds data delivery.",
        "Working in agile environment.",
      ],
    },
  ];

  const experiencesList = experiences.map((exp, index) => {
    return (
      <div className="col-12 col-sm-6 col-md-4" key={index}>
        <ExperienceCard experience={exp} key={index} />
      </div>
    );
  });

  return (
    <section className="container-md py-3 py-md-5" id="experiences">
      <h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
        Experiences
      </h2>
      <div className="row g-3">{experiencesList}</div>
    </section>
  );
}

export default Experiences;
