import ProjectCard from "./../components/ProjectCard";
import "./PhotoProjects.css";
import { Link } from "react-router-dom";
import { AWS_CONFIG } from "../config/aws";
import { useEffect, useState } from "react";
import { listS3Folders, getProjectMeta } from "../config/aws";

function PhotoProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listS3Folders("gallery/photos/").then(async (slugs) => {
      const projects = await Promise.all(
        slugs.map(async (slug) => {
          const meta = await getProjectMeta("photos", slug);
          return {
            slug,
            title: meta.title,
            cover: `${AWS_CONFIG.CDN_URL}/gallery/photos/${slug}/thumbnails/${meta.cover}`,
            description: meta.description,
          };
        }),
      );
      setProjects(projects);
    });
  }, []);

  return (
    <div className="photos-main-div">
      <div className="photos-content-div">
        {projects.map(({ slug, title, cover, description }) => (
          <ProjectCard key={slug} slug={slug} projectType="photos" projectName={title} projectIllustration={cover} projectDescription={description}></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default PhotoProjects;
