import { AWS_CONFIG } from "./../../config/aws";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import { useState } from "react";
import DotChecked from "./../../assets/icons/dot_checked.png";
import DotUnchecked from "./../../assets/icons/dot_unchecked.png";
import ArrowBack from "./../../assets/icons/arrow_back.png";
import ArrowForward from "./../../assets/icons/arrow_forward.png";

function Carousel() {
  const photos = [
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/01_static.JPG`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/04_static.JPG`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/06_static.jpg`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/10_static.jpg`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/13_static.JPG`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/15_static.JPG`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/17_static.JPG`,
    `${AWS_CONFIG.CDN_URL}/static/home/caroussel/21_static.jpg`,
  ];

  const extendedPhotos = [
    photos[photos.length - 1], // 1 clone gauche
    ...photos,
    photos[0], // 1 clone droite
  ];

  const FIRST_REAL = 1;
  const LAST_REAL = photos.length; // 8

  const [carouselIndex, setCarouselIndex] = useState(1);

  const next = () => setCarouselIndex((prev) => (prev === LAST_REAL ? FIRST_REAL : prev + 1));
  const prev = () => setCarouselIndex((prev) => (prev === FIRST_REAL ? LAST_REAL : prev - 1));

  return (
    <div className="carousel-main-div">
      <div className="carousel-mask-content-div">
        <div className="carousel-content-div" style={{ transform: `translateX(-${(carouselIndex - 1) * 33.33}%)` }}>
          {extendedPhotos.map((photoUrl, index) => (
            <CarouselItem key={index} photoSrc={photoUrl}></CarouselItem>
          ))}
        </div>
      </div>
      <div className="carousel-nav-div">
        <button className="carousel-nav-btn carousel-previous-btn" onClick={prev}>
          <img src={ArrowBack} alt="Previous" />
        </button>
        <button className="carousel-nav-btn carousel-next-btn" onClick={next}>
          <img src={ArrowForward} alt="Next" />
        </button>
      </div>
      <div className="carousel-dots-div">
        {photos.map((photo, index) => (
          <img
            className={`carousel-dot ${index === carouselIndex - 1 ? "active" : ""}`}
            key={index}
            src={index === carouselIndex - 1 ? DotChecked : DotUnchecked}
            alt=""
            onClick={() => setCarouselIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
