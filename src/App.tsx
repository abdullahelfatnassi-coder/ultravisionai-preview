import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [phase, setPhase] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timings = [1200, 2800, 4400, 6200];
    const timers = timings.map((t, i) =>
      setTimeout(() => setPhase(i + 1), t)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      if (navigator.vibrate) navigator.vibrate(20);
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <main className="scene">
      <div className="grain" />

      <div className="content">
        {phase >= 1 && (
          <p className="line fade">
            We taught machines to listen.
          </p>
        )}

        {phase >= 2 && (
          <p className="line fade">
            Then we taught them to see.
          </p>
        )}

        {phase >= 3 && (
          <p className="line fade dim">
            What followed was not planned.
          </p>
        )}

        {phase >= 4 && (
          <>
            <h1 className="title">Ultravision AI</h1>

            <p className="subtitle">
              A private preview of an artificial intelligence system
              designed to understand the world through vision, sound,
              and real‑world context.
            </p>

            <div className="signals">
              <span>Live audio → structured intelligence</span>
              <span>Image & scene understanding</span>
              <span>Grounded in verifiable sources</span>
            </div>

            {!submitted ? (
              <form
                className="emailForm"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mvzkqdna"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Request private access"
                />
                <button type="submit">Transmit</button>
              </form>
            ) : (
              <p className="success">
                Access request received.
              </p>
            )}

            <footer>
              Preview experience · Invite only<br />
              Developed by Abdellah El Fatnassi
            </footer>
          </>
        )}
      </div>
    </main>
  );
}
