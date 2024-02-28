import React from "react";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <img src={project.imagem} alt={`Projeto ${project.id}`} />
          <p>
            Deploy: <a href={project.deploy}>{project.deploy}</a>
          </p>
          <p>
            Github: <a href={project.github}>{project.github}</a>
          </p>
          <p>Description: {project.description}</p>
          <p>
            Video: <a href={project.video}>{project.video}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
