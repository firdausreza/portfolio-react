import React from "react";

interface Props {
  experience: {
    title: string;
    company: string;
    companyLink: string;
    period: string;
    points: string[];
  };
}

function ExperienceCard(props: Props) {
  const listItem = props.experience.points.map((point, index) => {
    return (
      <li className="text-start" key={index}>
        {point}
      </li>
    );
  });
  return (
    <div data-aos="fade-up" className="card h-100">
      <div className="card-body d-flex flex-column align-align-items-start">
        <h3 className="card-title text-sky text-start fs-4 mb-1">
          {props.experience.title}
        </h3>
        <a
          href={props.experience.companyLink}
          target="_blank"
          className="card-subtitle text-start fw-medium fs-6 mb-1 link-underline link-underline-opacity-0"
          style={{ width: "max-content" }}
          rel="noreferrer"
        >
          {props.experience.company}
        </a>
        <h5 className="text-secondary text-start fs-6 mb-2">
          {props.experience.period}
        </h5>
        <ul className="ps-3">{listItem}</ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
