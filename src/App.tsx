import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 2600);
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
        <div className="intro">
          <h1>Welcome to Ultravision AI</h1>
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
            real‑world sources. Rather than producing noise, Ultravision AI is
            built around clarity, structure, and trust.
            <br /><br />
            This experience represents direction and capability — not a finished
            product. <strong>Invite‑only access is intentionally limited.</strong>
          </p>

          <div className="capabilities">
            <span>• Live audio recording → structured notes & summaries</span>
            <span>• Photo and visual scene analysis with contextual understanding</span>
            <span>• Cross‑referenced intelligence from trusted real‑world sources</span>
            <span>• Privacy‑first design with human‑readable reasoning</span>
          </div>

          <form className="emailForm" onSubmit={handleSubmit}>
            {/* Honeypot field */}
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

          <p className="micro">
            Built to augment human perception — not replace it.
          </p>

          <footer className="footer">
            Developed by <strong>Abdellah El Fatnassi</strong>
          </footer>
        </main>
      )}
    </div>
  );
}
