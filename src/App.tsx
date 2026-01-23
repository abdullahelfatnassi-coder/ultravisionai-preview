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
    if (navigator.vibrate) navigator.vibrate(10);
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
          </p>

          <form className={`emailForm ${submitted ? "done" : ""}`} onSubmit={handleSubmit}>
            {!submitted ? (
              <>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Request Access"}
                </button>
              </>
            ) : (
              <div className="success">
                Thank you — your request has been sent
              </div>
            )}
          </form>
        </main>
      )}
    </div>
  );
}
