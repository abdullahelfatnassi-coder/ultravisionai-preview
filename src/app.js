const button = document.getElementById("enterBtn");

if (button) {
  button.addEventListener("click", () => {
    document.body.style.transition = "all 1s ease";
    document.body.style.transform = "scale(1.15)";
    document.body.style.opacity = "0";

    setTimeout(() => {
      alert("Access request received.\nUltravision AI is initializing.");
      document.body.style.transform = "scale(1)";
      document.body.style.opacity = "1";
    }, 1000);
  });
}
