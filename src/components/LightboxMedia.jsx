import "./LightboxMedia.css";
import { useEffect, useCallback, useState } from "react";

function LightboxMedia({ photos, currentIndex, onClose, onPrev, onNext, isOpen }) {
  return (
    <div className={`lightbox-main-div ${isOpen ? "lightbox-open" : ""}`}>
      <div className="lightbox-close-div">
        <button className="lightbox-close-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
      <div className="lightbox-prev-div">
        <button className="lightbox-prev-btn" onClick={onPrev}>
          Précédent
        </button>
      </div>
      <div className="lightbox-content-div">
        <img src={photos[currentIndex]} alt="" className="lightbox-media" />
      </div>
      <div className="lightbox-next-div">
        <button className="lightbox-next-btn" onClick={onNext}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default LightboxMedia;
