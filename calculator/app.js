let calcEntry = "";
let hasDecimal = false;

// numbers
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#button-${i}`).addEventListener("click", () => {
        calcEntry += i;
        updateDisplay();
    });
}

// decimals
document.querySelector("#button-decimal").addEventListener("click", () => {
    if (!hasDecimal) {
        calcEntry += ".";
        hasDecimal = true;
        updateDisplay();
    }
});

function operate(operator, x, y) {
    switch (operator) {
        case "add": return x + y;
        case "subtract": return x - y;
        case "multiply": return x * y;
        case "divide": return x / y;
    }
}

function updateDisplay() {
    document.querySelector("#display-text").textContent = calcEntry;
}