import "./CarouselItem.css";

function CarouselItem({ index, photoSrc }) {
  return (
    <div className="carousel-item-main-div">
      <div className="carousel-item-content-div">
        <img src={photoSrc} alt={`Photographie d'illustration ${index}`} className="carousel-item-img" />
      </div>
    </div>
  );
}

export default CarouselItem;
