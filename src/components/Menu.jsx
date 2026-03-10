import "./Menu.css";
import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-div ${isOpen ? "menu-open" : ""}`}>
      <div className="menu-content">
        <Link to="/" className="menu-btn" onClick={onClose}>
          ACCUEIL
        </Link>
        <Link to="/videos" className="menu-btn" onClick={onClose}>
          PROJETS VIDEO
        </Link>
        <Link to="/photos" className="menu-btn" onClick={onClose}>
          PROJETS PHOTO
        </Link>
      </div>
    </div>
  );
}

export default Menu;
