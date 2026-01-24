import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [boot, setBoot] = useState(true);
  const [entered, setEntered] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 4200);
    return () => clearTimeout(t);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    if (navigator.vibrate) navigator.vibrate(30);

    await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className={`system ${entered ? "entered" : ""}`}>
      {boot && (
        <div className="boot">
          <div className="scan" />
          <div className="logs">
            <div>INITIALIZING ULTRAVISION CORE</div>
            <div>LINKING PERCEPTION LAYERS</div>
            <div>CALIBRATING REALITY SIGNALS</div>
            <div>SYSTEM READY</div>
          </div>
        </div>
      )}

      {!boot && !entered && (
        <div className="enter" onClick={() => setEntered(true)}>
          <div className="enter-inner">
            <span>ULTRAVISION AI</span>
            <p>Tap anywhere to interface</p>
          </div>
        </div>
      )}

      {!boot && entered && (
        <main className="stage">
          <section className="hero">
            <h1>Ultravision AI</h1>
            <p>
              A private intelligence system built to observe, interpret, and
              reason across reality itself.
            </p>
          </section>

          <section className="gate">
            {!sent ? (
              <form onSubmit={submit}>
                <input
                  type="email"
                  placeholder="Enter secure channel"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Request Interface</button>
              </form>
            ) : (
              <div className="confirmed">REQUEST TRANSMITTED</div>
            )}
          </section>

          <section className="grid">
            <div>
              <h3>Live Perception</h3>
              <p>
                Processes audio, images, documents, and environments in real
                time.
              </p>
            </div>
            <div>
              <h3>Grounded Reasoning</h3>
              <p>
                Responses are anchored to verifiable signals — not assumptions.
              </p>
            </div>
            <div>
              <h3>System Design</h3>
              <p>
                Built as infrastructure. Not a chatbot. Not a toy.
              </p>
            </div>
          </section>

          <footer>
            <span>Developed by Abdellah El Fatnassi</span>
            <span className="legal">
              Ultravision AI · Private Preview · All rights reserved
            </span>
          </footer>
        </main>
      )}
    </div>
  );
}
