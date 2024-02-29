import { useEffect, useState } from "react";
import {Button, Button2} from "../components/Button";
import { Link } from "react-router-dom";

const Projects = () => {
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

            <Button id="viwer" link={project.deploy} text="Deploy" />
            <Button2 to={"/ProjectsDetail"} text="Detalhes" />
            <Button link={project.github} text="Código" />
          </div>
        ))}
    </div>
  );
};

export default Projects;
