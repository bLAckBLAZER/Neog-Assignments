const badge = document.querySelector(".badge-hide");
const button = document.querySelector(".button-hide");

button.addEventListener("click", (e) => {
  badge.classList.toggle("hidden");
});
