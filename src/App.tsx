import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIntro(false), 2600);
  }, []);

  function haptic() {
    if ("vibrate" in navigator) navigator.vibrate(10);
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
            A preview of an upcoming artificial intelligence system currently in
            development. This experience represents vision and direction — not
            the final product.
            <br />
            <strong>Invite‑only preview · Limited access</strong>
          </p>

          <form className="emailForm" onSubmit={handleSubmit}>
            {/* Honeypot (hidden spam trap) */}
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
                  placeholder="Enter your email"
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Join Private Preview"}
                </button>
              </>
            ) : (
              <div className="success">
            Thank you for requesting access to Ultravision AI.
This preview represents an early look at a system currently in development.
If selected, you’ll receive a private invitation.

— Ultravision AI
              </div>
            )}
          </form>
        </main>
      )}
    </div>
  );
}
