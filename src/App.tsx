import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const enterSystem = () => {
    setEntered(true);
    setTimeout(() => {
      emailRef.current?.focus();
    }, 600);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Haptic feedback (Apple‑safe)
    if (navigator.vibrate) navigator.vibrate(30);
  };

  return (
    <div className="system">
      {!entered && (
        <div className="gate" onClick={enterSystem}>
          <div className="gate-inner">
            <span className="gate-hint">Tap to enter</span>
            <h1 className="gate-title">ULTRAVISION AI</h1>
            <span className="gate-sub">Preview Interface</span>
          </div>
        </div>
      )}

      {entered && (
        <main className="stage">
          <section className="intro">
            <h2 className="intro-line">COMING SOON · PREVIEW</h2>
            <h1 className="intro-title">Ultravision AI</h1>
            <p className="intro-text">
              A next‑generation artificial intelligence system designed for
              perception, reasoning, and real‑time analysis.
            </p>
            <p className="intro-text muted">
              This preview represents direction and capability — not the final
              product.
            </p>
          </section>

          {!submitted && (
            <form
              className="access"
              action="https://formspree.io/f/mvzkqdna"
              method="POST"
              onSubmit={submitForm}
            >
              <label>Request private access</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="you@domain.com"
                required
              />
              <button type="submit">Request Access</button>
            </form>
          )}

          {submitted && (
            <div className="success">
              <span className="signal">ACCESS REQUESTED</span>
              <p>
                Your request has been received.
                <br />
                You will be contacted if approved.
              </p>
            </div>
          )}

          <footer className="footer">
            <span>© Ultravision AI</span>
            <span>Developer: Abdellah El Fatnassi</span>
          </footer>
        </main>
      )}
    </div>
  );
}
