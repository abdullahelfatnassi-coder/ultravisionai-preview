function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#0a0a0d",
        color: "#eaeaea",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          padding: "64px 32px",
          textAlign: "left",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: "24px",
          }}
        >
          COMING SOON · PREVIEW
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Ultravision AI
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            maxWidth: "720px",
            opacity: 0.85,
            marginBottom: "40px",
          }}
        >
          A preview of an upcoming artificial intelligence system currently in
          development. This experience represents vision and direction — not the
          final product.
        </p>

        {/* Meta */}
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.6,
            marginBottom: "48px",
          }}
        >
          Invite‑only preview · Limited access
        </p>

        {/* Actions */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "64px" }}>
          <button
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              padding: "14px 28px",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Join Private Preview
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "14px 28px",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            View Preview
          </button>
        </div>

        {/* Footer */}
        <footer
          style={{
            fontSize: "0.75rem",
            opacity: 0.45,
            letterSpacing: "0.04em",
          }}
        >
          Developed by Abdellah El Fatnassi · Preview build — system not yet
          publicly available
        </footer>
      </section>
    </main>
  );
}

export default App;
