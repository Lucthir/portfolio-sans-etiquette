import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

function ProjectCard({ slug, projectType, projectName, projectIllustration, projectDescription }) {
  const navigate = useNavigate();
  console.log(projectIllustration);
  return (
    <div className="project-card-main-div">
      <div className="project-illustration-filter" onClick={() => navigate(`/${projectType}/${slug}`)}>
        <h2>// {projectName}</h2>
        <p>{projectDescription}</p>
      </div>
      <img src={projectIllustration} alt="" className="project-illustration" />
    </div>
  );
}

export default ProjectCard;
