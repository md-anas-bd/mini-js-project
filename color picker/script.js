const contain = document.querySelector(".container"); // Use dot for class
const button = document.querySelector(".btn"); // Use dot for class
const colorName = document.querySelector("#colorName"); // Use hash for ID

let colors = ["red", "blue", "green", "yellow", "purple"];
let currentColorIndex = 0;

button.addEventListener("click", function () {
    currentColorIndex++;
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    button.style.backgroundColor = colors[currentColorIndex]; // Change button color
    colorName.textContent = `Current color: ${colors[currentColorIndex]}`; // Update color name
});
