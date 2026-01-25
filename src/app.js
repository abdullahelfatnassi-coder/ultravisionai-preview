const glass = document.querySelector(".glass");
const scene = document.querySelector(".scene");
const boot = document.getElementById("boot");
const form = document.getElementById("accessForm");

/* BOOT → REVEAL */
setTimeout(() => {
  if (boot) boot.remove();
  scene.classList.remove("hidden");
}, 2600);

/* VISION PRO PARALLAX */
window.addEventListener("mousemove", (e) => {
  if (!glass) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 14;

  glass.style.transform = `
    rotateX(${-y}deg)
    rotateY(${x}deg)
    translateZ(20px)
  `;
});

window.addEventListener("mouseleave", () => {
  glass.style.transform = "rotateX(0deg) rotateY(0deg)";
});

/* ACCESS TRANSITION */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.body.style.transition = "all 1s ease";
  document.body.style.filter = "blur(12px)";
  document.body.style.opacity = "0";

  setTimeout(() => {
    alert("Access request received.\nUltravision AI is initializing.");
    document.body.style.filter = "blur(0)";
    document.body.style.opacity = "1";
  }, 900);
});
