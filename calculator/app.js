let displayText = "";

// numbers
for(let i = 0; i <= 9; i++) {
    document.querySelector(`#button-${i}`).addEventListener("click", () => {
        displayText += i;
        updateDisplay();
    });
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case "add": return add(x, y); break;
        case "subtract": return subtract(x, y); break;
        case "multiply": return multiply(x, y); break;
        case "divide": return divide(x, y); break;
    }
}

function updateDisplay() {
    document.querySelector("#display-text").textContent = displayText;
}