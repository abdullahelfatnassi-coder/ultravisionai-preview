import { useState } from "react";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mvzkqdna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);

        // 📳 VIBRATION (mobile only, supported browsers)
        if (navigator.vibrate) {
          navigator.vibrate(40);
        }
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    }

    setLoading(false);
  }

  return (
    <div className="page">
      <div className={`card ${submitted ? "success" : ""}`}>
        {!submitted ? (
          <>
            <h1>UltraVision AI</h1>
            <p className="subtitle">
              Invite‑only preview · Limited access
            </p>

            <form onSubmit={handleSubmit} className="emailForm">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Request Access"}
              </button>
            </form>

            {error && <p className="error">{error}</p>}
          </>
        ) : (
          <div className="thankYou">
            <h2>✓ Request Sent</h2>
            <p>Thank you. We’ll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
