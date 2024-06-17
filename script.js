const container = document.querySelector(".container");
const customizeButton = document.querySelector("#customizeButton");
const clearButton = document.querySelector("#clearButton");

function createGrid(size){   
    container.innerHTML = "";
    const containerSize = 400;
    const squareSize = containerSize / size;
for (let i = 0; i < size * size; i++){
    let squares = document.createElement("div");
    squares.classList.add("square");
    squares.style.width = `${squareSize}px`;
    squares.style.height = `${squareSize}px`;
    squares.addEventListener("mouseover", () => {
    squares.style.backgroundColor = "black"
    })
    container.appendChild(squares)  
}};


customizeButton.addEventListener("click", () => {
let userInput = prompt("How many squares on each side (Max: 100)")
if (userInput > 100){
    alert("You exceeded the maximum number")
    return
}
createGrid(userInput)
})

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => 
    square.style.backgroundColor = "white")
})

createGrid(16)