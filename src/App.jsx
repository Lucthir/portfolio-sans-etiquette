import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import VideoProjects from "./pages/VideoProjects";
import PhotoProjects from "./pages/PhotoProjects";
import VideoProjectGallery from "./pages/VideoProjectGallery";
import PhotoProjectGallery from "./pages/PhotoProjectGallery";
import MenuIcon from "./assets/icons/burger_white.png";
import Menu from "./components/Menu";
import { Link } from "react-router-dom";
import "./App.css";
import BackButton from "./components/BackButton";
import InstagramIcon from "./assets/icons/instagram.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="header">
        <div className="header-top">
          <button
            id="open-menu-btn"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <img src={MenuIcon} alt="" className="menu-icon" />
          </button>
          <Link to="/" className="header-logo">
            MARTIN MORDA-COTEL
          </Link>
          <a href="https://www.instagram.com/sans_etiquette">
            <img src={InstagramIcon} alt="" className="instagram-img" />
          </a>
        </div>
        <div className="header-bottom">
          <BackButton></BackButton>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoProjects />} />
        <Route path="/photos" element={<PhotoProjects />} />
        <Route path="/videos/:slug" element={<VideoProjectGallery />}></Route>
        <Route path="/photos/:slug" element={<PhotoProjectGallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
