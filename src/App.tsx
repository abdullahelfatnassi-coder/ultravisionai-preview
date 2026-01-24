import { useState } from "react";
import "./App.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const unlock = () => {
    setUnlocked(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if ("vibrate" in navigator) navigator.vibrate(20);
  };

  return (
    <div className={`app ${unlocked ? "unlocked" : ""}`}>
      {!unlocked && (
        <div className="lock">
          <div className="lock-inner" onMouseDown={unlock} onTouchStart={unlock}>
            <span className="lock-label">PRESS AND HOLD</span>
            <span className="lock-title">ULTRAVISION AI</span>
          </div>
        </div>
      )}

      <main className="stage">
        <section className="hero">
          <h1>Ultravision AI</h1>
          <p>
            A private artificial intelligence system designed to observe,
            interpret, and reason across real‑world input.
          </p>
        </section>

        <section className="capabilities">
          <div>Live audio cognition</div>
          <div>Visual scene analysis</div>
          <div>Document intelligence</div>
          <div>Source‑grounded reasoning</div>
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
                placeholder="Request access"
                required
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="confirmed">
              Access request registered.
            </div>
          )}
        </section>
      </main>

      <footer>
        <span>Ultravision AI · Restricted Preview</span>
        <span>Developed by Abdellah El Fatnassi</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
