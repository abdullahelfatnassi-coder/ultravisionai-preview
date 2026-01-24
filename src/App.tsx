import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) return;

    setSubmitted(true);

    // subtle haptic (mobile safe)
    if (navigator.vibrate) navigator.vibrate(20);

    await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="system">
      {!entered && (
        <div className="entry" onClick={() => setEntered(true)}>
          <div className="entry-inner">
            <span className="small">ULTRAVISION-AI</span>
            <h1>Tap to enter</h1>
          </div>
        </div>
      )}

      {entered && (
        <main className="stage">
          <section className="hero">
            <span className="label">COMING SOON · PREVIEW</span>
            <h1>Ultravision AI</h1>
            <p>
              A private preview of an advanced artificial intelligence system
              focused on perception, reasoning, and real‑world understanding.
            </p>
          </section>

          <section className="gate">
            {!submitted ? (
              <form onSubmit={submitEmail}>
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
              <div className="success">
                <span>ACCESS REQUESTED</span>
              </div>
            )}
          </section>

          <section className="info">
            <div>
              <h3>What it does</h3>
              <p>
                Ultravision-AI is designed to understand live environments —
                analyzing audio, images, documents, and context to deliver
                grounded intelligence using real sources.
              </p>
            </div>

            <div>
              <h3>How it works</h3>
              <p>
                Multimodal perception pipelines combined with verified retrieval
                systems enable accurate, explainable outputs in real time.
              </p>
            </div>

            <div>
              <h3>Roadmap</h3>
              <p>
                Private preview → limited release → developer access →
                full system deployment.
              </p>
            </div>
          </section>

          <footer>
            <span>
              Developed by Abdellah El Fatnassi · Ultravision-AI
            </span>
            <span className="legal">
              Preview only · Not a public product · All rights reserved
            </span>
          </footer>
        </main>
      )}
    </div>
  );
}
