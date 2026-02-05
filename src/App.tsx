import "./App.css";

export default function App() {
  return (
    <div className="app fade-in">
      <div className="lock">
        <span>PRIVATE SYSTEM</span>
      </div>

      <section className="hero">
        <h1>Ultravision AI</h1>
        <p>
          A private intelligence system designed for perception, contextual
          awareness, and real‑world understanding.
        </p>

        <ul className="features">
          <li>Real‑time perception engine</li>
          <li>Contextual reasoning core</li>
          <li>Private, offline‑first intelligence</li>
          <li>Vision‑centric system design</li>
        </ul>

        <form className="access">
          <input type="email" placeholder="Enter email for early access" />
          <button type="submit">Request Access</button>
        </form>
      </section>
    </div>
  );
}
