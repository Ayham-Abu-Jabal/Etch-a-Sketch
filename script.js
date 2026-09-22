const container = document.getElementById("grid-container");
function createGrid(){
    for(let i = 0; i <16*16; i++){
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
    }
}
createGrid();
const grid = document.querySelector(".grid-cell");
grid.addEventListener("mouseenter", ()=> {
    grid.style.color = "black";
});