import { useRef, useState } from "react";
import PlayArrow from "./../assets/icons/play_icon_white_full.png";
import "./VideoPlayer.css";

function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const vid = videoRef.current;
    vid.paused ? vid.play() : vid.pause();
  };

  return (
    <div className="player-wrap">
      <video
        ref={videoRef}
        controls
        src={src}
        poster={poster}
        className="video-project-media"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onLoadedData={(e) => {
          console.log(e.target.videoHeight);
          const vid = e.target;
          if (vid.videoWidth < vid.videoHeight) {
            vid.classList.add("portrait");
          }
        }}
      />
      {!isPlaying && (
        <div className="play-overlay" onClick={toggle}>
          <img src={PlayArrow} alt="" className="play-icon" />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
