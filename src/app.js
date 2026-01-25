const form = document.getElementById("accessForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.body.style.transition = "all 1s ease";
  document.body.style.transform = "scale(1.12)";
  document.body.style.opacity = "0";

  setTimeout(() => {
    alert(
      "Access request received.\n\nUltravision AI is initializing."
    );
    document.body.style.transform = "scale(1)";
    document.body.style.opacity = "1";
  }, 900);
});
