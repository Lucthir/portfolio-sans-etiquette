import { useNavigate, useLocation } from "react-router-dom";
import "./BackButton.css";
import ArrowBackIcon from "./../assets/icons/arrow_back.png";

export default function BackButton({ to, children = "Retour" }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button className="header-back-button" onClick={handleBack}>
      <img src={ArrowBackIcon} alt="" />
    </button>
  );
}
