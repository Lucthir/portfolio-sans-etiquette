import { AWS_CONFIG } from "../config/aws";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./../components/Carousel/Carousel";

function Home() {
  // const mainBackground = `${AWS_CONFIG.CDN_URL}/static/home/test_main_bg.png`;
  const portraitsIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/vietnam.jpg`;
  // const category3Illustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/woman.jpg`;
  const category4Illustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/concert.jpg`;
  const bioPhotography = `${AWS_CONFIG.CDN_URL}/static/home/martin_test_bio.jpg`;
  const partenairesVideo = `${AWS_CONFIG.CDN_URL}/static/home/partenaires.mp4`;

  const navigate = useNavigate();

  return (
    <div className="home-main-div">
      <div className="home-content-div">
        <div className="hero-div">
          <div className="hero-title-div">
            <h1>MARTIN MORDA-COTEL</h1>
          </div>
          <div className="hero-content-div">
            <img src={bioPhotography} alt="" className="hero-img" />
            <p className="hero-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
        <div className="caroussel-div">
          <Carousel></Carousel>
        </div>
        <div className="categories-div">
          <div className="videos-category-div category-div">
            <div className="category-illustration-filter" onClick={() => navigate("/videos")}>
              <h2>// Videos</h2>
            </div>
            <img src={category4Illustration} alt="" />
          </div>
          <div className="photos-category-div category-div">
            <div className="category-illustration-filter" onClick={() => navigate("/photos")}>
              <h2>// Photos</h2>
            </div>
            <img src={portraitsIllustration} alt="" />
          </div>
        </div>
        <div className="partenaires-div">
          <h2>Partenaires</h2>
          <video height="300px;" autoPlay loop muted>
            <source src={partenairesVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
