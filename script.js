const container = document.querySelector(".container");
const clear = document.querySelector("#clear");

//on load execute the following functions:
window.onload = () => {
    generateSquares()
}

//Event Listeners
clear.addEventListener('click', clearAll);

//generate squares inside the container
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

//clear all collors 
function clearAll () {
    container.textContent = "";
    generateSquares();
}


function changeColor (e) {
    e.target.style.backgroundColor = "red";
}