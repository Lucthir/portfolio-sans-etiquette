import { AWS_CONFIG } from "../config/aws";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./../components/Carousel/Carousel";
import { Helmet } from "react-helmet-async";

function Home() {
  const photosIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/categorie_photo.jpg`;
  const videosIllustration = `${AWS_CONFIG.CDN_URL}/static/home/categories/screenshot_HM.jpg`;
  const bioPhotography = `${AWS_CONFIG.CDN_URL}/static/home/DSC_2913_(profil).webp`;
  const partenairesLogos = [
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/CNP.png`, name: "CNP Assurances" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/Credit-Agricole.png`, name: "Crédit Agricole" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/Dakar.png`, name: "Rallye Dakar" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/Lions Festival.png`, name: "Lions Festival" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/loreal.png`, name: "L'Oréal" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/Qonto.png`, name: "Qonto" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/Renault.png`, name: "Renault" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/videlio.png`, name: "Videlio" },
    { src: `${AWS_CONFIG.CDN_URL}/static/logos/WEF.png`, name: "World Economic Forum" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Sans Étiquette — Photographe & Vidéaste à Paris et Genève</title>
        <meta name="description" content="Martin Morda-Cotel, photographe et vidéaste en France et en Suisse. Streaming, captation événementielle, photo et vidéo pour vos projets." />
        <meta property="og:title" content="Sans Étiquette — Photographe & Vidéaste à Paris et Genève" />
        <meta property="og:description" content="Martin Morda-Cotel, photographe et vidéaste en France et en Suisse. Streaming, captation événementielle, photo et vidéo pour vos projets." />
        <meta property="og:url" content="https://www.sansetiquette-studio.fr/" />
      </Helmet>
      <div className="home-main-div" id="top">
        <div className="home-content-div">
          <div className="hero-div">
            <div className="hero-title-div">
              <h1>
                <span className="hero-title-main">SANS ÉTIQUETTE</span>
                <span className="hero-title-sub">Photographe & Vidéaste</span>
              </h1>
            </div>
            <div className="hero-content-div">
              <img src={bioPhotography} alt="Photographie de Martin" className="hero-img" />
              <p className="hero-description">
                Après cinq années à mettre mon expertise technique au service de la réalisation de streaming en direct pour des clients prestigieux tels que L’Oréal, Crédit Agricole et le World
                Economic Forum, je vous propose désormais des solutions de communication clé en main pour vos événements. <br />
                <br /> De la prise de vue photo et vidéo à la captation sonore, je m’adapte à vos exigences et vous accompagne à chaque étape de votre projet. <br />
                <br /> Conseil, gestion de projet, expertise technique et suivi global : je mets tout en œuvre pour garantir la réussite de vos contenus.
              </p>
            </div>
          </div>
          <div className="caroussel-div">
            <Carousel></Carousel>
          </div>
          <div className="categories-div">
            <div className="photos-category-div category-div">
              <div className="category-illustration-filter" onClick={() => navigate("/photos")}>
                <h2>Photos</h2>
              </div>
              <img src={photosIllustration} alt="Peintre devant une fresque murale" />
            </div>
            <div className="videos-category-div category-div">
              <div className="category-illustration-filter" onClick={() => navigate("/videos")}>
                <h2>Videos</h2>
              </div>
              <img src={videosIllustration} alt="Homme assis sur un canapé" />
            </div>
          </div>
          <div className="partenaires-div">
            <h3>Partenaires</h3>
            <div className="partenaires-logos-div">
              {partenairesLogos.map((logo, index) => (
                <img src={logo.src} key={index} alt={`Logo ${logo.name}`} className="partenaires-logo" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
