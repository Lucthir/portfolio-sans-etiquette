import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import VideoProjects from "./pages/VideoProjects";
import PhotoProjects from "./pages/PhotoProjects";
import VideoProjectGallery from "./pages/VideoProjectGallery";
import PhotoProjectGallery from "./pages/PhotoProjectGallery";
import Contact from "./pages/Contact";
import MenuIcon from "./assets/icons/burger_white.png";
import Menu from "./components/Menu";
import "./App.css";
import BackButton from "./components/BackButton";
import CloseIcon from "./assets/icons/close_white.png";
import CloseIconBlack from "./assets/icons/close_black.png";
import InstagramIcon from "./assets/icons/instagram.png";
import ScrollToAnchor from "./components/ScrollToAnchor";
import AdminPage from "./pages/AdminPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="header">
        <div className="header-top-left">
          <button
            id="open-menu-btn"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <img src={!menuOpen ? MenuIcon : CloseIcon} alt="icône de menu" className="menu-icon" />
            <img src={!menuOpen ? MenuIcon : CloseIconBlack} alt="icône de menu" className="menu-icon-mobile" />
          </button>
          <BackButton></BackButton>
        </div>
        <div className="header-top-right">
          <a
            className="header-logo"
            href="/#top"
            onClick={(e) => {
              const el = document.querySelector("#top");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            MARTIN MORDA-COTEL
          </a>
          <a href="https://www.instagram.com/sans_etiquette" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="icône Instagram" className="instagram-img" />
          </a>
        </div>
      </div>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoProjects />} />
        <Route path="/photos" element={<PhotoProjects />} />
        <Route path="/videos/:slug" element={<VideoProjectGallery />}></Route>
        <Route path="/photos/:slug" element={<PhotoProjectGallery />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
