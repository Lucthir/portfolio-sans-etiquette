import "./Menu.css";
import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-div ${isOpen ? "menu-open" : ""}`}>
      <div className="menu-content">
        <Link to="/" className="menu-btn" onClick={onClose}>
          ACCUEIL
        </Link>
        <Link to="/photos" className="menu-btn" onClick={onClose}>
          PROJETS PHOTO
        </Link>
        <Link to="/videos" className="menu-btn" onClick={onClose}>
          PROJETS VIDEO
        </Link>
        {/* <Link to="/#contact" className="menu-btn" onClick={onClose}>
          CONTACT
        </Link> */}
        <a
          className="menu-btn"
          href="/#contact"
          onClick={(e) => {
            const el = document.querySelector("#contact");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
            onClose();
          }}>
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Menu;
