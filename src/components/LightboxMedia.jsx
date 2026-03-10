import "./LightboxMedia.css";
import { useEffect, useCallback, useState } from "react";
import LightboxArrowForward from "./../assets/icons/lightbox_arrow_forward_black.png";
import LightboxArrowBack from "./../assets/icons/lightbox_arrow_back_black.png";
import LightboxCloseIcon from "./../assets/icons/close_black.png";

function LightboxMedia({ photos, currentIndex, onClose, onPrev, onNext, isOpen }) {
  return (
    <div className={`lightbox-main-div ${isOpen ? "lightbox-open" : ""}`}>
      <div className="lightbox-close-div">
        <button className="lightbox-btn lightbox-close-btn" onClick={onClose}>
          <img src={LightboxCloseIcon} alt="" />
        </button>
      </div>
      <div className="lightbox-nav-media-div">
        <div className="lightbox-prev-div">
          <button className="lightbox-btn lightbox-prev-btn" onClick={onPrev}>
            <img src={LightboxArrowBack} alt="" className="lightbox-arrow lightbox-arrow-back" />
          </button>
        </div>
        <div className="lightbox-content-div">
          <img src={photos[currentIndex]} alt="" className="lightbox-media" />
        </div>
        <div className="lightbox-next-div">
          <button className="lightbox-btn lightbox-next-btn" onClick={onNext}>
            <img src={LightboxArrowForward} alt="" className="lightbox-arrow lightbox-arrow-forward" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LightboxMedia;
