import "./VideoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files, getMediaType } from "../config/aws";
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
        {/* {files.map((url) => (
          <VideoPlayer src={url}></VideoPlayer>
        ))} */}
        <div className="video-project-images-grid">
          {files
            .filter((url) => getMediaType(url) === "image")
            .map((url) => (
              <img key={url} src={url} alt="" className="video-project-img" />
            ))}
        </div>
        {files
          .filter((url) => getMediaType(url) === "video")
          .map((url) => (
            <VideoPlayer key={url} src={url} />
          ))}
      </div>
    </div>
  );
}

export default VideoProjectGallery;
