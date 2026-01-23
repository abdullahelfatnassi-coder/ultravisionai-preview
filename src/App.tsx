import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Intro duration
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 2800);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className="appRoot">
      {showIntro && (
        <div className="introScreen">
          <h1>Welcome to Ultravision AI</h1>
        </div>
      )}

      {showContent && (
        <main className="mainContent">
          <span className="previewBadge">COMING SOON · PREVIEW</span>

          <h1 className="title">Ultravision AI</h1>

          <p className="subtitle">
            A preview of an upcoming artificial intelligence system currently in
            development. This experience represents vision and direction — not
            the final product.
          </p>

          <p className="meta">
            Invite‑only preview · Limited access
          </p>

          <button className="cta">
            Join Private Preview
          </button>
        </main>
      )}
    </div>
  );
}

export default App;
