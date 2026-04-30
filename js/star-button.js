const star = document.getElementById("pullStar");
const menu = document.getElementById("pullMenu");

let isDragging = false;
let startY = 0;

star.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let distance = e.clientY - startY;

  if (distance > 30) {
    menu.classList.add("active");
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

star.addEventListener("click", () => {
  menu.classList.toggle("active");
});