import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [invite, setInvite] = useState("");
  const [inviteOK, setInviteOK] = useState(false);

  useEffect(() => {
    setTimeout(() => setIntro(false), 2600);
  }, []);

  function haptic() {
    if (navigator.vibrate) navigator.vibrate(12);
  }

  function handleInvite() {
    if (invite.trim().length >= 6) {
      setInviteOK(true);
      haptic();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    haptic();
    confetti();
  }

  function confetti() {
    const c = document.createElement("div");
    c.className = "confetti";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1400);
  }

  return (
    <div className="root">
      {intro && (
        <div className="intro">
          <h1>Welcome to Ultravision AI</h1>
        </div>
      )}

      {!intro && (
        <main className="hero">
          <span className="typing">COMING SOON · PREVIEW</span>

          <h1>Ultravision AI</h1>

          <p>
            A preview of an upcoming artificial intelligence system currently in
            development. This experience represents vision and direction — not
            the final product.
          </p>

          {!inviteOK ? (
            <div className="inviteGate">
              <input
                placeholder="Invite code"
                value={invite}
                onChange={(e) => setInvite(e.target.value)}
              />
              <button onClick={handleInvite}>Unlock Preview</button>
            </div>
          ) : (
            <>
              <button className="cta" onClick={() => setShowForm(true)}>
                Join Private Preview
              </button>

              <form
                className={`emailForm ${showForm ? "show" : ""}`}
                onSubmit={handleSubmit}
              >
                {!submitted ? (
                  <>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                    <button type="submit">Request Access</button>
                  </>
                ) : (
                  <div className="success">
                    Thank you — your request has been sent
                  </div>
                )}
              </form>
            </>
          )}
        </main>
      )}
    </div>
  );
}
