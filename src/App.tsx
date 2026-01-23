import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Enter a valid email address.");
      return;
    }

    const res = await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) setSent(true);
    else setError("Something went wrong. Try again.");
  };

  return (
    <div className="app">
      {!introDone && (
        <div className="intro">
          <div className="intro-title">ULTRAVISION AI</div>
          <div className="intro-sub">INITIALIZING PREVIEW</div>
        </div>
      )}

      {introDone && (
        <main className="content">
          <h1>Ultravision AI</h1>
          <p className="tagline">
            A preview of an artificial intelligence system currently in
            development.
          </p>

          <p className="description">
            Ultravision explores real‑time perception — understanding voice,
            vision, and context together. This preview represents direction,
            not the final product.
          </p>

          {!sent ? (
            <form onSubmit={submit} className="form">
              <input
                type="email"
                placeholder="Request private preview"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Request Access</button>
              {error && <span className="error">{error}</span>}
            </form>
          ) : (
            <div className="success">
              Access request received.
              <span>We’ll be in touch.</span>
            </div>
          )}

          <footer>
            Invite‑only preview · Limited access  
            <br />
            <span>Developer: Abdellah El Fatnassi</span>
          </footer>
        </main>
      )}
    </div>
  );
}
