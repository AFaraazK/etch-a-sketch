const grid = document.querySelector(".grid");
let cursorColor = "black";

function createGrid(size){    
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    for(let i=0;i<size**2;i++){
        let square = document.createElement("div");
        square.classList.add("gridSquare");
        square.style.backgroundColor = "white";

        // eventListener for mouse hover
        // > change color of div to black
        square.addEventListener("mouseover", e => {
            square.style.backgroundColor = `${cursorColor}`;
        });

        grid.insertAdjacentElement('beforeend',square);
    }
}

function changeColor(newColor){
    cursorColor = newColor;
}

function reset(){
    const board = document.querySelector(".grid");
    let squares = board.querySelectorAll(".gridSquare");
    squares.forEach((div) =>(div.style.backgroundColor = "white"));
}

function changeGridSize(){
    let newSize = prompt("New Size: ");
    reset();
    createGrid(newSize);
}

createGrid(16);