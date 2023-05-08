const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");
const selected = document.getElementById("selected");

yearly.addEventListener("click", () => {
  selected.classList.add("right-0.5");
  selected.classList.remove("left-0.5");
});

monthly.addEventListener("click", () => {
  selected.classList.remove("right-0.5");
  selected.classList.add("left-0.5");
});
