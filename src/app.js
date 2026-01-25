const glass = document.querySelector(".glass");
const scene = document.querySelector(".scene");
const boot = document.getElementById("boot");
const toggle = document.getElementById("visionToggle");

/* BOOT REVEAL */
setTimeout(() => {
  boot.remove();
  scene.classList.remove("hidden");
}, 2600);

/* PARALLAX */
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 14;

  glass.style.transform = `
    rotateX(${-y}deg)
    rotateY(${x}deg)
    translateZ(20px)
  `;
});

/* RESET */
window.addEventListener("mouseleave", () => {
  glass.style.transform = "rotateX(0deg) rotateY(0deg)";
});

/* VISION PRO TOGGLE */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("vision");
  toggle.textContent = document.body.classList.contains("vision")
    ? "Disable Vision Pro Mode"
    : "Enable Vision Pro Mode";
});
