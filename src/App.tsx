import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const holdTimer = useRef<number | null>(null);

  const unlock = () => {
    setUnlocked(true);
  };

  const startHold = () => {
    holdTimer.current = window.setTimeout(unlock, 900);
  };

  const cancelHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  };

  const onSubmit = () => {
    if ("vibrate" in navigator) navigator.vibrate(25);
    setTimeout(() => setConfirmed(true), 300);
  };

  useEffect(() => {
    return cancelHold;
  }, []);

  return (
    <div className={`app ${unlocked ? "active" : ""}`}>
      {!unlocked && (
        <div className="gate">
          <div
            className="hold"
            onMouseDown={startHold}
            onMouseUp={cancelHold}
            onMouseLeave={cancelHold}
            onTouchStart={startHold}
            onTouchEnd={cancelHold}
          >
            <span className="label">PRESS AND HOLD</span>
            <span className="title">ULTRAVISION AI</span>
          </div>
        </div>
      )}

      <main className="stage">
        <section className="transmission">
          <div className="line">This system observes.</div>
          <div className="line delay-1">It listens.</div>
          <div className="line delay-2">It understands context.</div>

          <p className="sub delay-3">
            Ultravision AI processes live audio, visual input, and documents into
            structured, source‑aware intelligence. This is not a demo.
          </p>

          <div className="access delay-4">
            {!confirmed ? (
              <form
                action="https://formspree.io/f/mvzkqdna"
                method="POST"
                onSubmit={onSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Request access"
                  required
                />
                <button type="submit">Transmit request</button>
              </form>
            ) : (
              <div className="confirmed">Request received.</div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <span>ULTRAVISION AI · Restricted Preview</span>
        <span>Developed by Abdellah El Fatnassi · © 2026</span>
      </footer>
    </div>
  );
}
