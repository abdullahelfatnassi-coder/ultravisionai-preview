import './index.css'

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>UltraVision AI</h1>

        <p style={styles.subtitle}>
          Next‑generation AI vision technology
        </p>

        <div style={styles.badge}>COMING SOON</div>

        <p style={styles.description}>
          UltraVision AI is currently in private development.
          This is an early preview of the brand and concept.
        </p>

        <p style={styles.note}>
          Built by Abdellah El Fatnassi
        </p>

        <button style={styles.button} disabled>
          Early access opening soon
        </button>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '48px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '12px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.85,
    marginBottom: '24px',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    marginBottom: '24px',
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    opacity: 0.9,
    marginBottom: '24px',
  },
  note: {
    fontSize: '0.8rem',
    opacity: 0.6,
    marginBottom: '32px',
  },
  button: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    background: '#ffffff',
    color: '#000000',
    fontWeight: 600,
    cursor: 'not-allowed',
    opacity: 0.8,
  },
}

export default App
