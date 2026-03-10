import "./CarouselItem.css";

function CarouselItem({ photoSrc }) {
  return (
    <div className="carousel-item-main-div">
      <div className="carousel-item-content-div">
        <img src={photoSrc} alt="" className="carousel-item-img" />
      </div>
    </div>
  );
}

export default CarouselItem;
