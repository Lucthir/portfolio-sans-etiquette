import "./PhotoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files } from "../config/aws";
import LightboxMedia from "../components/LightboxMedia";

function PhotoProjectGallery({ projectId }) {
  const { slug } = useParams();

  const [photos, setPhotos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif"];

  useEffect(() => {
    listS3Files(`gallery/photos/${slug}/fullscale`).then((photos) => {
      const files = photos.filter((url) => {
        const extension = url.split(".").pop().toLowerCase();
        return IMAGE_EXTENSIONS.includes(extension);
      });
      setPhotos(files);
    });
  }, [slug]);

  useEffect(() => {
    listS3Files(`gallery/photos/${slug}/thumbnails`).then((photos) => {
      const files = photos.filter((url) => {
        const extension = url.split(".").pop().toLowerCase();
        return IMAGE_EXTENSIONS.includes(extension);
      });
      setThumbnails(files);
    });
  }, [slug]);

  return (
    <div className="photo-project-main-div">
      <div className="photo-project-content-div">
        {thumbnails.map((url, index) => (
          <div
            key={url}
            className="photo-project-img-div"
            onClick={() => {
              if (isMobile) return;
              setLightboxIndex(index);
              setLightboxIsOpen(true);
            }}>
            <div className="photo-project-img-filter"></div>
            <img
              alt="test"
              src={url}
              className="photo-project-img"
              loading="lazy"
              onLoad={(e) => {
                const img = e.target;
                if (img.naturalWidth > img.naturalHeight) {
                  img.parentElement.classList.add("landscape");
                }
              }}
            />
          </div>
        ))}
      </div>
      <LightboxMedia
        className="lightbox"
        photos={photos}
        currentIndex={lightboxIndex}
        isOpen={lightboxIsOpen}
        onClose={() => setLightboxIsOpen(false)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)}
        onNext={() => setLightboxIndex((i) => (i + 1) % photos.length)}></LightboxMedia>
    </div>
  );
}

export default PhotoProjectGallery;
