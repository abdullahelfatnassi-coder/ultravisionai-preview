function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0b0b0f",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "720px", padding: "24px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          UltraVision AI
        </h1>

        <p style={{ fontSize: "1.2rem", opacity: 0.85 }}>
          Next‑generation AI vision technology
        </p>

        <h2
          style={{
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "0.15em",
            fontSize: "1.2rem",
            opacity: 0.9,
          }}
        >
          COMING SOON
        </h2>

        <p style={{ lineHeight: 1.6, opacity: 0.75 }}>
          UltraVision AI is currently in private development.
          <br />
          This is an early preview of the brand and concept.
        </p>

        <p style={{ marginTop: "3rem", opacity: 0.6 }}>
          Built by Abdellah El Fatnassi
        </p>

        <p style={{ marginTop: "1.5rem", opacity: 0.85 }}>
          Early access opening soon
        </p>
      </div>
    </div>
  );
}

export default App;
