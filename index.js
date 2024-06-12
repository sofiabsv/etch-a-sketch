const container = document.querySelector(".container");

function clearGrid() {
  container.innerHTML = "";
}

createNewGrid = (num) => {
  clearGrid();
  const borderWidth = 1;
  const squareSize = (704 - num * borderWidth * 2) / num;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    }
  }
};

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let num = parseInt(prompt("Enter the number of squares per side: "), 10);

  if (!num || num < 1 || num > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  createNewGrid(num);
});

createNewGrid(16);
