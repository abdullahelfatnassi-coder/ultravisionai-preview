export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
      }}
    >
      <section
        style={{
          maxWidth: "720px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.15)",
            marginBottom: "2.5rem",
          }}
        >
          Coming Soon · Preview
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
            textShadow:
              "0 0 40px rgba(120,120,255,0.25), 0 0 80px rgba(80,80,200,0.15)",
          }}
        >
          UltraVision AI
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
            marginBottom: "3rem",
          }}
        >
          A preview of an upcoming artificial intelligence system currently in
          development. This experience represents vision and direction — not the
          final product.
        </p>

        {/* Meta */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "3.5rem",
          }}
        >
          Invite‑only preview · Limited access
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#0b0d12",
              background:
                "linear-gradient(135deg, #9aa7ff, #6f7bff)",
              border: "none",
              cursor: "default",
              boxShadow:
                "0 10px 40px rgba(120,130,255,0.35)",
            }}
          >
            Join Private Preview
          </button>

          <button
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "default",
            }}
          >
            View Preview
          </button>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "5rem",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Developed by Abdellah El Fatnassi · Preview build — system not yet
          publicly available
        </div>
      </section>
    </main>
  );
}
