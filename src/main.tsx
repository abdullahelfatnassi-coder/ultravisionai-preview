const toggle = document.getElementById("visionToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("vision");

  if (document.body.classList.contains("vision")) {
    toggle.textContent = "Disable Vision Pro Mode";
  } else {
    toggle.textContent = "Enable Vision Pro Mode";
  }
});
