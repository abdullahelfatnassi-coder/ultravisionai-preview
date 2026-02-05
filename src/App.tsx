import { useState } from "react";
import "./App.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && (
        <div className="lock" onClick={() => setUnlocked(true)}>
          <div className="lock-inner">
            <span className="lock-label">ULTRAVISION AI</span>
            <span className="lock-title">TAP TO CONTINUE</span>
          </div>
        </div>
      )}

      <div className={`app ${unlocked ? "unlocked" : ""}`}>
        <main className="stage">
          <section className="hero">
            <h1>Ultravision AI</h1>
            <p>
              A private intelligence system designed for perception,
              contextual awareness, and real‑world understanding.
            </p>
          </section>

          <section className="capabilities">
            <div>Real‑time perception engine</div>
            <div>Contextual reasoning core</div>
            <div>Private, offline‑first intelligence</div>
            <div>Vision‑centric system design</div>
          </section>

          <section className="access">
            <form>
              <input type="email" placeholder="Enter email for early access" />
              <button type="submit">Request Access</button>
            </form>
          </section>
        </main>

        <footer>
          <span>Ultravision AI</span>
          <span>Private System · Limited Access</span>
        </footer>
      </div>
    </>
  );
}
