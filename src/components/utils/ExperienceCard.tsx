import React from "react";

interface Props {
  experience: {
    title: string;
    company: string;
    companyLink: string;
    period: string;
    points: string[];
  };
  key: number;
}

function ExperienceCard(props: Props) {
  const listItem = props.experience.points.map((point) => {
    return <li className="text-start">{point}</li>;
  });
  return (
    <div data-aos="fade-up" className="card h-100" key={props.key}>
      <div className="card-body d-flex flex-column align-align-items-start">
        <h3 className="card-title text-sky text-start fs-4 mb-1">
          {props.experience.title}
        </h3>
        <a
          href={props.experience.companyLink}
          target="_blank"
          className="card-subtitle text-start fw-medium fs-6 mb-1 link-underline link-underline-opacity-0"
          style={{ width: "max-content" }}
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
