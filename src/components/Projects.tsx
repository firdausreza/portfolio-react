import React, { useState } from "react";

import gramedia from "../assets/img/gramedia.png";
import jala from "../assets/img/jala.png";
import pokepedia from "../assets/img/pokepedia.png";
import rayasdjanur from "../assets/img/rayasdjanur.png";
import glance from "../assets/img/glance.png";
import hinggatua from "../assets/img/hinggatua.png";
import mal from "../assets/img/mal.png";

import ProjectCard from "./utils/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "RA Yasdjanur",
      category: "Front end development",
      tools: ["Vue", "TailwindCSS", "Nuxt 2"],
      linkHref: "https://qitadev.com/ra-yasdjanur/",
      imgSrc: rayasdjanur,
    },
    {
      title: "PokePedia",
      category: "Front end development",
      tools: ["Vue", "TailwindCSS", "GraphQL", "Apollo", "PokeAPI"],
      linkHref: "https://firdausreza-pokepedia.vercel.app/pokedex",
      imgSrc: pokepedia,
    },
    {
      title: "MyAnimeList Clone",
      category: "Front end development",
      tools: ["Vue", "TailwindCSS", "Nuxt 3", "MAL API"],
      linkHref: "https://mal-clone-firdausreza.vercel.app",
      imgSrc: mal,
    },
    {
      title: "Hingga Tua",
      category: "Front end development",
      tools: ["HTML", "TailwindCSS", "Vanilla JS"],
      linkHref: "https://hinggatua.com",
      imgSrc: hinggatua,
    },
    {
      title: "Jala Tech",
      category: "Front end development",
      tools: ["Vue", "Sass", "Laravel", "Bootstrap 3"],
      linkHref: "https://jala.tech",
      imgSrc: jala,
    },
    {
      title: "Glance.sg",
      category: "Front end development",
      tools: ["Vue", "Laravel", "Inertia", "TailwindCSS"],
      linkHref: "https://glance.sg",
      imgSrc: glance,
    },
    {
      title: "Gramedia",
      category: "Front end development",
      tools: ["Angular", "TypeScript", "Less"],
      linkHref: "https://gramedia.com",
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
