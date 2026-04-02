import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
        }
    }, [hash]);

    return null;
}

export default ScrollToAnchor;