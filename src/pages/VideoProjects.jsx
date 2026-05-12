import ProjectCard from "./../components/ProjectCard";
import "./VideoProjects.css";
import { AWS_CONFIG } from "../config/aws";
import { useEffect, useState } from "react";
import { listS3Folders, getProjectMeta } from "../config/aws";
import { Helmet } from "react-helmet-async";

function VideoProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listS3Folders("gallery/videos/").then(async (slugs) => {
      const projects = await Promise.all(
        slugs.map(async (slug) => {
          const meta = await getProjectMeta("videos", slug);
          return {
            slug,
            title: meta?.title ?? slug,
            cover: meta?.cover ? `${AWS_CONFIG.CDN_URL}/gallery/videos/${slug}/thumbnails/${meta.cover}` : null,
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
        <title>Projets Vidéo — Sans Étiquette</title>
        <meta name="description" content="Découvrez les projets vidéo de Martin Morda-Cotel : captation événementielle, streaming, réalisation pour L'Oréal, Renault, World Economic Forum et plus." />
        <meta property="og:title" content="Projets Vidéo — Sans Étiquette" />
        <meta
          property="og:description"
          content="Découvrez les projets vidéo de Martin Morda-Cotel : captation événementielle, streaming, réalisation pour L'Oréal, Renault, World Economic Forum et plus."
        />
        <meta property="og:url" content="https://www.sansetiquette-studio.fr/videos" />
      </Helmet>
      <div className="videos-main-div">
        <div className="videos-content-div">
          {projects.map(({ slug, title, cover, description }) => (
            <ProjectCard key={slug} slug={slug} projectType="videos" projectName={title} projectIllustration={cover} projectDescription={description}></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoProjects;
