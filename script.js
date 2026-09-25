function createGrid(size) {
    const container = document.querySelector("#grid-container");
    const grids = container.querySelectorAll("div");
    grids.forEach((div) => div.remove());

    if (size === 0) {
        container.style.border = "none";
        return;
    } else {
        container.style.border = "1px solid black";
    }



    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell);
    }
}

createGrid(16);

function changeGridSize(size) {
    const error = document.querySelector(".error");
    if (!size || size > 64 || size < 1) {
        error.innerText = "Error! Please enter a number between 1 and 64.";
        error.style.color = "white";
        error.style.border = "1px solid red";
        error.style.backgroundColor = "red";
        createGrid(0);
    } else {
        error.innerText = "";
        error.style.border = "none";
        error.style.backgroundColor = "transparent";
        createGrid(size);
    }
}

const sizeBtn = document.querySelector(".button-s");
sizeBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter size of the grid (1-64)"));
    changeGridSize(size);
});