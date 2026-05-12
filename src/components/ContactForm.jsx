import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-main">
      <input type="text" name="from_name" placeholder="Votre nom" required className="form-input name" />
      <input type="email" name="from_email" placeholder="Votre email" required className="form-input email" />
      <input type="text" name="subject" placeholder="Objet" required className="form-input subject" />
      <textarea name="message" placeholder="Votre message" required className="form-input message" />

      <button type="submit" disabled={status === "sending"} className="form-submit-btn">
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && <p style={{ color: "white" }}>Message envoyé !</p>}
      {status === "error" && <p style={{ color: "red" }}>Une erreur est survenue, réessayez.</p>}
    </form>
  );
}

export default ContactForm;
