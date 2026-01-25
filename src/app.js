const glass = document.querySelector(".glass");
const scene = document.querySelector(".scene");
const boot = document.getElementById("boot");
const toggle = document.getElementById("visionToggle");
const form = document.getElementById("accessForm");

/* BOOT */
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

/* FORMSPREE — CLEAN SUBMIT */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  document.body.style.transition = "all 1.2s ease";
  document.body.style.filter = "blur(14px)";
  document.body.style.opacity = "0";

  try {
    await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setTimeout(() => {
      document.body.style.filter = "none";
      document.body.style.opacity = "1";
      alert("Access request received.\nUltravision AI is initializing.");
      form.reset();
    }, 900);
  } catch (err) {
    alert("Submission failed. Try again.");
  }
});
