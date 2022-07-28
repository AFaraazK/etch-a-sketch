const grid = document.querySelector(".grid");


for(let i=0;i<256;i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement('beforeend',square);
}