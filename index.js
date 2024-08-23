const container = document.querySelector(".container");
const button = document.querySelector(".btn-new");
const clear = document.querySelector(".btn-clear");
const defaultColor = document.querySelector(".btn-default");
const randomColor = document.querySelector(".btn-rgb");
const darkeningEffect = document.querySelector(".btn-darkening");
const gridMessage = document.querySelector(".message");

function clearGrid() {
  container.innerHTML = "";
}

createNewGrid = (num) => {
  clearGrid();
  const containerSize = 704;

  const squareSize = containerSize / num;

  const message = document.createElement("p");
  message.textContent = "Created a " + num + "x" + num + " grid";
  gridMessage.replaceChildren(message);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);

      const applyColorMode = (mode) => {
        switch (mode) {
          case "default":
            square.style.backgroundColor = "black";
            break;
          case "random":
            let r = Math.random() * 256;
            let g = Math.random() * 256;
            let b = Math.random() * 256;
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            break;
          case "darken":
            if (!square.dataset.opacity) {
              square.dataset.opacity = 0;
            }
            let opacity = parseFloat(square.dataset.opacity);
            if (opacity < 1) {
              opacity += 0.1;
              square.dataset.opacity = opacity;
              square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            break;
        }
      };

      defaultColor.addEventListener("click", () => {
        square.onmouseover = () => applyColorMode("default");
      });

      randomColor.addEventListener("click", () => {
        square.onmouseover = () => applyColorMode("random");
      });

      darkeningEffect.addEventListener("click", () => {
        square.onmouseover = () => applyColorMode("darken");
      });
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
