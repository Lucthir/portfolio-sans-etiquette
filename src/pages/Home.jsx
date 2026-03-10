import { AWS_CONFIG } from "../config/aws";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./../components/Carousel/Carousel";

function Home() {
  const mainBackground = `${AWS_CONFIG.CDN_URL}/static/home/test_main_bg.png`;
  const portraitsIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/vietnam.jpg`;
  const category3Illustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/woman.jpg`;
  const category4Illustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/concert.jpg`;
  const bioPhotography = `${AWS_CONFIG.CDN_URL}/static/home/martin_test_bio.jpg`;
  const partenairesVideo = `${AWS_CONFIG.CDN_URL}/static/home/partenaires.mp4`;

  const navigate = useNavigate();

  return (
    <div className="home-main-div">
      <div className="home-content-div">
        <div className="hero-div">
          <h1>MARTIN MORDA-COTEL</h1>
        </div>
        <div className="caroussel-div">
          {/* <h2>CAROUSSEL</h2> */}
          <Carousel></Carousel>
          {/* <EmblaCarousel></EmblaCarousel> */}
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
      {/* <div className="hero">
        <div className="hero-filter"></div>
        <div className="hero_background">
          <img src={mainBackground} alt="" className="hero-background-img" />
        </div>
      </div>
      <div className="categories">
        <div className="category-div portraits">
          <div className="category-div-pack">
            <div className="category-illustration-filter"></div>
            <img src={portraitsIllustration} alt="" className="category-illustration portraits-illustration" />
          </div>
        </div>
        <div className="category-div category2">
          <div className="category-div-pack">
            <div className="category-illustration-filter"></div>
            <img src={category2Illustration} alt="" className="category-illustration category2-illustration" />
          </div>
        </div>
        <div className="category-div category3">
          <div className="category-div-pack">
            <div className="category-illustration-filter"></div>
            <img src={category3Illustration} alt="" className="category-illustration category3-illustration" />
          </div>
        </div>
        <div className="category-div category4">
          <div className="category-div-pack">
            <div className="category-illustration-filter"></div>
            <img src={category4Illustration} alt="" className="category-illustration category4-illustration" />
          </div>
        </div>
      </div>
      <div className="biography">
        <div className="bio-photo-div">
          <img src={bioPhotography} alt="" className="bio-photo" />
        </div>
        <div className="bio-text-div">
          <p className="bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
