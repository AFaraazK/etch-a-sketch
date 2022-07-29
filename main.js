const grid = document.querySelector(".grid");


for(let i=0;i<256;i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "white";

    // eventListener for mouse hover
    // > change color of div to black
    square.addEventListener("mouseover", e => {
        square.style.backgroundColor = "black";
    });

    grid.insertAdjacentElement('beforeend',square);
}
