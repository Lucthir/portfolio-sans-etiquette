import { AWS_CONFIG } from "../config/aws";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./../components/Carousel/Carousel";
import InstagramIcon from "./../assets/icons/instagram.png";

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
            <h1>SANS ÉTIQUETTE</h1>
          </div>
          <div className="hero-content-div">
            <img src={bioPhotography} alt="" className="hero-img" />
            <p className="hero-description">
              Ingénieur du son & Producteur vidéo indépendant spécialisé dans la captation live et le streaming corporate, je justifie de plus de 6 ans d'expérience dans l'audiovisuel. Expert en
              réalisation multicam et gestion sonore complexe pour des événements d'envergure internationale (World Economic Forum, L’Oréal). Basé entre Paris et Genève, j'apporte une solution
              technique complète et rigoureuse pour vos projets de communication en direct.
            </p>
          </div>
        </div>
        <div className="caroussel-div">
          <Carousel></Carousel>
        </div>
        <div className="categories-div">
          <div className="photos-category-div category-div">
            <div className="category-illustration-filter" onClick={() => navigate("/photos")}>
              <h2>// Photos</h2>
            </div>
            <img src={portraitsIllustration} alt="" />
          </div>
          <div className="videos-category-div category-div">
            <div className="category-illustration-filter" onClick={() => navigate("/videos")}>
              <h2>// Videos</h2>
            </div>
            <img src={category4Illustration} alt="" />
          </div>
        </div>
        <div className="partenaires-div">
          <h2>Partenaires</h2>
          <video height="300px;" autoPlay loop muted>
            <source src={partenairesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contact-div">
          <p>Martin MORDA-COTEL</p>
          <p>06XXXXXXXX</p>
          <p>Paris/Genève</p>
          <p>sans-etiquette@gmail.com</p>
          <a href="https://www.instagram.com/sans_etiquette">
            <img src={InstagramIcon} alt="" className="instagram-img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
