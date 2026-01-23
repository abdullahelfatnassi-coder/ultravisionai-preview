import { useState } from "react";
import "./App.css";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      // Small vibration on supported devices (phones)
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }

      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <div className="page">
      <div className="grain" />

      <main className="container">
        <div className="logo">
          <span className="logoMark">◉</span>
          <span className="logoText">UltraVision AI</span>
        </div>

        <span className="badge">COMING SOON · PREVIEW</span>

        <h1 className="title">UltraVision AI</h1>

        <p className="subtitle">
          A preview of an upcoming artificial intelligence system currently in
          development. This experience represents vision and direction — not the
          final product.
        </p>

        <p className="meta">Invite‑only preview · Limited access</p>

        {!submitted ? (
          <form className="emailForm" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email for early access"
              className="emailInput"
              required
            />
            <button className="primary" type="submit">
              Request Access
            </button>
          </form>
        ) : (
          <p className="success">
            Thank you — your request has been sent.
          </p>
        )}

        <p className="emailNote">No spam. Early access invitations only.</p>

        <footer className="footer">
          Developed by Abdellah El Fatnassi · Preview build — system not yet
          publicly available
        </footer>
      </main>
    </div>
  );
}
