import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [boot, setBoot] = useState(true);
  const [entered, setEntered] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const camera = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 4200);
    return () => clearTimeout(t);
  }, []);

  // Vision Pro–style parallax (mouse + touch)
  useEffect(() => {
    const move = (x: number, y: number) => {
      if (!camera.current) return;
      camera.current.style.transform = `
        translate3d(${x * 14}px, ${y * 14}px, 0)
        scale(1.05)
      `;
    };

    const onMouse = (e: MouseEvent) => {
      move(
        e.clientX / window.innerWidth - 0.5,
        e.clientY / window.innerHeight - 0.5
      );
    };

    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      move(
        e.touches[0].clientX / window.innerWidth - 0.5,
        e.touches[0].clientY / window.innerHeight - 0.5
      );
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    navigator.vibrate?.(25);

    await fetch("https://formspree.io/f/mvzkqdna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className={`system ${entered ? "entered" : ""}`}>
      {boot && (
        <div className="boot">
          <div className="scan" />
          <div className="logs">
            <div>ULTRAVISION CORE ONLINE</div>
            <div>SPATIAL PERCEPTION ACTIVE</div>
            <div>REALITY LAYERS SYNCED</div>
          </div>
        </div>
      )}

      {!boot && !entered && (
        <div
          className="enter"
          onClick={() => {
            setEntered(true);
            navigator.vibrate?.(20);
          }}
        >
          <div className="enter-inner">
            <span>ULTRAVISION</span>
            <p>Touch to interface</p>
          </div>
        </div>
      )}

      {!boot && entered && (
        <div className="camera" ref={camera}>
          <main className="stage">
            <section className="hero glass">
              <h1>Ultravision AI</h1>
              <p>
                A private intelligence system designed to perceive,
                interpret, and reason across reality itself.
              </p>

              {/* EARLY ACCESS — EARLY AND SERIOUS */}
              <div className="early">
                {!sent ? (
                  <form onSubmit={submit}>
                    <input
                      type="email"
                      placeholder="Secure channel email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">Request Early Access</button>
                  </form>
                ) : (
                  <div className="confirmed">ACCESS REQUESTED</div>
                )}
              </div>
            </section>

            <section className="pillars">
              <div className="glass">
                <h3>Perception</h3>
                <p>Vision, sound, documents, environments — live.</p>
              </div>
              <div className="glass">
                <h3>Reasoning</h3>
                <p>Source‑aware, grounded, signal‑verified.</p>
              </div>
              <div className="glass">
                <h3>Infrastructure</h3>
                <p>Engineered as a system. Not a chatbot.</p>
              </div>
            </section>

            <footer className="glass">
              <span>Developed by Abdellah El Fatnassi</span>
              <span className="legal">Ultravision AI · Private System</span>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}
