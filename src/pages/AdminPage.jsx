import { useState, useEffect } from "react";
import { listS3Files, listS3Folders } from "../config/aws";
import "./AdminPage.css";

const ADMIN_PASSWORD = "martin2026";

function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [type, setType] = useState("photos");
  const [slug, setSlug] = useState("");
  const [slugList, setSlugList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [loadingThumbnails, setLoadingThumbnails] = useState(false);
  const [success, setSuccess] = useState(false);

  // Charge les slugs existants quand on change de type
  useEffect(() => {
    setSlug("");
    setSlugList([]);
    listS3Folders(`gallery/${type}/`).then(setSlugList);
  }, [type]);

  // Charge les thumbnails quand on change de slug
  useEffect(() => {
    if (!slug) {
      setThumbnails([]);
      setCover("");
      return;
    }
    setLoadingThumbnails(true);
    setCover("");
    listS3Files(`gallery/${type}/${slug}/thumbnails`).then((files) => {
      // On garde uniquement le nom du fichier
      const names = files.map((url) => url.split("/").pop());
      setThumbnails(names);
      setLoadingThumbnails(false);
    });
  }, [slug, type]);

  function handlePasswordSubmit() {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function handleGenerate() {
    const meta = { title, description, cover };
    const blob = new Blob([JSON.stringify(meta, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "metadata.json";
    a.click();
    URL.revokeObjectURL(url);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  const canGenerate = title && description && cover && slug;

  if (!authenticated) {
    return (
      <div className="admin-auth-div">
        <div className="admin-auth-box">
          <h2>ADMIN</h2>
          <p>Entrez le mot de passe pour accéder à l'outil.</p>
          <input
            type="password"
            placeholder="Mot de passe"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
            className={passwordError ? "input-error" : ""}
          />
          {passwordError && <span className="error-msg">Mot de passe incorrect.</span>}
          <button onClick={handlePasswordSubmit}>Entrer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-main-div">
      <div className="admin-content-div">
        <h2>Générer un metadata.json</h2>
        <p className="admin-subtitle">Remplissez les champs ci-dessous, puis téléchargez le fichier et uploadez-le dans le dossier S3 du projet correspondant.</p>

        <div className="admin-form">
          <div className="admin-field">
            <label>Type de projet</label>
            <div className="admin-toggle">
              <button className={type === "photos" ? "toggle-active" : ""} onClick={() => setType("photos")}>
                Photos
              </button>
              <button className={type === "videos" ? "toggle-active" : ""} onClick={() => setType("videos")}>
                Vidéos
              </button>
            </div>
          </div>

          <div className="admin-field">
            <label>Projet (slug)</label>
            <select value={slug} onChange={(e) => setSlug(e.target.value)}>
              <option value="">— Sélectionner un projet —</option>
              {slugList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label>Titre</label>
            <input type="text" placeholder="Ex: Vietnam 2023" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="admin-field">
            <label>Description</label>
            <textarea placeholder="Ex: Reportage photo réalisé au Vietnam..." value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
          </div>

          <div className="admin-field">
            <label>Image de couverture</label>
            {!slug ? (
              <p className="admin-hint">Sélectionnez d'abord un projet.</p>
            ) : loadingThumbnails ? (
              <p className="admin-hint">Chargement des images...</p>
            ) : thumbnails.length === 0 ? (
              <p className="admin-hint">Aucun thumbnail trouvé dans ce dossier.</p>
            ) : (
              <select value={cover} onChange={(e) => setCover(e.target.value)}>
                <option value="">— Choisir une image —</option>
                {thumbnails.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {cover && slug && (
            <div className="admin-preview">
              <p className="admin-hint">Aperçu de la couverture :</p>
              <img src={`${process.env.REACT_APP_CDN_URL}/gallery/${type}/${slug}/thumbnails/${cover}`} alt="cover preview" />
            </div>
          )}

          <div className="admin-json-preview">
            <label>Aperçu du fichier</label>
            <pre>{JSON.stringify({ title: title || "...", description: description || "...", cover: cover || "..." }, null, 2)}</pre>
          </div>

          <button className="admin-generate-btn" onClick={handleGenerate} disabled={!canGenerate}>
            {success ? "✓ Téléchargé !" : "Télécharger metadata.json"}
          </button>

          {success && (
            <p className="admin-hint">
              Uploadez ce fichier dans{" "}
              <code>
                gallery/{type}/{slug}/metadata.json
              </code>{" "}
              sur S3.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
