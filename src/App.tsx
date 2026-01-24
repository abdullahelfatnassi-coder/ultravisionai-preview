import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
  }, []);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    const res = await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      if (navigator.vibrate) navigator.vibrate(20);
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      {/* INTRO */}
      <section className="intro">
        <h1>Ultravision AI</h1>
        <p>Preview</p>
      </section>

      {/* MAIN */}
      <main className="content">
        <h2>Coming Soon</h2>

        <p className="description">
          Ultravision AI is an upcoming artificial intelligence system focused on
          real‑time understanding — from live audio and visual inputs to
          contextual reasoning grounded in verified sources.
        </p>

        <p className="description">
          This preview represents vision and direction, not the final product.
          Access is limited while core systems are still under development.
        </p>

        {!submitted ? (
          <form className="emailForm" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email for private preview"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={!isValidEmail(email)}>
              Request Access
            </button>
          </form>
        ) : (
          <div className="success">
            Thank you. Your request has been received.
          </div>
        )}

        <footer>
          <span>Invite‑only · Limited access</span>
          <span>Developed by Abdellah El Fatnassi</span>
        </footer>
      </main>
    </div>
  );
}
