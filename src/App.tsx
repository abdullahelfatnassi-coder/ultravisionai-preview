import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // intro timing
    const t = setTimeout(() => setIntroDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // subtle parallax
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      document.documentElement.style.setProperty("--px", `${x}px`);
      document.documentElement.style.setProperty("--py", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    const res = await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      if (navigator.vibrate) navigator.vibrate(20);
      setSent(true);
    } else {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="app">
      {!introDone && (
        <div className="intro">
          <div className="intro-logo">ULTRAVISION AI</div>
          <div className="intro-sub">INITIALIZING PREVIEW</div>
        </div>
      )}

      {introDone && (
        <main className="content">
          <p className="eyebrow">COMING SOON · PREVIEW</p>

          <h1 className="title reveal">Ultravision AI</h1>

          <p className="description">
            A preview of an artificial intelligence system currently in
            development. This experience represents vision and direction — not
            the final product.
          </p>

          {!sent ? (
            <form className="form" onSubmit={submit}>
              <input
                type="email"
                placeholder="Request private access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Request</button>
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
            Developer: Abdellah El Fatnassi
          </footer>
        </main>
      )}
    </div>
  );
}
