import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="grain" />

      <main className="container">
        {/* Logo / Wordmark */}
        <div className="logo">
          <span className="logoMark">◉</span>
          <span className="logoText">UltraVision AI</span>
        </div>

        <span className="badge">COMING SOON · PREVIEW</span>

        <h1 className="title">UltraVision AI</h1>

        <p className="subtitle">
          A preview of an upcoming artificial intelligence system currently in
          development. This experience represents vision and direction — not the
          final product.
        </p>

        <p className="meta">Invite‑only preview · Limited access</p>

        {/* Email capture */}
        <form className="emailForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email for early access"
            className="emailInput"
            required
          />
          <button className="primary emailButton" type="submit">
            Request Access
          </button>
        </form>

        <p className="emailNote">No spam. Early access invitations only.</p>

        <footer className="footer">
          Developed by Abdellah El Fatnassi · Preview build — system not yet
          publicly available
        </footer>
      </main>
    </div>
  );
}
