import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await fetch("http://localhost:3000/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    getUrl();
  }, []);

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project.id}>
            <div>
              <img src={project.imagem} alt={`Projeto ${project.id}`} />
            </div>
            <Button link={project.deploy} text="Deploy" />
            <Button to={`/Projects/${project.id}`} text="Detalhes" />
            <Button link={project.github} text="Código" />
          </div>
        ))}
    </div>
  );
};

export default Projects;
