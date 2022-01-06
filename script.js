const container = document.querySelector(".container");
function generateSquares (size = 16) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let totalSize = size * size;
    for (let i = 0; i < totalSize; i++) {
        let smallSquare = document.createElement('div');
        smallSquare.classList.add("squares");
        smallSquare.addEventListener('mouseover', changeColor);
        container.appendChild(smallSquare);
    }
}

function changeColor (e) {
    let squareBackground = e.target.style;
    if (color == "black") {
        squareBackground.backgroundColor = "black";
        return;
    } else if (color == "rainbow") {
        let rainbowColor = Math.floor(Math.random()*16777215).toString(16);
        squareBackground.backgroundColor = "#" + rainbowColor;
        
        return;
    } else if (color == "eraser") {
        squareBackground.backgroundColor = "white";
        return;
    }
    squareBackground.backgroundColor = color;    
}

function setColor (chooseColor = "black") {
    color = chooseColor;
}

function clearAll () {
    container.textContent = "";
    let userSize = prompt("Please enter a number between 1 and 100:");
    while (userSize < 1 || userSize > 100 || isNaN(userSize)) {
        userSize = prompt("Enter a number between 1 and 100:");
    }
    generateSquares(userSize);
}
clear.addEventListener('click', clearAll);

window.onload = () => {
    generateSquares();
    setColor();
}