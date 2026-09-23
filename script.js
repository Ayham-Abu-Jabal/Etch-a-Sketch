function createGrid(size) {
    const container = document.querySelector("#grid-container");
    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener("mouseover", ()=>{cell.style.backgroundColor = "black";});
        container.appendChild(cell);
    }
}
createGrid(16);

