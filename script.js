const lock = document.querySelector(".lock");
const app = document.querySelector(".app");

lock.addEventListener("click", () => {
  lock.style.opacity = "0";
  setTimeout(() => {
    lock.style.display = "none";
    app.classList.add("unlocked");
  }, 600);
});

