import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import VideoProjects from "./pages/VideoProjects";
import PhotoProjects from "./pages/PhotoProjects";
import VideoProjectGallery from "./pages/VideoProjectGallery";
import PhotoProjectGallery from "./pages/PhotoProjectGallery";
import MenuIcon from "./assets/icons/burger-bar.png";
import Menu from "./components/Menu";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="header">
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
