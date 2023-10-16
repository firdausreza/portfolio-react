import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  project: {
    title: string;
    category: string;
    tools: string[];
    linkHref: string;
    imgSrc: string;
  };
}

function ProjectCard(props: Props) {
  const toolsList = props.project.tools.map((tool, index) => {
    return (
      <p
        className="bg-sky px-2 py-1 text-white rounded mb-0"
        style={{ fontSize: "12px" }}
        key={index}
      >
        {tool}
      </p>
    );
  });
  return (
    <div data-aos="fade-up" className="card h-100">
      <img
        src={props.project.imgSrc}
        alt={props.project.title}
        className="card-img-top border-bottom"
      />
      <div className="card-body">
        <a
          href={props.project.linkHref}
          target="_blank"
          className="card-title d-flex align-items-center link-underline link-underline-opacity-0 text-start fs-5 text-sky mb-1"
        >
          {props.project.title}
          <span>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              size="2xs"
              className="ms-2"
            />
          </span>
        </a>
        <h5 className="text-secondary text-start fs-6 mb-2">
          {props.project.category}
        </h5>
        <div className="d-flex flex-wrap align-items-center gap-1">
          {toolsList}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
