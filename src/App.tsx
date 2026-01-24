import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      await fetch("https://formspree.io/f/mvzkqdna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSent(true);

      // Subtle haptic (mobile only, supported browsers)
      if (navigator.vibrate) navigator.vibrate(20);
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="app">
      {!introDone && (
        <div className="intro">
          <div className="intro-content">
            <h1>ULTRAVISION AI</h1>
          </div>
        </div>
      )}

      <main className={`main ${introDone ? "show" : ""}`}>
        <section className="hero">
          <h2>COMING SOON · PREVIEW</h2>
          <h1>Ultravision AI</h1>
          <p>
            A private preview of an advanced artificial intelligence system
            focused on perception, reasoning, and real‑world understanding.
          </p>
        </section>

        <section className="features">
          <div>
            <h3>Live Intelligence</h3>
            <p>Real‑time audio capture, visual analysis, and contextual memory.</p>
          </div>
          <div>
            <h3>Source‑Grounded</h3>
            <p>Information verified against real, traceable sources.</p>
          </div>
          <div>
            <h3>Privacy‑First</h3>
            <p>Invite‑only access with encrypted processing pipelines.</p>
          </div>
        </section>

        <section className="form-section">
          {!sent ? (
            <form onSubmit={submitForm}>
              <input
                type="email"
                placeholder="Request private access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Request Access</button>
              {error && <span className="error">{error}</span>}
            </form>
          ) : (
            <div className="success">
              <span>✓</span>
              <p>Request received. We’ll be in touch.</p>
            </div>
          )}
        </section>

        <footer>
          <p>
            © {new Date().getFullYear()} Ultravision AI · Preview build<br />
            Developed by <strong>Abdellah El Fatnassi</strong>
          </p>
        </footer>
      </main>
    </div>
  );
}
