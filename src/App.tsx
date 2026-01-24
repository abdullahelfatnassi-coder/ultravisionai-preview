import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const enterSite = () => {
    setEntered(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);

    // Real haptic vibration (mobile only)
    if ("vibrate" in navigator) {
      navigator.vibrate(25);
    }
  };

  return (
    <div className={`app ${entered ? "entered" : ""}`}>
      {!entered && (
        <div className="gate" onClick={enterSite}>
          <span className="gate-text">Tap to enter</span>
        </div>
      )}

      <main className="container">
        <section className="hero">
          <h1>Ultravision AI</h1>
          <p className="subtitle">
            Private preview of an artificial intelligence system focused on
            real‑world perception.
          </p>
        </section>

        <section className="description">
          <p>
            Ultravision AI processes live audio, visual input, and documents to
            generate structured, verifiable intelligence — designed for serious
            use, not demos.
          </p>

          <ul>
            <li>Live transcription & reasoning</li>
            <li>Image & document understanding</li>
            <li>Source‑aware intelligence</li>
          </ul>
        </section>

        <section className="access">
          {!submitted ? (
            <form
              action="https://formspree.io/f/mvzkqdna"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
              <button type="submit">Request private access</button>
              <span className="hint">
                Invite‑only preview · Limited availability
              </span>
            </form>
          ) : (
            <div className="success">
              Request received. We’ll be in touch.
            </div>
          )}
        </section>
      </main>

      <footer>
        <span>Ultravision AI — Preview</span>
        <span>Developed by Abdellah El Fatnassi</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
