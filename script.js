const intro = document.getElementById("intro");
const main = document.getElementById("main");

intro.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
  }, 600);
});
