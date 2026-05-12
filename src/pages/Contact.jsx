import "./Contact.css";
import { AWS_CONFIG } from "../config/aws";
import ContactForm from "./../components/ContactForm";
import InstagramIcon from "./../assets/icons/instagram.png";
import LinkedinIcon from "./../assets/icons/linkedin.png";
import { Helmet } from "react-helmet-async";

function Contact() {
  const contactBanner = `${AWS_CONFIG.CDN_URL}/static/contact/contact.webp`;

  return (
    <>
      <Helmet>
        <title>Contact — Sans Étiquette</title>
        <meta name="description" content="Contactez Martin Morda-Cotel, photographe et vidéaste à Paris et Genève." />
        <meta property="og:title" content="Contact — Sans Étiquette" />
        <meta property="og:description" content="Contactez Martin Morda-Cotel, photographe et vidéaste à Paris et Genève." />
      </Helmet>
      <div className="contact-main-div">
        <div className="contact-banner-div">
          <img src={contactBanner} alt="Photographie d'illustration" className="contact-banner-img" />
          <h1 className="contact-banner-title">Contactez-moi</h1>
        </div>
        <div className="contact-form-div">
          <h2 className="contact-form-title">Ecrivez-moi</h2>
          <ContactForm></ContactForm>
        </div>
        <hr className="contact-footer-top-hr" />
        <div className="contact-footer-div">
          <div className="contact-footer-left">
            <h3>Contact</h3>
            <address>
              <a href="mailto:sansetiquette@outlook.fr">sansetiquette@outlook.fr</a>
              <a href="tel:+33671948864">+33 6 71 94 88 64</a>
            </address>
          </div>
          <div className="contact-footer-right">
            <h3>Reseaux</h3>
            <div className="reseaux-icons">
              <a href="https://www.instagram.com/sans_etiquette" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="icône Instagram" className="instagram-img" />
              </a>
              <a href="https://www.linkedin.com/in/sa-mmc6" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="icône Linkedin" className="linkedin-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
