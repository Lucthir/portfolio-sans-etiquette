import "./PhotoProjectGallery.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listS3Files } from "../config/aws";
import LightboxMedia from "../components/LightboxMedia";
import { Helmet } from "react-helmet-async";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif"];

function PhotoProjectGallery({ projectId }) {
  const { slug } = useParams();

  const [photos, setPhotos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CDN_URL}/gallery/photos/${slug}/metadata.json`)
      .then((res) => res.json())
      .then(setMetadata);
  }, [slug]);

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
    <>
      <Helmet>
        <title>{metadata ? `${metadata.title} — Sans Étiquette` : "Sans Étiquette"}</title>
        <meta name="description" content={metadata?.description || ""} />
        <meta property="og:title" content={metadata ? `${metadata.title} — Sans Étiquette` : "Sans Étiquette"} />
        <meta property="og:description" content={metadata?.description || ""} />
        <meta property="og:image" content={metadata ? `${process.env.REACT_APP_CDN_URL}/gallery/photos/${slug}/fullscale/${metadata.cover}` : ""} />
        <meta property="og:url" content={`https://www.sansetiquette-studio.fr/photos/${slug}`} />
      </Helmet>
      <div className="photo-project-main-div">
        <div className="photo-project-content-div">
          {thumbnails.map((url, index) => {
            return (
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
                  alt={`Miniature ${index + 1} du projet`}
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
            );
          })}
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
    </>
  );
}

export default PhotoProjectGallery;
