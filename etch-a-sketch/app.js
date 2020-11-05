const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#new-grid");

// creates a grid of size n x n
function generateGrid(n) {
    // make sure max size is 100 x 100
    if (n > 100) n = 100; 

    // clear the grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    // set the proper css grid properties
    container.style.gridTemplate = `repeat(${n}, 1fr) / repeat(${n}, 1fr)`;

    // create the divs for the grid
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");

        // pick a random color for the div on hover
        div.addEventListener("mouseenter", () => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = randomColor;
        });

        container.appendChild(div);
    }
}

newGridBtn.addEventListener("click", () => {
    generateGrid(prompt("Enter the width/height for the new grid (max: 100)"));
});

generateGrid(16);