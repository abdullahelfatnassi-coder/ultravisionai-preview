import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 2600);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
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
      if ("vibrate" in navigator) navigator.vibrate(10);
      form.reset();
    }
  }

  return (
    <div className="app">
      {intro && (
        <div className="intro">
          <h1>Ultravision AI</h1>
        </div>
      )}

      {!intro && (
        <main className="hero">
          <span className="kicker">PRIVATE PREVIEW</span>

          <h1>Ultravision AI</h1>

          <p className="lead">
            An artificial intelligence system designed to understand the world
            through vision, sound, and context.
          </p>

          <div className="features">
            <span>Live audio → structured notes</span>
            <span>Visual understanding from images</span>
            <span>Intelligence grounded in real sources</span>
          </div>

          <form className="form" onSubmit={handleSubmit}>
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
                  placeholder="Request private access"
                />
                <button type="submit" disabled={loading}>
                  {loading ? "…" : "Request"}
                </button>
              </>
            ) : (
              <div className="success">Request received</div>
            )}
          </form>

          <footer>
            Ultravision AI · Preview<br />
            Developed by <strong>Abdellah El Fatnassi</strong>
          </footer>
        </main>
      )}
    </div>
  );
}
