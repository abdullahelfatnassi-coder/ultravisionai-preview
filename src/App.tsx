import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [boot, setBoot] = useState(true);
  const [entered, setEntered] = useState(false);
  const camera = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 4200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!camera.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      camera.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.03)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={`system ${entered ? "entered" : ""}`}>
      {boot && (
        <div className="boot">
          <div className="scan" />
          <div className="logs">
            <div>ULTRAVISION CORE ONLINE</div>
            <div>PERCEPTION LAYERS ACTIVE</div>
            <div>REALITY SYNCED</div>
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
            <section className="hero">
              <h1>Ultravision AI</h1>
              <p>
                A private intelligence system designed to perceive,
                interpret, and reason across reality.
              </p>
            </section>

            <section className="pillars">
              <div>
                <h3>Perception</h3>
                <p>Vision, sound, documents, environments.</p>
              </div>
              <div>
                <h3>Reasoning</h3>
                <p>Grounded, source‑aware, signal‑verified.</p>
              </div>
              <div>
                <h3>Infrastructure</h3>
                <p>Built as a system, not a chatbot.</p>
              </div>
            </section>

            <footer>
              <span>Developed by Abdellah El Fatnassi</span>
              <span className="legal">Ultravision AI · Private System</span>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}
