const glass = document.querySelector(".glass");
const form = document.getElementById("accessForm");

/* VISION PRO–STYLE PARALLAX */
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

/* RESET ON LEAVE */
window.addEventListener("mouseleave", () => {
  glass.style.transform = "rotateX(0deg) rotateY(0deg)";
});

/* ACCESS TRANSITION */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.body.style.transition = "all 1.1s ease";
  document.body.style.filter = "blur(10px)";
  document.body.style.opacity = "0";

  setTimeout(() => {
    alert("Ultravision AI is initializing.\nAccess request recorded.");
    document.body.style.filter = "blur(0)";
    document.body.style.opacity = "1";
  }, 1000);
});
