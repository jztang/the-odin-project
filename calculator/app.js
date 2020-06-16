let calcEntry = ""; // expression being entered

// flags for making sure operations are correct
let hasDecimal = false;
let isNumber = false;
let isNegative = false;

// numbers
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#button-${i}`).addEventListener("click", () => {
        calcEntry += i;
        isNumber = true;
        updateDisplay();
    });
}

// decimals
document.querySelector("#button-decimal").addEventListener("click", () => {
    if (!hasDecimal) {
        calcEntry += ".";
        hasDecimal = true;
        isNegative = true;
        updateDisplay();
    }
});

// operators
let operators = ["divide", "multiply", "subtract", "add"];
let operatorSymbols = ["÷", "×", "−", "+"];
for (let i = 0; i < operators.length; i++) {
    document.querySelector(`#button-${operators[i]}`).addEventListener("click", () => {
        if (isNumber) {
            calcEntry += operatorSymbols[i];
            hasDecimal = false;
            isNumber = false;
            isNegative = false;
            updateDisplay();
        // subtract can also make a number negative
        } else if (operators[i] === "subtract" && !isNegative) {
            calcEntry += "-";
            isNegative = true;
            updateDisplay();
        }
    });
}

// do a calculation based on the operator and two numbers
function operate(operator, x, y) {
    switch (operator) {
        case "add": return x + y;
        case "subtract": return x - y;
        case "multiply": return x * y;
        case "divide": return x / y;
    }
}

// updates the calculator display
function updateDisplay() {
    document.querySelector("#display-text").textContent = calcEntry;
}