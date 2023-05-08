const expandBtns = document.querySelectorAll(".expand-btn");
const displayBlocks = document.querySelectorAll(".display-on-click");

expandBtns.forEach((expandBtn, i) => {
  expandBtn.addEventListener("click", () => {
    displayBlocks[i].classList.toggle("hidden");
    expandBtns[i].innerText = expandBtns[i].innerText === "+" ? "-" : "+";
  });
});
