import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";

const ProjectsDetail = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await fetch(`http://localhost:3000/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    getUrl();
  }, [id]);

  return (
    <div>
      <h1>ProjectsDetail</h1>
      {project && (
        <div key={project.id}>
          <div>
            <img src={project.imagem} alt={`Projeto ${project.id}`} />
          </div>
          <Button to={"/projects"} text="Voltar" />
        </div>
      )}
    </div>
  );
};

export default ProjectsDetail;
