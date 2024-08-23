const container = document.querySelector(".container");
const button = document.querySelector(".btn-new");
const clear = document.querySelector(".btn-clear");
const defaultColor = document.querySelector(".btn-default");
const randomColor = document.querySelector(".btn-rgb");
const darkeningEffect = document.querySelector(".btn-darkening");

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

      defaultColor.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "black";
        });
      });

      randomColor.addEventListener("click", () => {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
      });

      darkeningEffect.addEventListener("click", () => {
        let opacity = 0;
        square.addEventListener("mouseover", () =>  {
          if (opacity < 1) {
            opacity += 0.1;
            square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
          }
        });
    })
  }
}
};

clear.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "rgb(256, 256, 256)";
  });
});

button.addEventListener("click", () => {
  let num = parseInt(prompt("Enter the number of squares per side: "), 10);

  if (!num || num < 1 || num > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  createNewGrid(num);
});

createNewGrid(16);
