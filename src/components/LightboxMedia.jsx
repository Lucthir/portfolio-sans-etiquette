import "./LightboxMedia.css";
import LightboxArrowForward from "./../assets/icons/lightbox_arrow_forward_white.png";
import LightboxArrowBack from "./../assets/icons/lightbox_arrow_back_white.png";
import LightboxCloseIcon from "./../assets/icons/close_white.png";

function LightboxMedia({ photos, currentIndex, onClose, onPrev, onNext, isOpen }) {
  return (
    <div className={`lightbox-main-div ${isOpen ? "lightbox-open" : ""}`}>
      <div className="lightbox-close-div">
        <button className="lightbox-btn lightbox-close-btn" onClick={onClose}>
          <img src={LightboxCloseIcon} alt="bouton fermer" className="lightbox-close-img" />
        </button>
      </div>
      <div className="lightbox-nav-media-div">
        <div className="lightbox-prev-div">
          <button className="lightbox-btn lightbox-prev-btn" onClick={onPrev}>
            <img src={LightboxArrowBack} alt="bouton précédent" className="lightbox-arrow lightbox-arrow-back" />
          </button>
        </div>
        <div className="lightbox-content-div">
          {currentIndex !== null && photos[currentIndex] && <img key={currentIndex} src={photos[currentIndex]} alt={`Photographie ${currentIndex + 1} du projet`} className="lightbox-media" />}
        </div>
        <div className="lightbox-next-div">
          <button className="lightbox-btn lightbox-next-btn" onClick={onNext}>
            <img src={LightboxArrowForward} alt="bouton suivant" className="lightbox-arrow lightbox-arrow-forward" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LightboxMedia;
