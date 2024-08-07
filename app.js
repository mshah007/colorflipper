const pressed = document.querySelector(".btn");
const main = document.querySelector("body");
pressed.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let col = `rgb(${red}, ${green}, ${blue})`;
  main.style.backgroundColor = col;
});
