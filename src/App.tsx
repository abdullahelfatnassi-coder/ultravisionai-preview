import { useEffect, useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 600);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <div className="glow" />

      <main className="hero">
        <p className="boot">Ultravision AI initializing…</p>

        <h1>Ultravision AI</h1>

        <p className="subtitle">
          A private intelligence system designed to interpret reality
          <br />
          before it is explained.
        </p>

        <form
          className="form"
          action="https://formspree.io/f/mvzkqdna"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter email for early access"
            required
          />
          <button type="submit">Request Access</button>
        </form>

        <div className="actions">
          <button className="secondary">Enable Vision Pro Mode</button>
          <span className="note">Early access · Limited</span>
        </div>
      </main>
    </div>
  );
}
