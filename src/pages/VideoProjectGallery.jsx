import "./VideoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files } from "../config/aws";
import VideoPlayer from "./../components/VideoPlayer";

function VideoProjectGallery({ projectId }) {
  const { slug } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    listS3Files(`gallery/videos/${slug}/fullscale`).then(setFiles);
  }, [slug]);

  return (
    <div className="video-project-main-div">
      <div className="video-project-content-div">
        {files.map((url) => (
          // <video
          //   key={url}
          //   src={url}
          //   controls
          //   className="video-project-media"
          //   onLoadedData={(e) => {
          //     console.log(e.target.videoHeight);
          //     const vid = e.target;
          //     if (vid.videoWidth < vid.videoHeight) {
          //       vid.classList.add("portrait");
          //     }
          //   }}
          // />
          <VideoPlayer src={url}></VideoPlayer>
        ))}
      </div>
    </div>
  );
}

export default VideoProjectGallery;
