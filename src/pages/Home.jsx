import { AWS_CONFIG } from "../config/aws";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./../components/Carousel/Carousel";
import InstagramIcon from "./../assets/icons/instagram.png";

function Home() {
  const photosIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/vietnam.jpg`;
  const videosIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/screenshot_HM.jpg`;
  const bioPhotography = `${AWS_CONFIG.CDN_URL}/static/home/martin_test_bio.jpg`;
  // const partenairesVideo = `${AWS_CONFIG.CDN_URL}/static/home/partenaires.mp4`;
  const partenairesLogos = [
    `${AWS_CONFIG.CDN_URL}/static/logos/CNP.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/Credit-Agricole.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/Dakar.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/Lions Festival.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/loreal.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/Qonto.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/Renault.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/videlio.png`,
    `${AWS_CONFIG.CDN_URL}/static/logos/WEF.png`,
  ];

  const navigate = useNavigate();

  return (
    <div className="home-main-div" id="top">
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
            <img src={photosIllustration} alt="" />
          </div>
          <div className="videos-category-div category-div">
            <div className="category-illustration-filter" onClick={() => navigate("/videos")}>
              <h2>// Videos</h2>
            </div>
            <img src={videosIllustration} alt="" />
          </div>
        </div>
        <div className="partenaires-div">
          <h4>Partenaires</h4>
          <div className="partenaires-logos-div">
            {partenairesLogos.map((logo, index) => (
              <img src={logo} key={index} alt="" className="partenaires-logo" />
            ))}
          </div>
        </div>
        <div className="contact-div" id="contact">
          <h4>Contact</h4>
          <p>
            Martin MORDA-COTEL <br />
            +33 6 71 94 88 64 <br />
            Paris/Genève <br />
            sansetiquette@outlook.fr
          </p>

          <a href="https://www.instagram.com/sans_etiquette">
            <img src={InstagramIcon} alt="" className="instagram-img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
