import "./VideoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files, getMediaType } from "../config/aws";
import VideoPlayer from "./../components/VideoPlayer";
import { Helmet } from "react-helmet-async";

function VideoProjectGallery({ projectId }) {
  const { slug } = useParams();
  const [files, setFiles] = useState([]);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CDN_URL}/gallery/videos/${slug}/metadata.json`)
      .then((res) => res.json())
      .then(setMetadata);
  }, [slug]);

  useEffect(() => {
    listS3Files(`gallery/videos/${slug}/fullscale`).then(setFiles);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{metadata ? `${metadata.title} — Sans Étiquette` : "Sans Étiquette"}</title>
        <meta name="description" content={metadata?.description || ""} />
        <meta property="og:title" content={metadata ? `${metadata.title} — Sans Étiquette` : "Sans Étiquette"} />
        <meta property="og:description" content={metadata?.description || ""} />
        <meta property="og:image" content={metadata ? `${process.env.REACT_APP_CDN_URL}/gallery/videos/${slug}/fullscale/${metadata.cover}` : ""} />
        <meta property="og:url" content={`https://www.sansetiquette-studio.fr/videos/${slug}`} />
      </Helmet>
      <div className="video-project-main-div">
        <div className="video-project-content-div">
          <div className="video-project-images-grid">
            {files
              .filter((url) => getMediaType(url) === "image")
              .map((url, index) => (
                <img key={url} src={url} alt={`Capture d'écran du projet ${index + 1}`} className="video-project-img" />
              ))}
          </div>
          {files
            .filter((url) => getMediaType(url) === "video")
            .map((url) => (
              <VideoPlayer key={url} src={url} />
            ))}
        </div>
      </div>
    </>
  );
}

export default VideoProjectGallery;
