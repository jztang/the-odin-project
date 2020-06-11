// initialize grid
for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mouseenter", () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = randomColor;
    });

    document.querySelector("#container").appendChild(div);
}
