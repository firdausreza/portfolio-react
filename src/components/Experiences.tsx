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
        "Maintained and responsible for a large-scale web application (gramedia.com).",
        "Contributed in Google Analytics 4 migration and implemented Pixel Tracking, improving SEO performance.",
        "Fixed cart and checkout features, reducing customer complaints by quite significant amounts.",
        "Participated in code reviews and post deployment testing to ensure the final results of a development.",
        "Troubleshoot, debugging, and did several bugfixes in development and production environment.",
        "Work in agile environment.",
      ],
    },
    {
      title: "Front End Developer",
      company: "Glance.sg",
      companyLink: "https://glance.sg",
      period: "Oct 2022 - May 2023",
      points: [
        "Built user interfaces using vue and integrating the back end data with Laravel/Inertia.",
        "Developed Glance AI feature for talent and company matching.",
        "Developed Glance video tutorial feature.",
        "Revamped and fixed user interface for users dashboard feature.",
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
        "Built user interfaces using vue and integrating the back end data with Laravel.",
        "Contributed in development of Telegram Bot for Jala Tech to support local shrimp farmers.",
        "Improved home dashboard on Jala web apps.",
        "Developed new pond dashboard feature to improve the quality of ponds data delivery.",
        "Work in agile environment.",
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
