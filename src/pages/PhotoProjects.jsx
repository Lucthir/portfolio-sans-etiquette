import ProjectCard from "./../components/ProjectCard";
import "./PhotoProjects.css";
import { AWS_CONFIG } from "../config/aws";
import { useEffect, useState } from "react";
import { listS3Folders, getProjectMeta } from "../config/aws";
import { Helmet } from "react-helmet-async";

function PhotoProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listS3Folders("gallery/photos/").then(async (slugs) => {
      const projects = await Promise.all(
        slugs.map(async (slug) => {
          const meta = await getProjectMeta("photos", slug);
          return {
            slug,
            title: meta?.title ?? slug,
            cover: meta?.cover ? `${AWS_CONFIG.CDN_URL}/gallery/photos/${slug}/fullscale/${meta.cover}` : null,
            description: meta?.description ?? "",
          };
        }),
      );
      setProjects(projects);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Projets Photo — Sans Étiquette</title>
        <meta name="description" content="Découvrez les projets photographiques de Martin Morda-Cotel : portraits, événements, reportages en France et en Suisse." />
        <meta property="og:title" content="Projets Photo — Sans Étiquette" />
        <meta property="og:description" content="Découvrez les projets photographiques de Martin Morda-Cotel : portraits, événements, reportages en France et en Suisse." />
        <meta property="og:url" content="https://www.sansetiquette-studio.fr/photos" />
      </Helmet>
      <div className="photos-main-div">
        <div className="photos-content-div">
          {projects.map(({ slug, title, cover, description }) => (
            <ProjectCard key={slug} slug={slug} projectType="photos" projectName={title} projectIllustration={cover} projectDescription={description}></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default PhotoProjects;
