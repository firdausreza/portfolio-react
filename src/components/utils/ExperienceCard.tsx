import React from "react";

interface Props {
  experience: {
    title: string;
    company: string;
    companyLink: string;
    period: string;
    description: string;
    points: string[];
  };
}

function ExperienceCard({experience}: Props) {
  const listItem = experience.points.map((point, index) => {
    return (
      <li className="text-start" key={index}>
        {point}
      </li>
    );
  });
  return (
    <div data-aos="fade-up" className="card border-0 h-100">
      <div className="card-body px-0 d-flex flex-column align-align-items-start">
        <h3 className="card-title text-sky text-start fs-4 mb-1">
          {experience.title}
        </h3>
        <a
          href={experience.companyLink}
          target="_blank"
          className="card-subtitle text-start fw-medium fs-6 mb-1 link-underline link-underline-opacity-0"
          style={{ width: "max-content" }}
          rel="noreferrer"
        >
          {experience.company}
        </a>
        <h4 className="text-secondary text-start fs-6 mb-2">
          {experience.period}
        </h4>
        <p style={{textAlign: "justify"}} className="mb-2">
          {experience.description}
        </p>
        <h5 className="fs-6 text-sky mb-2">
          Accomplishments:
        </h5>
        <ul className="ps-3">{listItem}</ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
