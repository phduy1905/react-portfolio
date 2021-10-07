import React from "react";
import "./Projects.styles.scss";
import { projectsList } from "../constant";

export const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title projects__title">My work</h2>
      <h3 className="projects__subtitle">A selection of my range of work</h3>
      <div className="projects__container">
        {projectsList.map((project) => {
          return (
            <div className="projects__item" key={project.id}>
              <div className="projects__img-container">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="projects__img"
                />
                <span className="projects__name">{project.title}</span>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__source"
                >
                  Source
                </a>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__preview"
                >
                  Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
