import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [bootDone, setBootDone] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const bootLogs = [
    "INITIALIZING ULTRAVISION CORE",
    "LINKING PERCEPTION MODULES",
    "SYNCING REAL‑WORLD SIGNALS",
    "SYSTEM STATUS: ONLINE",
  ];

  useEffect(() => {
    if (step < bootLogs.length) {
      const t = setTimeout(() => setStep(step + 1), 900);
      return () => clearTimeout(t);
    } else {
      const done = setTimeout(() => setBootDone(true), 1200);
      return () => clearTimeout(done);
    }
  }, [step]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (navigator.vibrate) navigator.vibrate(25);

    await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="system">
      {!bootDone && (
        <div className="boot">
          <div className="scan" />
          <div className="logs">
            {bootLogs.slice(0, step).map((l, i) => (
              <div key={i} className="log">
                {l}
              </div>
            ))}
          </div>
        </div>
      )}

      {bootDone && (
        <main className="stage">
          <section className="hero">
            <span className="flag">PRIVATE PREVIEW</span>
            <h1>Ultravision AI</h1>
            <p>
              A private artificial intelligence system designed to perceive
              reality.
            </p>
          </section>

          <section className="gate">
            {!submitted ? (
              <form onSubmit={submit}>
                <input
                  type="email"
                  placeholder="Request private access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Request Access</button>
              </form>
            ) : (
              <div className="confirmed">Thank you for your request you will be contacted Soon</div>
            )}
          </section>

          <section className="grid">
            <div>
              <h3>Perception</h3>
              <p>
                Understands live audio, imagery, documents, and environments in
                real time.
              </p>
            </div>
            <div>
              <h3>Grounding</h3>
              <p>
                Outputs are tied to verifiable sources — not hallucinated
                responses.
              </p>
            </div>
            <div>
              <h3>Direction</h3>
              <p>
                Built as infrastructure — not a chatbot, not a demo.
              </p>
            </div>
          </section>

          <footer>
            <span>Developed by Abdellah El Fatnassi</span>
            <span className="legal">
              Ultravision AI · Invite‑only preview · All rights reserved
            </span>
          </footer>
        </main>
      )}
    </div>
  );
}
