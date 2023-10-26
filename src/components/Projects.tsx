import React, { useState } from "react";

import dikadoin from "../assets/img/Dikadoin.png";
import gramedia from "../assets/img/Gramedia.png";
import jala from "../assets/img/Jala.png";
import pokepedia from "../assets/img/PokePedia.png";
import rayasdjanur from "../assets/img/RA Yasdjanur.png";

import ProjectCard from "./utils/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Dikadoin.dong",
      category: "Front end development",
      tools: ["React", "Tailwindcss", "Gatsby"],
      linkHref: "https://qitadev.com/dikadoin-dong/",
      imgSrc: dikadoin,
    },
    {
      title: "RA Yasdjanur",
      category: "Front end development",
      tools: ["Vue", "Tailwindcss", "Nuxt"],
      linkHref: "https://qitadev.com/ra-yasdjanur/",
      imgSrc: rayasdjanur,
    },
    {
      title: "PokePedia",
      category: "Front end development",
      tools: ["Vue", "Tailwindcss", "GraphQL", "Apollo", "PokeAPI"],
      linkHref: "https://firdausreza-pokepedia.vercel.app/pokedex",
      imgSrc: pokepedia,
    },
    {
      title: "Jala Tech",
      category: "Front end development",
      tools: ["Vue", "Sass", "Laravel"],
      linkHref: "https://jala.tech",
      imgSrc: jala,
    },
    {
      title: "Gramedia",
      category: "Front end development",
      tools: ["Angular", "TypeScript", "Less"],
      linkHref: "https://qitadev.com/dikadoin-dong/",
      imgSrc: gramedia,
    },
  ]);

  const projectList = projects.map((project, index) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <ProjectCard project={project} />
      </div>
    );
  });

  return (
    <section className="container-md py-3 py-md-5" id="projects">
      <h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
        Projects
      </h2>
      <div className="row g-3">{projectList}</div>
    </section>
  );
}

export default Projects;
