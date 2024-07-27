
const input = document.querySelector("input");
const createBtn= document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyHandler);
createBtn.addEventListener("click", createHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyHandler();
  amount = Number(amount);
  let size = 30;
  const boxesArray = [];
  
  for (let i = 0; i < amount; i++) {
    boxesArray.push(`<div 
     style="width: ${size}px;
     height: ${size}px;
     background-color: ${getRandomHexColor()};">
     </div>`);
    size += 10;
  }
    boxesContainer.insertAdjacentHTML("beforeend", boxesArray.join(""));
  }
    
function destroyHandler() {
  boxesContainer.innerHTML = "";
}

function createHandler() {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
      } else {
        alert(`enter a number between 1 and 100`);
      }
}
