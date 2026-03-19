import ProjectCard from "./../components/ProjectCard";
import "./VideoProjects.css";
import { Link } from "react-router-dom";
import { AWS_CONFIG } from "../config/aws";
import { useEffect, useState } from "react";
import { listS3Folders, getProjectMeta } from "../config/aws";

function VideoProjects() {
  // const category2Illustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/fresque.jpg`;
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   listS3Folders("gallery/videos/").then(async (slugs) => {
  //     const projects = await Promise.all(
  //       slugs.map(async (slug) => {
  //         const meta = await getProjectMeta("videos", slug);
  //         return {
  //           slug,
  //           title: meta.title,
  //           cover: `${AWS_CONFIG.CDN_URL}/gallery/videos/${slug}/${meta.cover}`,
  //           description: meta.description,
  //         };
  //       }),
  //     );
  //     setProjects(projects);
  //   });
  // }, []);
  // return (
  //   <div className="videos-main-div">
  //     <Link to="/">Back</Link>
  //     <div className="videos-content-div">
  //       {projects.map(({ slug, title, cover, description }) => (
  //         <ProjectCard key={slug} slug={slug} projectType="videos" projectName={title} projectIllustration={cover} projectDescription={description}></ProjectCard>
  //       ))}
  //     </div>
  //   </div>
  // );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listS3Folders("gallery/videos/").then(async (slugs) => {
      const projects = await Promise.all(
        slugs.map(async (slug) => {
          const meta = await getProjectMeta("videos", slug);
          return {
            slug,
            title: meta.title,
            cover: `${AWS_CONFIG.CDN_URL}/gallery/videos/${slug}/thumbnails/${meta.cover}`,
            description: meta.description,
          };
        }),
      );
      setProjects(projects);
    });
  }, []);

  return (
    <div className="videos-main-div">
      <div className="videos-content-div">
        {projects.map(({ slug, title, cover, description }) => (
          <ProjectCard key={slug} slug={slug} projectType="videos" projectName={title} projectIllustration={cover} projectDescription={description}></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default VideoProjects;
