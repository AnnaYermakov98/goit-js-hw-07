
const input = document.querySelector("input");
const createBtn= document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyBoxes);
createBtn.addEventListener("ckick", createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes (amount) {
  boxesContainer.innerHTML = "";
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount > 0 && amount <= 100) {
  createBoxes(amount);
  }
});
