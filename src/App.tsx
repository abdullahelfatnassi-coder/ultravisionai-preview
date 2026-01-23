import './App.css'

export default function App() {
  return (
    <div className="page">
      <div className="grain" />

      <main className="container">
        <span className="badge">COMING SOON · PREVIEW</span>

        <h1 className="title">UltraVision AI</h1>

        <p className="subtitle">
          A preview of an upcoming artificial intelligence system currently in development.
          This experience represents vision and direction — not the final product.
        </p>

        <p className="meta">
          Invite‑only preview · Limited access
        </p>

        <div className="actions">
          <button className="primary">Join Private Preview</button>
          <button className="secondary">View Preview</button>
        </div>

        <footer className="footer">
          Developed by Abdellah El Fatnassi · Preview build — system not yet publicly available
        </footer>
      </main>
    </div>
  )
}
