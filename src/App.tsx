import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 400);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <main className="container">
        <section className="hero">
          <h1>Ultravision AI</h1>
          <p className="subtitle">
            A private preview of an artificial intelligence system focused on
            real‑world understanding.
          </p>
        </section>

        <section className="description">
          <p>
            Ultravision AI is designed to interpret live input — audio, images,
            documents, and context — and transform it into structured,
            verifiable intelligence.
          </p>

          <ul>
            <li>Live transcription and reasoning</li>
            <li>Visual and document analysis</li>
            <li>Source‑aware outputs</li>
          </ul>
        </section>

        <section className="access">
          {!submitted ? (
            <form
              action="https://formspree.io/f/mvzkqdna"
              method="POST"
              onSubmit={() => setSubmitted(true)}
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
