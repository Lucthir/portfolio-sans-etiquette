import "./VideoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files } from "../config/aws";

function VideoProjectGallery({ projectId }) {
  const { slug } = useParams();
  const [files, setFiles] = useState([]);
  useEffect(() => {
    listS3Files(`gallery/videos/${slug}/`).then(setFiles);
  }, [slug]);
  return (
    <div>
      {files.map((url) => (
        <video key={url} src={url} controls width="600" />
      ))}
      Coucou {slug}
    </div>
  );
}

export default VideoProjectGallery;
