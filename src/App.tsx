import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  function haptic() {
    if ("vibrate" in navigator) navigator.vibrate(12);
  }

  function confetti() {
    const el = document.createElement("div");
    el.className = "confetti";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot spam protection
    if (data.get("company")) {
      setLoading(false);
      return;
    }

    const res = await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      haptic();
      confetti();
      form.reset();
    }
  }

  return (
    <div className="root">
      {intro && (
        <div className="intro cinematic">
          <h1>Ultravision AI</h1>
          <span>Perception · Intelligence · Context</span>
        </div>
      )}

      {!intro && (
        <main className="hero">
          <span className="typing">COMING SOON · PREVIEW</span>

          <h1>Ultravision AI</h1>

          <p>
            Ultravision AI is an early preview of an artificial intelligence
            system designed to understand the world as it happens — through
            vision, sound, and context.
            <br /><br />
            The system explores live recording with intelligent note creation,
            photo and scene analysis, and adaptive reasoning powered by verified,
            real‑world sources.
            <br /><br />
            This preview represents direction and capability — not a finished
            product. <strong>Invite‑only access is intentionally limited.</strong>
          </p>

          {/* HOW IT WORKS */}
          <section className="section">
            <h2>How it works</h2>
            <div className="steps">
              <span>1. Capture — audio, images, or moments in real time</span>
              <span>2. Understand — context is analyzed, not just transcribed</span>
              <span>3. Structure — insights become notes, summaries, and meaning</span>
              <span>4. Reference — information is cross‑checked with real sources</span>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className="section">
            <h2>Capabilities preview</h2>
            <div className="capabilities">
              <span>• Live audio recording → structured notes & summaries</span>
              <span>• Photo and visual scene analysis with contextual understanding</span>
              <span>• Cross‑referenced intelligence from trusted sources</span>
              <span>• Privacy‑first design with transparent reasoning</span>
            </div>
          </section>

          {/* ROADMAP */}
          <section className="section">
            <h2>Development roadmap</h2>
            <div className="roadmap">
              <span><strong>Phase 1</strong> · Core perception & capture</span>
              <span><strong>Phase 2</strong> · Cross‑modal understanding</span>
              <span><strong>Phase 3</strong> · Personal intelligence layers</span>
              <span><strong>Phase 4</strong> · Expanded real‑world integrations</span>
            </div>
          </section>

          {/* FORM */}
          <form className="emailForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="honeypot"
            />

            {!submitted ? (
              <>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email for private access"
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Request Access"}
                </button>
              </>
            ) : (
              <div className="success">
                Thank you — your request has been received.
              </div>
            )}
          </form>

          {/* LEGAL / PRIVACY */}
          <section className="legal">
            <p>
              Ultravision AI is an experimental preview. No personal data is sold
              or shared. Submissions are used solely to manage preview access and
              product updates. Features and capabilities may change as
              development progresses.
            </p>
          </section>

          <footer className="footer">
            Built to augment human perception — not replace it.
            <br />
            Developed by <strong>Abdellah El Fatnassi</strong>
          </footer>
        </main>
      )}
    </div>
  );
}
